import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Project = {
  readonly title: string;
  readonly slug?: string; // Use this if the slug is optional
  readonly description: string;
    readonly imageUrl: string;
  readonly tags: string[];
  githubLink: string;
liveUrl: string;
notes: string;
futureImprovements: string;


  
};