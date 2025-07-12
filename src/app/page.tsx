"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";

export default function Home() {
  const { data: session, isPending } = authClient.useSession();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          window.alert("Success");
        },
        onError: (error) => {
          window.alert("Something went wrong");
        },
      }
    );
  };

  const onLogin = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          window.alert("Success");
        },
        onError: (error) => {
          window.alert("Something went wrong");
        },
      }
    );
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (session) {
    return (
      <div className="p-4 flex flex-col gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-4">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={onSubmit}>Create user</Button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
}
