import Link from "next/link";
import Markdown from "react-markdown";
import {
  BookOpenTextIcon,
  SparklesIcon,
  FileTextIcon,
  FileVideoIcon,
  ClockFadingIcon,
} from "lucide-react";
import { format } from "date-fns";

import { AvatarVariant } from "@/lib/avatar";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { CustomTabTrigger } from "@/components/custom-tab-trigger";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { Badge } from "@/components/ui/badge";

import { MeetingGetOne } from "../../types";
import { formatDuration } from "@/lib/utils";

const tabs = [
  {
    value: "summary",
    icon: BookOpenTextIcon,
    label: "Summary",
  },
  {
    value: "transcript",
    icon: FileTextIcon,
    label: "Transcript",
  },
  {
    value: "recording",
    icon: FileVideoIcon,
    label: "Recording",
  },
  {
    value: "chat",
    icon: SparklesIcon,
    label: "Ask AI",
  },
];

interface Props {
  data: MeetingGetOne;
}

export function CompletedState({ data }: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs defaultValue="summary">
        <div className="bg-white rounded-lg border px-3">
          <ScrollArea>
            <TabsList className="p-0 bg-background justify-start rounded-none h-13">
              {tabs.map((tab) => (
                <CustomTabTrigger
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  children={tab.label}
                />
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <TabsContent value="recording">
          <div className="bg-white rounded-lg border px-4 py-5">
            <video
              src={data.recordingUrl!}
              className="w-full rounded-lg"
              controls
            />
          </div>
        </TabsContent>
        <TabsContent value="summary">
          <div className="bg-white rounded-lg border">
            <div className="px-4 py-5 gap-y-5 flex flex-col col-span 5">
              <h2 className="text-2xl font-medium capitalize">{data.name}</h2>
              <div className="flex gap-x-2 items-center">
                <Link
                  href={`/agents/${data.agentId}`}
                  className="flex items-center gap-x-2 underline underline-offset-4 capitalize"
                >
                  <GeneratedAvatar
                    seed={data.agent.name}
                    variant={data.agent.avatarType as AvatarVariant}
                    className="size-6"
                  />
                  {data.agent.name}
                </Link>{" "}
                <p>{data.startedAt ? format(data.startedAt, "PPP") : ""}</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <SparklesIcon className="size-4" />
                <p>General Summary</p>
              </div>
              <Badge
                variant="outline"
                className="flex items-center gap-x-2 [&>svg]:size-4"
              >
                <ClockFadingIcon className="text-blue-700" />
                {data.duration ? formatDuration(data.duration) : "No duration"}
              </Badge>
              <div>
                <Markdown
                  components={{
                    h1: (props) => (
                      <h1 className="text-2xl font-medium mb-6" {...props} />
                    ),
                    h2: (props) => (
                      <h2 className="text-xl font-medium mb-6" {...props} />
                    ),
                    h3: (props) => (
                      <h3 className="text-lg font-medium mb-6" {...props} />
                    ),
                    h4: (props) => (
                      <h4 className="text-base font-medium mb-6" {...props} />
                    ),
                    p: (props) => (
                      <p className="mb-6 leading-relaxed" {...props} />
                    ),
                    ul: (props) => (
                      <ul className="mb-6 list-disc list-inside" {...props} />
                    ),
                    ol: (props) => (
                      <ol
                        className="mb-6 list-decimal list-inside"
                        {...props}
                      />
                    ),
                    li: (props) => <li className="mb-1" {...props} />,
                    strong: (props) => (
                      <strong className="font-semibold" {...props} />
                    ),
                    code: (props) => (
                      <code
                        className="bg-gray-100 rounded px-1 py-0.5"
                        {...props}
                      />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        className="border-l-4 pl-4 italic my-4"
                        {...props}
                      />
                    ),
                  }}
                >
                  {data.summary}
                </Markdown>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
