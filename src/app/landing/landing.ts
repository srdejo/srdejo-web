import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Paso {
  numero: string;
  titulo: string;
  texto: string;
}

interface Sector {
  nombre: string;
  texto: string;
}

interface Ventaja {
  titulo: string;
  texto: string;
}

interface EtapaPrecio {
  paso: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-landing',
  imports: [NgOptimizedImage],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  readonly whatsappUrl =
    'https://wa.me/573127655754?text=Hola%2C%20vi%20la%20landing%20de%20SRDEJO%20y%20quiero%20contactarte.';
  readonly portafolioUrl = 'https://srdejo.github.io/';
  readonly avatarUrl = 'https://srdejo.github.io/assets/landing/perfil-avatar-v3.jpg';

  readonly pasos: Paso[] = [
    {
      numero: '1',
      titulo: 'Escuchamos tu proceso',
      texto: 'Nos cuentas cómo funciona tu negocio hoy y qué tarea te quita más tiempo.',
    },
    {
      numero: '2',
      titulo: 'Diseñamos la solución',
      texto: 'Definimos qué construir: lo justo para resolver ese problema, sin funciones de sobra.',
    },
    {
      numero: '3',
      titulo: 'Desarrollamos con IA',
      texto: 'Usamos IA como motor de desarrollo para construir rápido, sin sacrificar calidad.',
    },
    {
      numero: '4',
      titulo: 'Lo pones a funcionar',
      texto: 'Entregamos, te acompañamos en la puesta en marcha y seguimos dando soporte.',
    },
  ];

  readonly sectores: Sector[] = [
    {
      nombre: 'Hoteles',
      texto: 'Gestión de reservas y disponibilidad pensada para hoteles pequeños e independientes.',
    },
    {
      nombre: 'Joyerías',
      texto: 'Control de inventario puntual: piezas, quilates y movimientos, sin complicaciones.',
    },
    {
      nombre: 'Tiendas',
      texto: 'Punto de venta e inventario simple para tiendas de barrio y negocios locales.',
    },
  ];

  readonly ventajas: Ventaja[] = [
    {
      titulo: 'Precio accesible',
      texto: 'Desarrollo más rápido con IA significa un costo que un negocio pequeño puede pagar.',
    },
    {
      titulo: 'Hecho a la medida',
      texto: 'No es un software genérico: se ajusta a cómo trabaja tu negocio.',
    },
    {
      titulo: 'Trato directo',
      texto: 'Hablas con quien construye el producto, no con un call center.',
    },
    {
      titulo: 'Crece contigo',
      texto: 'Empezamos simple y vamos sumando funciones a medida que tu negocio lo necesita.',
    },
  ];

  readonly etapasPrecio: EtapaPrecio[] = [
    {
      paso: 'Paso 1',
      titulo: 'Diagnóstico gratuito',
      texto: 'Conversamos sobre tu negocio y evaluamos si tiene sentido construir algo a la medida.',
    },
    {
      paso: 'Paso 2',
      titulo: 'Propuesta a medida',
      texto: 'Te compartimos alcance y costo del proyecto, sin letra pequeña.',
    },
    {
      paso: 'Paso 3',
      titulo: 'Soporte continuo',
      texto: 'Después de la entrega, seguimos disponibles para ajustes y mejoras.',
    },
  ];
}
