import { TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from "lucide-react";

interface Props {
  value: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function CustomTabTrigger({ value, icon: Icon, children }: Props) {
  return (
    <TabsTrigger
      value={value}
      className="text-muted-foreground rounded-none bg-background data-[state=active]:shadow-none 
      border-b-2 border-transparent data-[state=active]:border-b-primary 
      data-[state=active]:text-accent-foreground h-full hover:text-accent-foreground"
    >
      <Icon />
      {children}
    </TabsTrigger>
  );
}
