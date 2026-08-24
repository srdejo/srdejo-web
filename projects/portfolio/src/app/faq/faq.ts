import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { ContactApiService } from '../contact-api.service';
import { FAQ_CATEGORIES, FaqCategory } from './faq.data';

@Component({
  selector: 'app-faq',
  imports: [RouterLink, ThemeToggle],
  templateUrl: './faq.html',
})
export class Faq {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly contactApi = inject(ContactApiService);

  protected readonly categories: FaqCategory[] = FAQ_CATEGORIES;
  protected readonly openItems = new Set<string>();

  protected suggestSubmitting = false;
  protected suggestError = '';
  protected suggestSent = false;

  constructor() {
    const t = 'Preguntas frecuentes en entrevistas | Daniel Jiménez';
    const d = 'Conceptos técnicos que suelo repasar antes de una entrevista: SOLID, microservicios, patrones de diseño, POO y estructuras de datos en Java.';
    this.title.setTitle(t);
    this.meta.addTags([
      { name: 'description', content: d },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: t },
      { property: 'og:description', content: 'Conceptos técnicos que suelo repasar antes de una entrevista, explicados de forma sencilla y con ejemplos.' },
      { property: 'og:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { property: 'og:url', content: 'https://srdejo.github.io/preguntas-frecuentes' },
      { property: 'og:locale', content: 'es_ES' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: t },
      { name: 'twitter:description', content: 'Conceptos técnicos que suelo repasar antes de una entrevista, explicados de forma sencilla y con ejemplos.' },
      { name: 'twitter:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { name: 'theme-color', content: '#0A2233' },
    ]);

    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://srdejo.github.io/preguntas-frecuentes');
    this.document.head.appendChild(canonical);
  }

  protected toggle(key: string): void {
    if (this.openItems.has(key)) this.openItems.delete(key);
    else this.openItems.add(key);
  }

  protected isOpen(key: string): boolean {
    return this.openItems.has(key);
  }

  protected async submitSuggestion(form: HTMLFormElement): Promise<void> {
    const data = new FormData(form);
    const question = String(data.get('question') ?? '').trim();
    const answer = String(data.get('answer') ?? '').trim();

    if (!question || !answer) {
      this.suggestError = 'Escribe la pregunta y la respuesta.';
      return;
    }

    const message = `Asunto: Pregunta: ${question}\n\nPREGUNTA\n${question}\n\nRESPUESTA CORRECTA\n${answer}`;

    this.suggestSubmitting = true;
    this.suggestError = '';

    try {
      await this.contactApi.send({ name: `Pregunta: ${question}`, email: 'faq@danieljimenez.dev', message });
      this.suggestSent = true;
    } catch {
      this.suggestError = 'No se pudo enviar. Intenta de nuevo más tarde.';
    } finally {
      this.suggestSubmitting = false;
    }
  }

  protected resetSuggestion(form: HTMLFormElement): void {
    form.reset();
    this.suggestSent = false;
    this.suggestError = '';
  }
}
