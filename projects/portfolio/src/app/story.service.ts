import { Injectable, signal } from '@angular/core';

export interface Story {
  company: string;
  title: string;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class StoryService {
  readonly current = signal<Story | null>(null);

  open(story: Story): void {
    this.current.set(story);
  }

  close(): void {
    this.current.set(null);
  }
}
