"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpDefaultValues } from "@/lib/constants";
import { authClient } from "@/lib/auth-client";

export default function CredentialsSignInForm() {
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    // Comprobaciones de los campos del formulario
    if (!name || !email || !password) return;

    await authClient.signUp.email({
      name,
      email,
      password,
    },
    {
      onRequest: () => {},
      onResponse: () => {},
      onError: (ctx) => { console.log(ctx.error.message)},
      onSuccess: () => {"Login correcto"},
    }
  );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            defaultValue={signUpDefaultValues.name}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            defaultValue={signUpDefaultValues.email}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="text"
            defaultValue={signUpDefaultValues.password}
            required
          />
        </div>
        <div>
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    </form>
  );
}
