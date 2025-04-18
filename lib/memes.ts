export interface Meme {
  id: number;
  name: string;
  imageUrl: string;
  likes: number;
}

export const initialMemes: Meme[] = [
  {
    id: 1,
    name: "Distracted Boyfriend",
    imageUrl: "/Distracted Boyfriend.webp",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 2,
    name: "Drake Hotline Bling",
    imageUrl: "/Drake Hotline Bling.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 3,
    name: "Two Buttons",
    imageUrl: "/Two Buttons.png",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 4,
    name: "Change My Mind",
    imageUrl: "/Change My Mind.png",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 5,
    name: "Expanding Brain",
    imageUrl: "/Expanding Brain.png",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 6,
    name: "Woman Yelling at Cat",
    imageUrl: "/Woman Yelling at Cat.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 7,
    name: "Surprised Pikachu",
    imageUrl: "/Surprised Pikachu.webp",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 8,
    name: "Is This a Pigeon",
    imageUrl: "/Is This a Pigeon.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 9,
    name: "Disaster Girl",
    imageUrl: "/Disaster_Girl.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 10,
    name: "Doge",
    imageUrl: "/Original_Doge_meme.jpg",
    likes: Math.floor(Math.random() * 99),
  },
];
