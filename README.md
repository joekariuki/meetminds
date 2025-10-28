
<!-- <a href="https://meetminds.app/">
<img alt="MeetMinds" src="./public/og.jpg">
</a> -->

<div align="center">
    <h1>MeetMinds</h1>
    <p>
        Create personal AI agents for on-demand coaching and live video calls.
    </p>
</div>

## Why I Built This

Earlier this year (2025), I was fortunate to be selected for Mastercard Foundation's FAST program, a six-month cohort-based program for founders. The program included non-dilutive funding, business coaching, and coursework on business fundamentals. I had monthly calls with a business coach to discuss goals, tackle challenges, and get guidance. Those sessions were incredibly valuable.

When the program ended, I wanted to keep that momentum going. I started using ChatGPT's advanced voice mode for coaching conversations, but something was missing. I couldn't record those sessions, organize them by topic, or generate notes to reference later. I wanted to recreate that feeling of being on a real coaching call, but with the flexibility and permanence of recorded sessions.

That's how MeetMinds came to life. A place where you can create custom AI agents tailored to your needs, have video calls with them, and keep a complete record of every conversation with transcripts, summaries, and AI-powered search. Whether it's business coaching, language learning, or life advice, you now have a way to organize these conversations and come back to them whenever you need.

## Features

- **Custom AI Agents**: Create personalized agents with unique instructions and avatars
- **Real-Time Video Calls**: Have live conversations with your AI agents using Stream Video SDK
- **Meeting Management**: Track all your sessions with statuses (upcoming, active, completed, processing)
- **Automatic Recordings**: Every call is recorded for future reference
- **AI-Generated Transcripts**: Get accurate transcriptions of your conversations
- **Smart Summaries**: AI-powered summaries highlight key insights and action items
- **Meeting Q&A**: Ask questions about your past conversations using AI chat
- **Transcript Search**: Find specific moments across all your meetings
- **Video Playback**: Review your recordings anytime
- **Subscription Plans**: Flexible pricing tiers powered by Polar
- **Secure Authentication**: Seamless login experience with Better Auth
- **Mobile Responsive**: Works beautifully on all devices

## How it works

1. Sign up or log in to your account
2. Create a custom AI agent with specific instructions (e.g., "Business Coach", "Spanish Tutor", "Life Advisor")
3. Start a meeting with your agent
4. Have a real-time video conversation
5. After the call, view your transcript, summary, and recording
6. Use the AI chat to ask questions about your meetings
7. Search through transcripts to find specific topics or moments

## Getting Started

You have two options for using MeetMinds:

### Use the Hosted Version

If you just want to start having AI coaching conversations right away, you can use the hosted version at [meetminds.app](https://meetminds.app).

The subscription plans are designed to cover the operational costs of running the service (API costs, hosting, storage, etc.). You'll be up and running in minutes without worrying about API keys or infrastructure.

### Self-Host

If you prefer to host it yourself, the entire codebase is open source and available here. You'll have full control over your data and infrastructure. Just follow the installation instructions below to get started.

## Prerequisites

Before running this application, make sure you have:

- Node.js 18.0 or later
- npm or pnpm package manager
- API keys for:
  - [OpenAI](https://platform.openai.com) - For AI conversations and summarization
  - [Stream](https://getstream.io) - For video and chat functionality
  - [Polar](https://polar.sh) - For subscription management
- A [Neon](https://neon.tech) PostgreSQL database

## Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=your_neon_database_url

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Stream Video & Chat
NEXT_PUBLIC_STREAM_VIDEO_API_KEY=your_stream_video_api_key
STREAM_VIDEO_SECRET_KEY=your_stream_video_secret_key
NEXT_PUBLIC_STREAM_CHAT_API_KEY=your_stream_chat_api_key
STREAM_CHAT_SECRET_KEY=your_stream_chat_secret_key

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Polar
POLAR_ACCESS_TOKEN=your_polar_access_token

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

## Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Push database schema
npm run db:push

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development

```bash
# Run Inngest dev server (for background jobs)
npm run dev:inngest

# Open Drizzle Studio (database management)
npm run db:studio
```

## Security Notes

- Never commit your `.env` file to version control
- Keep your API keys secure and rotate them regularly
- Use environment variables for all sensitive information

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React Framework with App Router
- [React 19](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Stream Video SDK](https://getstream.io/video/) - Real-time video calls
- [Stream Chat SDK](https://getstream.io/chat/) - Messaging functionality
- [OpenAI](https://openai.com/) - AI conversations and summarization
- [Better Auth](https://www.better-auth.com/) - Authentication
- [Polar](https://polar.sh) - Subscription management
- [Inngest](https://www.inngest.com/) - Background job processing
- [tRPC](https://trpc.io/) - Type-safe API layer
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM
- [Neon](https://neon.tech) - PostgreSQL database

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
