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
    imageUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/023/732/damngina.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 2,
    name: "Drakeposting",
    imageUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 3,
    name: "Daily Struggle",
    imageUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/019/571/dailystruggg.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 4,
    name: "Change My Mind",
    imageUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/025/500/crowder.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 5,
    name: "Expanding Brain",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/022/266/brain.png",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 6,
    name: "Woman Yelling at Cat",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 7,
    name: "Surprised Pikachu",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 8,
    name: "Is This a Pigeon",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/017/299/DmbzJspWwAEprcQ.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 9,
    name: "Disaster Girl",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/000/043/dg1.jpg",
    likes: Math.floor(Math.random() * 99),
  },
  {
    id: 10,
    name: "Doge",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    likes: Math.floor(Math.random() * 99),
  },
];
