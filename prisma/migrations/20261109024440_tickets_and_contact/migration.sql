-- Wrapped in one transaction: if any statement fails, none of them apply
-- and the live site keeps its old schema (see AGENTS.md).
BEGIN;

-- CreateTable
CREATE TABLE "ticket_requests" (
    "id" SERIAL NOT NULL,
    "event_slug" VARCHAR(80) NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "business" VARCHAR(120) NOT NULL,
    "trade" VARCHAR(60) NOT NULL,
    "email" VARCHAR(160) NOT NULL,
    "phone" VARCHAR(30) NOT NULL DEFAULT '',
    "seats" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" SERIAL NOT NULL,
    "topic" VARCHAR(20) NOT NULL DEFAULT 'general',
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(160) NOT NULL,
    "business" VARCHAR(120) NOT NULL DEFAULT '',
    "message" VARCHAR(4000) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_messages_pkey" PRIMARY KEY ("id")
);

COMMIT;
