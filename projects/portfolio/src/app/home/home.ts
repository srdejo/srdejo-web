import { AfterViewInit, Component, DOCUMENT, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { StoryModal } from '../story-modal/story-modal';
import { RevealDirective } from '../reveal.directive';
import { StoryService } from '../story.service';
import { ContactApiService } from '../contact-api.service';
import { CERTIFICATIONS, EXPERIENCES, EXTRA_EXPERIENCES, Experience, ExtraExperience } from './home.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ThemeToggle, StoryModal, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly story = inject(StoryService);
  private readonly contactApi = inject(ContactApiService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  protected readonly experiences: Experience[] = EXPERIENCES;
  protected readonly extraExperiences: ExtraExperience[] = EXTRA_EXPERIENCES;
  protected readonly certifications: string[] = CERTIFICATIONS;

  protected readonly whatsappUrl =
    'https://wa.me/573127655754?text=Hola%20Daniel%2C%20vi%20tu%20landing%20y%20quiero%20contactarte.';
  protected readonly resumeUrl = 'Hoja de Vida Daniel Jimenez - Julio 2026.pdf';

  protected contactSubmitting = false;
  protected contactError = '';
  protected contactSuccessName = '';
  protected contactSent = false;

  constructor() {
    this.title.setTitle('Daniel Jiménez | Senior Backend Engineer');
    this.meta.addTags([
      { name: 'description', content: 'Senior Backend Engineer especializado en arquitectura de microservicios, fintech y sistemas de pago. Experiencia con Java, Spring Boot, AWS y Kubernetes.' },
      { name: 'keywords', content: 'backend engineer, java, spring boot, microservicios, fintech, aws, arquitectura, kubernetes, docker' },
      { name: 'author', content: 'Daniel Jiménez' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:title', content: 'Daniel Jiménez | Senior Backend Engineer' },
      { property: 'og:description', content: 'Ingeniero Backend Senior especializado en arquitectura de microservicios, fintech y sistemas de pago escalables.' },
      { property: 'og:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { property: 'og:url', content: 'https://srdejo.github.io/' },
      { property: 'og:locale', content: 'es_ES' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Daniel Jiménez | Senior Backend Engineer' },
      { name: 'twitter:description', content: 'Ingeniero Backend Senior especializado en arquitectura de microservicios, fintech y sistemas de pago escalables.' },
      { name: 'twitter:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { name: 'theme-color', content: '#0A2233' },
    ]);

    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://srdejo.github.io/');
    this.document.head.appendChild(canonical);

    const jsonLd = this.document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Daniel Jiménez',
      jobTitle: 'Senior Backend Engineer',
      description: 'Ingeniero Backend Senior especializado en arquitectura de microservicios, fintech y sistemas de pago escalables.',
      url: 'https://srdejo.github.io/',
      image: 'https://srdejo.github.io/assets/perfil.jpg',
      email: 'srdejo@gmail.com',
      sameAs: ['https://linkedin.com/in/srdejo', 'https://github.com/srdejo'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ocaña',
        addressRegion: 'Norte de Santander',
        addressCountry: 'CO',
      },
    });
    this.document.head.appendChild(jsonLd);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const navLinks = document.querySelectorAll<HTMLElement>('.nav-link[data-section]');
    const sections = document.querySelectorAll<HTMLElement>('[data-section-id]');

    if ('IntersectionObserver' in window && sections.length && navLinks.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const id = (entry.target as HTMLElement).dataset['sectionId'];
              navLinks.forEach((link) => link.classList.toggle('active', link.dataset['section'] === id));
            }
          }
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
      );
      sections.forEach((section) => observer.observe(section));
    }
  }

  protected smoothScroll(event: MouseEvent, id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  protected openStory(item: Experience | ExtraExperience): void {
    this.story.open(item.story);
  }

  protected async submitContact(form: HTMLFormElement): Promise<void> {
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      this.contactError = 'Todos los campos son obligatorios.';
      return;
    }
    if (!emailRe.test(email)) {
      this.contactError = 'Ingresa un correo válido.';
      return;
    }

    this.contactSubmitting = true;
    this.contactError = '';

    try {
      await this.contactApi.send({ name, email, message });
      this.contactSuccessName = name;
      this.contactSent = true;
    } catch {
      this.contactError = 'No se pudo enviar. Intenta de nuevo o escribe por WhatsApp.';
    } finally {
      this.contactSubmitting = false;
    }
  }

  protected resetContact(form: HTMLFormElement): void {
    form.reset();
    this.contactSent = false;
    this.contactError = '';
  }
}
