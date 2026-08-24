import { Component, HostListener, inject } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-modal',
  template: `
    @if (story.current(); as s) {
      <div class="story-overlay" (click)="story.close()">
        <div class="story-modal" (click)="$event.stopPropagation()">
          <button type="button" class="story-close" (click)="story.close()" aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
          </button>
          <div class="story-eyebrow"><span class="line"></span><span>EXPERIENCIA SIGNIFICATIVA</span></div>
          <div class="story-company">{{ s.company }}</div>
          <div class="story-title">{{ s.title }}</div>
          <p class="story-text">{{ s.text }}</p>
        </div>
      </div>
    }
  `,
})
export class StoryModal {
  protected readonly story = inject(StoryService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.story.current()) this.story.close();
  }
}
