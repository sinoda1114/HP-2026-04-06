"use client";

import { Alert } from "@heroui/react/alert";
import { Button } from "@heroui/react/button";
import { Input } from "@heroui/react/input";
import { Label } from "@heroui/react/label";
import { TextArea } from "@heroui/react/textarea";
import { TextField } from "@heroui/react/textfield";
import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <Alert status="success" className="w-full">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Description>
            お問い合わせを送信しました。内容を確認のうえ、折り返しご連絡いたします。
          </Alert.Description>
        </Alert.Content>
      </Alert>
    );
  }

  return (
    <form action={formAction} className="space-y-6" autoComplete="off">
      <input
        type="text"
        name="_wf_hp"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <TextField name="name" isRequired>
        <Label>お名前</Label>
        <Input maxLength={100} />
        {state.fieldErrors?.name?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.name[0]}</p>
        ) : null}
      </TextField>

      <TextField name="email" isRequired>
        <Label>メールアドレス</Label>
        <Input type="email" autoComplete="email" />
        {state.fieldErrors?.email?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email[0]}</p>
        ) : null}
      </TextField>

      <TextField name="subject" isRequired>
        <Label>件名</Label>
        <Input maxLength={200} />
        {state.fieldErrors?.subject?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.subject[0]}</p>
        ) : null}
      </TextField>

      <TextField name="message" isRequired>
        <Label>お問い合わせ内容</Label>
        <TextArea rows={6} maxLength={10000} />
        {state.fieldErrors?.message?.[0] ? (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.message[0]}</p>
        ) : null}
      </TextField>

      {state.error ? (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      ) : null}

      <Button type="submit" variant="primary" isPending={pending} fullWidth className="sm:w-auto sm:min-w-40">
        {pending ? "送信中…" : "送信する"}
      </Button>

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
