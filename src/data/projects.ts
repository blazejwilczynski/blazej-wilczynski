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
import cartoonSkateRoom02 from "../assets/projects/cartoon-skate-room-02.webp";
import cartoonSkateRoom03 from "../assets/projects/cartoon-skate-room-03.webp";
import cartoonSkateRoom04 from "../assets/projects/cartoon-skate-room-04.webp";
import cartoonSkateRoom05 from "../assets/projects/cartoon-skate-room-05.webp";
import cartoonSkateRoom06 from "../assets/projects/cartoon-skate-room-06.webp";
import cartoonSkateRoom07 from "../assets/projects/cartoon-skate-room-07.webp";
import cartoonSkateRoom08 from "../assets/projects/cartoon-skate-room-08.webp";
import cartoonSkateRoom09 from "../assets/projects/cartoon-skate-room-09.webp";
import cartoonSkateRoom10 from "../assets/projects/cartoon-skate-room-10.webp";
import destinyRoom from "../assets/projects/destiny-room.webp";
import ornithopter from "../assets/projects/ornithopter-01.webp";
import ornithopter02 from "../assets/projects/ornithopter-02.webp";
import ornithopter03 from "../assets/projects/ornithopter-03.webp";
import ornithopter04 from "../assets/projects/ornithopter-04.webp";
import ornithopter05 from "../assets/projects/ornithopter-05.webp";
import ornithopter06 from "../assets/projects/ornithopter-06.webp";
import ornithopter07 from "../assets/projects/ornithopter-07.webp";
import ornithopter08 from "../assets/projects/ornithopter-08.webp";
import rockstarPoster from "../assets/projects/rockstar-poster-01.webp";
import rockstarPoster02 from "../assets/projects/rockstar-poster-02.webp";
import starWarsBanksy from "../assets/projects/star-wars-banksy-room-01.webp";
import starWarsBanksy02 from "../assets/projects/star-wars-banksy-room-02.webp";
import starWarsBanksy03 from "../assets/projects/star-wars-banksy-room-03.webp";
import starWarsBanksy04 from "../assets/projects/star-wars-banksy-room-04.webp";
import starWarsBanksy05 from "../assets/projects/star-wars-banksy-room-05.webp";
import videoGamesBathroom from "../assets/projects/videogames-bathroom-01.webp";
import videoGamesBathroom02 from "../assets/projects/videogames-bathroom-02.webp";
import videoGamesBathroom03 from "../assets/projects/videogames-bathroom-03.webp";
import arendalHouse from "../assets/projects/arendal-house-01.webp";
import arendalHouse02 from "../assets/projects/arendal-house-02.webp";
import arendalHouse03 from "../assets/projects/arendal-house-03.webp";
import arendalHouse04 from "../assets/projects/arendal-house-04.webp";
import arendalHouse05 from "../assets/projects/arendal-house-05.webp";
import arendalHouse06 from "../assets/projects/arendal-house-06.webp";

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
     <p>To praca konkursowa organizowana przez <a href="https://www.playstation.com/pl-pl/" target="_blank" rel="noopener">Playstation Poland</a> i portal <a href="https://jarock.pl" target="_blank" rel="noopener">jarock.pl</a>.</p>
  <p>Należało stworzyć grafikę inspirowaną grą "DESTINY". </em></p>
  <p>Praca zdobyła <strong>2. miejsce!</strong></p>
    `,
    gallery: [],
  },
  {
    slug: "videogames-bathroom",
    title: "Videogames Bathroom",
    category: "3D / Interior",
    image: videoGamesBathroom,
    description: `
    <p>Koncepcyjny projekt łazienki, w którym chciałem wykorzystać postacie z dwóch gier 
    mojego dzieciństwa:</p>  <strong>Super Mario</strong> oraz  <strong>Metal Slug</strong>
    
    `,
    gallery: [videoGamesBathroom02, videoGamesBathroom03],
  },
  {
    slug: "dune-ornithopter",
    title: "Dune – Ornithopter Fanart",
    category: "3D / Hard Surface",
    image: ornithopter,
    description: `<p>Po obejrzeniu pierwszej cześci <b>Diuny</b>, chciałem wymodelować jakiś
    asset z tego filmu.</p>
    <p>Padło na Ornithopter, który zrobił na mnie ogromne wrażenie.</p>
    <p>Model stworzony w <a href="https://www.blender.org" target="_blank" rel="noopener">Blenderze</a>, tekstury w <a href="   https://www.adobe.com/products/substance3d/apps/painter.html" target="_blank" rel="noopener">Substance Painter</a>, a następnie całość została przeniesiona do środowiska  <a href="https://www.unrealengine.com/" target="_blank" rel="noopener">Unreal Engine 5</a>.</p>
    `,
    gallery: [
      ornithopter02,
      ornithopter03,
      ornithopter04,
      ornithopter05,
      ornithopter06,
      ornithopter07,
      ornithopter08,
    ],
  },
  {
    slug: "cartoon-skate-room",
    title: "Cartoon Skate Room",
    category: "3D / Interior",
    image: cartoonSkateRoom,
    description: "Opis projektu salonu - podmień na swój tekst.",
    gallery: [
      cartoonSkateRoom02,
      cartoonSkateRoom03,
      cartoonSkateRoom04,
      cartoonSkateRoom05,
      cartoonSkateRoom06,
      cartoonSkateRoom07,
      cartoonSkateRoom08,
      cartoonSkateRoom09,
      cartoonSkateRoom10,
    ],
  },
  {
    slug: "rockstar-posters",
    title: "Rockstar – Plakaty",
    category: "3D / Poster",
    image: rockstarPoster,
    description: "Opis projektu okładki książki - podmień na swój tekst.",
    gallery: [rockstarPoster02],
  },
  {
    slug: "banksy-starwars-room",
    title: "Banksy Star Wars Room",
    category: "3D / Interior",
    image: starWarsBanksy,
    description: "Opis projektu aplikacji mobilnej - podmień na swój tekst.",
    gallery: [
      starWarsBanksy02,
      starWarsBanksy03,
      starWarsBanksy04,
      starWarsBanksy05,
    ],
  },
  {
    slug: "arendal-house",
    title: "Arendal House",
    category: "3D / Architecture",
    image: arendalHouse,
    description: "Opis projektu aplikacji mobilnej - podmień na swój tekst.",
    gallery: [
      arendalHouse02,
      arendalHouse03,
      arendalHouse04,
      arendalHouse05,
      arendalHouse06,
    ],
  },
];
