/**
 * BROWSER: the website's forms (`<form data-site-form>`), per AGENTS.md
 * "Buttons and forms":
 *   - `novalidate`; each field's rule (`data-rule`) comes from `src/lib/forms.ts`,
 *     the same rules the Site API enforces;
 *   - an error shows under its field on blur or submit, then updates as the
 *     visitor types and clears the moment the value is right;
 *   - submit validates everything, focuses the first wrong field and sends
 *     nothing until all pass; the button is pending (spinner, "Sending…",
 *     disabled, aria-busy) while it sends;
 *   - a server error naming a field shows under that field; any other shows
 *     beside the button. What the visitor typed is never cleared on error.
 */
import {check} from './forms';

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function initSiteForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-site-form]').forEach(setup);
}

function setup(form: HTMLFormElement) {
  const controls = Array.from(form.querySelectorAll<Control>('[data-rule]'));
  const touched = new Set<Control>();
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const alert = form.querySelector<HTMLElement>('[data-form-alert]');
  const done = document.getElementById(form.dataset.done ?? '');

  const errorEl = (control: Control) => document.getElementById(`${control.id}-error`);
  const hintId = (control: Control) => (document.getElementById(`${control.id}-hint`) ? `${control.id}-hint` : '');

  const show = (control: Control, message: string | null) => {
    const el = errorEl(control);
    if (!el) return;
    if (message) {
      el.textContent = message;
      el.hidden = false;
      control.setAttribute('aria-invalid', 'true');
      control.setAttribute('aria-describedby', el.id);
    } else {
      el.textContent = '';
      el.hidden = true;
      control.removeAttribute('aria-invalid');
      const hint = hintId(control);
      if (hint) control.setAttribute('aria-describedby', hint);
      else control.removeAttribute('aria-describedby');
    }
  };

  const validate = (control: Control) => {
    const message = check(control.dataset.rule!, control.value);
    show(control, message);
    return !message;
  };

  for (const control of controls) {
    control.addEventListener('blur', () => {
      // Leaving an untouched empty field is not an error yet... unless it was
      // typed in: the first blur after any input marks it.
      if (!control.value && !touched.has(control)) return;
      touched.add(control);
      validate(control);
    });
    const live = () => {
      if (touched.has(control)) validate(control);
    };
    control.addEventListener('input', live);
    control.addEventListener('change', live);
  }

  const setPending = (pending: boolean) => {
    submit.disabled = pending;
    if (pending) {
      submit.setAttribute('aria-busy', 'true');
      submit.dataset.label = submit.innerHTML;
      submit.innerHTML = '<span class="spinner" aria-hidden="true"></span>';
      submit.append(submit.dataset.pendingLabel ?? 'Sending…');
    } else {
      submit.removeAttribute('aria-busy');
      if (submit.dataset.label) submit.innerHTML = submit.dataset.label;
    }
  };

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (alert) alert.hidden = true;
    let firstBad: Control | null = null;
    for (const control of controls) {
      touched.add(control);
      if (!validate(control) && !firstBad) firstBad = control;
    }
    if (firstBad) {
      firstBad.focus();
      return;
    }

    const data: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setPending(true);
    try {
      const res = await fetch(form.dataset.endpoint!, {
        method: 'POST',
        headers: {'content-type': 'application/json', accept: 'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setPending(false);
        form.hidden = true;
        if (done) {
          done.hidden = false;
          done.focus();
        }
        return;
      }
      const body = (await res.json().catch(() => null)) as {message?: string; field?: string} | null;
      const target = body?.field ? controls.find(c => c.name === body.field) : undefined;
      if (target && body?.message) {
        show(target, body.message);
        target.focus();
      } else {
        fail(
          res.status === 503
            ? 'Sign-ups are not open yet on this site. Please email us instead.'
            : (body?.message ?? 'That did not go through. Please try again in a moment.')
        );
      }
    } catch {
      fail('We could not reach the server. Check your connection and try again.');
    }
    setPending(false);
  });

  const fail = (message: string) => {
    if (!alert) return;
    alert.textContent = message;
    alert.hidden = false;
  };
}
