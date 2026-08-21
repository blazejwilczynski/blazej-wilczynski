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
import videoGamesBathroom02 from "../assets/projects/videogames-bathroom-02.webp";
import videoGamesBathroom03 from "../assets/projects/videogames-bathroom-03.webp";

export interface Project {
  slug: string;
  title: string;
  category?: string;
  image: ImageMetadata;
  gallery?: ImageMetadata[]; // opcjonalne dodatkowe zdjęcia w szczegółach (0, 2, 5... dowolnie)
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "destiny-contest",
    title: "Praca konkursowa – Destiny",
    category: "3D / Interior",
    image: destinyRoom,
    description: `
     <p>To praca konkursowa organizowana przez Playstation Poland i stronę <a href="https://jarock.pl" target="_blank" rel="noopener">jarock.pl</a>.</p>
  <p>Musiałem zrobić coś inspirowanego grą "DESTINY". Napis na ścianie oznacza <em>Nieważne gdzie grasz. Ważne, że jesteś w Destiny.</em></p>
  <p>I na koniec – zdobyła <strong>2. miejsce!</strong></p>
    `,
    gallery: [],
  },
  {
    slug: "videogames-bathroom",
    title: "Videogames Bathroom",
    category: "3D / Interior",
    image: videoGamesBathroom,
    description: "Opis projektu identyfikacji marki - podmień na swój tekst.",
    gallery: [videoGamesBathroom02, videoGamesBathroom03]
  },
  {
    slug: "dune-ornithopter",
    title: "Dune – Ornithopter Fanart",
    category: "3D / Hard Surface",
    image: ornithopter,
    description: "Opis projektu strony portfolio - podmień na swój tekst.",
  },
  {
    slug: "cartoon-skate-room",
    title: "Cartoon Skate Room",
    category: "3D / Interior",
    image: cartoonSkateRoom,
    description: "Opis projektu salonu - podmień na swój tekst.",
  },
  {
    slug: "rockstar-poster-01",
    title: "Rockstar Winter Stage – Plakat",
    category: "3D / Poster",
    image: rockstarPoster,
    description: "Opis projektu okładki książki - podmień na swój tekst.",
  },
  {
    slug: "rockstar-poster-01",
    title: "Rockstar Tourbus – Plakat",
    category: "3D / Poster",
    image: starWarsBanksy,
    description: "Opis projektu aplikacji mobilnej - podmień na swój tekst.",
  },
];
