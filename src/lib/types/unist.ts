import type { Node } from "unist";

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    [key: string]: unknown;
  } & NpmCommands;
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

export interface NpmCommands {
  __pnpmCommand__?: string;
  __yarnCommand__?: string;
  __npmCommand__?: string;
  __bunCommand__?: string;
}
