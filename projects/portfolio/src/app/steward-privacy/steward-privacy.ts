import { Component, DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-steward-privacy',
  templateUrl: './steward-privacy.html',
  styleUrl: './steward-privacy.css',
})
export class StewardPrivacy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    const t = 'Steward – Privacy Policy';
    const d = 'Steward stores all financial data locally on your device. No personal or financial information is shared with third parties.';
    this.title.setTitle(t);
    this.meta.addTags([
      { name: 'description', content: d },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Steward' },
      { property: 'og:title', content: t },
      { property: 'og:description', content: d },
      { property: 'og:image', content: 'https://srdejo.github.io/steward-privacy/og-steward.svg' },
      { property: 'og:image:type', content: 'image/svg+xml' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Steward – Mayordomía que transforma' },
      { property: 'og:url', content: 'https://srdejo.github.io/steward-privacy' },
      { property: 'og:locale', content: 'es_ES' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: t },
      { name: 'twitter:description', content: d },
      { name: 'twitter:image', content: 'https://srdejo.github.io/steward-privacy/og-steward.svg' },
      { name: 'theme-color', content: '#2d4a39' },
    ]);

    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://srdejo.github.io/steward-privacy');
    this.document.head.appendChild(canonical);
  }
}
