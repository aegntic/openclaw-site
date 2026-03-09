create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  company text,
  stage text,
  use_case text,
  message text,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "service role manages waitlist"
on public.waitlist_signups
as permissive
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
