import { Component, DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Landing } from './landing/landing';

const SITE_URL = 'https://srdejo.com.co';
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const TITLE = 'SRDEJO — Software a medida para pequeños negocios, impulsado por IA';
const DESCRIPTION =
  'Diseñamos y construimos software a medida para hoteles, joyerías, tiendas y distribuidoras, usando IA para desarrollar más rápido y a un costo accesible.';

@Component({
  selector: 'app-root',
  imports: [Landing],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.title.setTitle(TITLE);

    this.meta.addTags([
      { name: 'description', content: DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '2400' },
      { property: 'og:image:height', content: '1260' },
      { property: 'og:locale', content: 'es_CO' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
    ]);

    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', SITE_URL);
    this.document.head.appendChild(canonical);

    const jsonLd = this.document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SRDEJO',
      url: SITE_URL,
      description: DESCRIPTION,
      logo: `${SITE_URL}/assets/white-logo.png`,
      sameAs: ['https://srdejo.github.io/'],
    });
    this.document.head.appendChild(jsonLd);
  }
}
