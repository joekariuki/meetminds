import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useTRPC } from "@/trpc/client";
import { AvatarVariant } from "@/lib/avatar";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GeneratedAvatar } from "@/components/generated-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "@/components/loader";

import { AgentGetOne } from "../../types";
import { agentsInsertSchema } from "../../schemas";

interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export function AgentForm({
  onSuccess,
  onCancel,
  initialValues,
}: AgentFormProps) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: async () => {
        // Invalidate the getMany query to show new created agent
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );

        // TODO: Invalidate free tier usage

        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);

        // TODO: Check if error code is "FORBIDDEN", redirect to /"upgrade"
      },
    })
  );

  const updateAgent = useMutation(
    trpc.agents.update.mutationOptions({
      onSuccess: async () => {
        // Invalidate the getMany query to show new created agent
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );

        // If we are editing an existing agent, invalidate the getOne query
        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.agents.getOne.queryOptions({
              id: initialValues.id,
            })
          );
        }
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);

        // TODO: Check if error code is "FORBIDDEN", redirect to /"upgrade"
      },
    })
  );

  type FormData = z.infer<typeof agentsInsertSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(agentsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      instructions: initialValues?.instructions ?? "",
      avatarType: (initialValues?.avatarType as AvatarVariant) ?? "notionists",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent.isPending || updateAgent.isPending;

  const onSubmit = (values: FormData) => {
    if (isEdit) {
      updateAgent.mutate({ ...values, id: initialValues.id });
    } else {
      createAgent.mutate(values);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <GeneratedAvatar
            seed={form.watch("name")}
            variant={form.watch("avatarType") as AvatarVariant}
            className="border size-16"
          />
          <FormField
            control={form.control}
            name="avatarType"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Avatar Style</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select avatar style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="notionists">Notionists</SelectItem>
                    <SelectItem value="openPeeps">Open Peeps</SelectItem>
                    <SelectItem value="lorelei">Lorelei</SelectItem>
                    <SelectItem value="botttsNeutral">Robots</SelectItem>
                    <SelectItem value="glass">Glass</SelectItem>
                    <SelectItem value="initials">Initials</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g Spanish Tutor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="You are a helpful assistant that can speak and answer questions about the Spanish language."
                  {...field}
                  rows={20}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-x-2">
          {onCancel && (
            <Button
              variant="ghost"
              disabled={isPending}
              onClick={() => onCancel()}
              type="button"
            >
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <div className="px-2">
                <Loader variant="inline" color="secondary" />
              </div>
            ) : (
              <>{isEdit ? "Update" : "Create"}</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
