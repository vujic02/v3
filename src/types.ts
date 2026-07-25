export type Theme = "dark" | "light";

export interface Job {
  hash: string;
  dates: string;
  title: string;
  desc: string;
  head?: boolean;
}

export interface FeaturedProject {
  name: string;
  tag?: string;
  flags: string;
  shot?: string;
  gif?: string;
  github?: string;
  live?: string;
  liveLabel?: string;
}

export interface ListedProject {
  name: string;
  stack: string;
  github?: string;
  live?: string;
}
