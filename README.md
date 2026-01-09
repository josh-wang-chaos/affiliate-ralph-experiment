# Affiliate Portal V2

Dashboard demo for an affiliate program portal built with Next.js App Router and Tailwind.

## Ralph Loop Note

This project was created by the Ralph Loop. The main work required is writing and refining the PRD, and the loop handles the implementation from there. Keep the PRD precise and iterate on it to drive changes.

### References

- [11 Tips For AI Coding With Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) — read this to learn how the Ralph Loop expects you to frame tasks, iterate, and collaborate with the agent.
- [Writing a Good Claude.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md) — read this to learn how to write clear agent instructions and keep project guidance maintainable.

## Package Manager

Use `pnpm` only in this repo.

## Features

- Dark-mode dashboard shell with sidebar + header
- Metric cards with trend indicators
- Revenue area chart with 7D/30D/90D toggle and tooltips
- Recent activity feed with relative timestamps
- Responsive layout (mobile drawer, tablet icon-only sidebar)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Recharts
- lucide-react

## Project Structure

- `src/app/(dashboard)` dashboard routes + layout
- `src/components` UI components (metric cards, chart, activity feed)
