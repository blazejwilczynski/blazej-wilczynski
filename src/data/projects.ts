// src/data/projects.ts
// Dane projektów do importu w ProjectsShowcase.astro
//
// WAŻNE: zdjęcia muszą siedzieć w src/assets/ (nie w public/), żeby Astro
// mogło je zoptymalizować przy buildzie (kompresja, generowanie odpowiednich
// rozmiarów, lazy loading). Import działa jak zwykły import JS/TS.
//
// Zalecana rozdzielczość źródłowa: min. 1600px na dłuższym boku, .jpg/.webp,
// jakość ok. 80%. Astro samo przeskaluje do potrzebnego rozmiaru w każdym miejscu.

import type { ImageMetadata } from "astro";

import cartoonSkateRoom from "../assets/projects/cartoon-skate-room-01.webp";
import destinyRoom from "../assets/projects/destiny-room.webp";
import ornithopter from "../assets/projects/ornithopter-01.webp";
import rockstarPoster from "../assets/projects/rockstar-poster-01.webp";
import starWarsBanksy from "../assets/projects/star-wars-banksy-room-01.webp";
import videoGamesBathroom from "../assets/projects/videogames-bathroom-01.webp";

export interface Project {
  slug: string;
  title: string;
  category?: string;
  image: ImageMetadata;
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "destiny-contest",
    title: "Praca konkursowa – Destiny",
    category: "3D / Interior",
    image: destinyRoom,
    description: `
    To praca konkursowa organizowana przez Playstation Poland i stronę jarock.pl
Musiałem zrobić coś inspirowanego grą "DESTINY".
Napis na ścianie oznacza Nieważne gdzie grasz. Ważne, że jesteś w Destiny.
I na koniec – zdobyła 2. miejsce!
    `,
  },
  {
    slug: "identyfikacja-marki",
    title: "Identyfikacja marki",
    category: "Grafika",
    image: videoGamesBathroom,
    description: "Opis projektu identyfikacji marki - podmień na swój tekst.",
  },
  {
    slug: "strona-portfolio",
    title: "Strona portfolio",
    category: "Web",
    image: ornithopter,
    description: "Opis projektu strony portfolio - podmień na swój tekst.",
  },
  {
    slug: "salon-minimalistyczny",
    title: "Salon minimalistyczny",
    category: "Wnętrza",
    image: cartoonSkateRoom,
    description: "Opis projektu salonu - podmień na swój tekst.",
  },
  {
    slug: "okladka-ksiazki",
    title: "Okładka książki",
    category: "Grafika",
    image: rockstarPoster,
    description: "Opis projektu okładki książki - podmień na swój tekst.",
  },
  {
    slug: "aplikacja-mobilna",
    title: "Aplikacja mobilna",
    category: "Web",
    image: starWarsBanksy,
    description: "Opis projektu aplikacji mobilnej - podmień na swój tekst.",
  },
];
