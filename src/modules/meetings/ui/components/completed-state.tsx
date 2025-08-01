import {
  BookOpenTextIcon,
  SparklesIcon,
  FileTextIcon,
  FileVideoIcon,
  ClockFadingIcon,
} from "lucide-react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomTabTrigger } from "@/components/custom-tab-trigger";

import { MeetingGetOne } from "../../types";

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
      </Tabs>
    </div>
  );
}
