"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureIconProps {
  className?: string;
}

function CustomAgentsIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <rect x="7" y="8" width="10" height="8" rx="1.5" fill="currentColor" />
      <circle cx="10" cy="11" r="1" fill="white" />
      <circle cx="14" cy="11" r="1" fill="white" />
      <rect x="9" y="13" width="6" height="1.5" rx="0.75" fill="white" />
      <rect x="10.5" y="6" width="3" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

function VideoCallsIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <rect x="7" y="9" width="8" height="6" rx="1" fill="currentColor" />
      <path d="M15 9L17.5 7.5V16.5L15 15V9Z" fill="currentColor" />
      <circle cx="10" cy="12" r="1.5" fill="white" />
    </svg>
  );
}

function TranscriptsIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <rect x="7" y="6" width="10" height="12" rx="1" fill="currentColor" />
      <rect x="9" y="9" width="6" height="0.8" rx="0.4" fill="white" />
      <rect x="9" y="11" width="5" height="0.8" rx="0.4" fill="white" />
      <rect x="9" y="13" width="6" height="0.8" rx="0.4" fill="white" />
      <rect x="9" y="15" width="4" height="0.8" rx="0.4" fill="white" />
    </svg>
  );
}

function SummariesIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <path
        d="M12 6L12.8 9.2L16 10L12.8 10.8L12 14L11.2 10.8L8 10L11.2 9.2L12 6Z"
        fill="currentColor"
      />
      <path
        d="M7 12L7.4 13.2L8.6 13.6L7.4 14L7 15.2L6.6 14L5.4 13.6L6.6 13.2L7 12Z"
        fill="currentColor"
      />
      <path
        d="M17 12L17.4 13.2L18.6 13.6L17.4 14L17 15.2L16.6 14L15.4 13.6L16.6 13.2L17 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function QAChatIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <path
        d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V14C17 14.5523 16.5523 15 16 15H11L8 17V15H8C7.44772 15 7 14.5523 7 14V8Z"
        fill="currentColor"
      />
      <circle cx="10" cy="11" r="0.8" fill="white" />
      <circle cx="12" cy="11" r="0.8" fill="white" />
      <circle cx="14" cy="11" r="0.8" fill="white" />
    </svg>
  );
}

function SearchIcon({ className }: FeatureIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#F5F6F6" />
      <circle
        cx="10"
        cy="10"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M13.5 13.5L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const features = [
  {
    icon: CustomAgentsIcon,
    title: "Custom AI Agents",
    description:
      "Create personalized AI agents with unique instructions, personalities, and expertise tailored to your specific needs.",
    image: "/features/custom-agents.svg",
  },
  {
    icon: VideoCallsIcon,
    title: "Real-Time Video Calls",
    description:
      "Have live, interactive conversations with your AI agents through high-quality video calls powered by Stream SDK.",
    image: "/features/video-calls.svg",
  },
  {
    icon: TranscriptsIcon,
    title: "Automatic Transcripts",
    description:
      "Every conversation is automatically transcribed with accurate speech-to-text, making it easy to review and reference.",
    image: "/features/transcripts.svg",
  },
  {
    icon: SummariesIcon,
    title: "AI-Powered Summaries",
    description:
      "Get intelligent summaries of your sessions with key insights, action items, and important takeaways highlighted.",
    image: "/features/summaries.svg",
  },
  {
    icon: QAChatIcon,
    title: "Meeting Q&A Chat",
    description:
      "Ask questions about any of your past conversations and get instant answers from your meeting history.",
    image: "/features/qa-chat.svg",
  },
  {
    icon: SearchIcon,
    title: "Searchable Transcripts",
    description:
      "Find exactly what you're looking for across all your meetings with powerful transcript search capabilities.",
    image: "/features/search.svg",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16 text-balance">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything you need for AI coaching
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make your AI coaching sessions productive,
            organized, and always accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-background/50 backdrop-blur border-1 transition-all duration-300 hover:shadow-lg overflow-hidden group"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="size-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


