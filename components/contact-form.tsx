"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-900"
        role="status"
      >
        お問い合わせを送信しました。内容を確認のうえ、折り返しご連絡いたします。
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" autoComplete="off">
      {/* honeypot（値が入ると送信せず成功表示のみ — ブラウザの自動入力で誤爆しないよう name は一般的でないものに） */}
      <input
        type="text"
        name="_wf_hp"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)]">
          お名前 <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        />
        {state.fieldErrors?.name?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.name[0]}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)]">
          メールアドレス <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        />
        {state.fieldErrors?.email?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email[0]}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-ink)]">
          件名 <span className="text-red-600">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        />
        {state.fieldErrors?.subject?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.subject[0]}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)]">
          お問い合わせ内容 <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={10000}
          className="mt-2 w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm shadow-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        />
        {state.fieldErrors?.message?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.message[0]}</p>
        ) : null}
      </div>

      {state.error ? (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] disabled:opacity-60 sm:w-auto"
      >
        {pending ? "送信中…" : "送信する"}
      </button>

      <p className="text-xs text-[var(--color-muted)]">
        送信内容はお問い合わせ対応のために利用し、目的外では利用しません。詳しくは
        <a href="/privacy" className="text-[var(--color-primary)] hover:underline">
          プライバシーポリシー
        </a>
        をご覧ください。
      </p>
    </form>
  );
}
