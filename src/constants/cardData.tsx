export type CardVariant = 'title' | 'detail' | 'image';

type CardConfig = {
  type: CardVariant;
  title?: string;
  image?: string;
  website?: string;
  github?: string;
};

export const CARD_CONFIGS: CardConfig[] = [
  { type: 'title', title: 'ABOUT ME', image: 'about.jpg' },
  {
    type: 'detail',
    title: 'PORT-FOLIO',
    image: 'portfolio.png',
    website: 'https://haze10425.github.io/web-portfolio/',
    github: 'https://github.com/Haze10425/web-portfolio',
  },
  {
    type: 'detail',
    title: 'NAVER WORKS',
    image: 'naver-works-clone.png',
    website: 'https://haze10425.github.io/naverworks-clone/',
    github: 'https://github.com/Haze10425/naverworks-clone',
  },
  { type: 'image', image: 'image2.png' },
  {
    type: 'detail',
    title: 'NAVER',
    image: 'naver-clone.png',
    website: 'https://haze10425.github.io/naver-clone/',
    github: 'https://github.com/Haze10425/naver-clone',
  },
  {
    type: 'detail',
    title: 'KUMSUNG',
    image: 'kumsung-clone.png',
    website: 'https://haze10425.github.io/kumsung-clone/',
    github: 'https://github.com/Haze10425/kumsung-clone',
  },
  { type: 'image', image: 'image1.png' },
];
export const LAYOUT = {
  X: 220,
  Y: 160,
};

export const FINAL_POSITIONS = [
  { x: 0, y: 0 }, // 중앙
  { x: -LAYOUT.X, y: -LAYOUT.Y }, // 좌측 상
  { x: -LAYOUT.X, y: LAYOUT.Y }, // 좌측 하
  { x: -LAYOUT.X * 2, y: 0 }, // 좌측 중앙
  { x: LAYOUT.X, y: -LAYOUT.Y }, // 우측 상
  { x: LAYOUT.X, y: LAYOUT.Y }, // 우측 하
  { x: LAYOUT.X * 2, y: 0 }, // 우측 중앙
];
