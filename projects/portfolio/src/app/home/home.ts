import { AfterViewInit, Component, DOCUMENT, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { StoryModal } from '../story-modal/story-modal';
import { RevealDirective } from '../reveal.directive';
import { StoryService } from '../story.service';
import { ContactApiService } from '../contact-api.service';
import { CERTIFICATIONS, EXPERIENCES, EXTRA_EXPERIENCES, Certification, Experience, ExtraExperience } from './home.data';

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
  protected readonly certifications: Certification[] = CERTIFICATIONS;

  protected readonly whatsappUrl =
    'https://wa.me/573127655754?text=Hola%20Daniel%2C%20vi%20tu%20landing%20y%20quiero%20contactarte.';
  protected readonly resumeUrl = 'Hoja-de-Vida-Daniel-Jimenez-Arquitecto-de-Software.pdf';

  protected contactSubmitting = false;
  protected contactError = '';
  protected contactSuccessName = '';
  protected contactSent = false;

  constructor() {
    this.title.setTitle('Daniel Jiménez | Arquitecto de Software Java, Spring Boot y AWS');
    this.meta.addTags([
      { name: 'description', content: 'Daniel Eduardo Jiménez Ovallos, Arquitecto de Software en Ocaña, Colombia. Más de 12 años en tecnología diseñando microservicios, monolitos modulares y arquitectura orientada a eventos en Java/Spring Boot sobre AWS, en banca y fintech.' },
      { name: 'keywords', content: 'arquitecto de software, software architect, Java, Spring Boot, microservicios, monolito modular, arquitectura hexagonal, arquitectura limpia, EDA, AWS, Terraform, OAuth 2.0, OWASP, fintech, banca, Colombia, Daniel Jiménez, srdejo' },
      { name: 'author', content: 'Daniel Eduardo Jiménez Ovallos' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
      { name: 'geo.region', content: 'CO-NSA' },
      { name: 'geo.placename', content: 'Ocaña, Norte de Santander' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:site_name', content: 'Daniel Jiménez — Arquitecto de Software' },
      { property: 'og:title', content: 'Daniel Jiménez | Arquitecto de Software Java, Spring Boot y AWS' },
      { property: 'og:description', content: 'Arquitectura de microservicios, monolitos modulares y sistemas orientados a eventos en Java/Spring Boot sobre AWS, en banca y fintech.' },
      { property: 'og:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Daniel Eduardo Jiménez Ovallos, Arquitecto de Software' },
      { property: 'og:url', content: 'https://srdejo.github.io/' },
      { property: 'og:locale', content: 'es_CO' },
      { property: 'profile:first_name', content: 'Daniel' },
      { property: 'profile:last_name', content: 'Jiménez Ovallos' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Daniel Jiménez | Arquitecto de Software Java, Spring Boot y AWS' },
      { name: 'twitter:description', content: 'Arquitectura de microservicios, monolitos modulares y sistemas orientados a eventos en Java/Spring Boot sobre AWS, en banca y fintech.' },
      { name: 'twitter:image', content: 'https://srdejo.github.io/assets/landing/social-preview.png' },
      { name: 'theme-color', content: '#0A2233' },
    ]);

    const canonical = this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://srdejo.github.io/');
    this.document.head.appendChild(canonical);

    const person = {
      '@type': 'Person',
      '@id': 'https://srdejo.github.io/#daniel',
      name: 'Daniel Eduardo Jiménez Ovallos',
      alternateName: 'Daniel Jiménez',
      jobTitle: 'Arquitecto de Software',
      description:
        'Arquitecto de Software con más de 12 años en tecnología y más de 3 años liderando la arquitectura de soluciones en producción en banca y fintech. Microservicios, monolitos modulares y arquitectura orientada a eventos en Java/Spring Boot sobre AWS.',
      url: 'https://srdejo.github.io/',
      image: 'https://srdejo.github.io/assets/landing/perfil-avatar-v3.jpg',
      email: 'srdejo@gmail.com',
      telephone: '+573127655754',
      knowsLanguage: [
        { '@type': 'Language', name: 'Español' },
        { '@type': 'Language', name: 'Inglés' },
      ],
      knowsAbout: [
        'Arquitectura de software',
        'Microservicios',
        'Monolito modular',
        'Arquitectura orientada a eventos',
        'Arquitectura hexagonal',
        'Java',
        'Spring Boot',
        'Spring Security',
        'OAuth 2.0',
        'OpenID Connect',
        'AWS',
        'Terraform',
        'Docker',
        'PostgreSQL',
        'Angular',
        'OWASP Top 10',
        'ISO 8583',
        'Fintech',
        'Banca',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Francisco de Paula Santander Ocaña',
      },
      sameAs: [
        'https://www.linkedin.com/in/srdejo',
        'https://github.com/srdejo',
        'https://platzi.com/p/srdejo90/',
        'https://srdejo.com.co/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ocaña',
        addressRegion: 'Norte de Santander',
        addressCountry: 'CO',
      },
    };

    const jsonLd = this.document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': 'https://srdejo.github.io/#profilepage',
          url: 'https://srdejo.github.io/',
          name: 'Daniel Jiménez | Arquitecto de Software Java, Spring Boot y AWS',
          inLanguage: 'es',
          mainEntity: { '@id': 'https://srdejo.github.io/#daniel' },
        },
        person,
      ],
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
