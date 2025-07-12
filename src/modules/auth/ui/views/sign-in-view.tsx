"use client";

import { Card, CardContent } from "@/components/ui/card";

export function SignInView() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action="">Col 1</form>
          <div className="bg-radial from-violet-700 to-violet-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/logo.svg" alt="Image" className="h-[92px] w-[92px]" />
            <p className="text-4xl font-semibold text-white font-inter">
              MeetMinds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
