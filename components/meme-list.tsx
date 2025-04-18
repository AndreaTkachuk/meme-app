/* eslint-disable react/jsx-sort-props */
"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import Image from "next/image";

import { type Meme, initialMemes } from "@/lib/memes";

export function MemeList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    // Try to load memes from localStorage or use initialMemes if running on client
    if (typeof window !== "undefined") {
      const storedMemes = localStorage.getItem("memes");

      if (storedMemes) {
        setMemes(JSON.parse(storedMemes));
      } else {
        setMemes(initialMemes);
      }
    }
  }, []);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-10">
      {memes.map((meme) => (
        <Card key={meme.id}>
          <CardBody>
            <CardHeader className="hero-card-header">
              <h4 className="font-bold text-large">{meme.name}</h4>
            </CardHeader>
            <div className="hero-card-content">
              <div className="relative aspect-video">
                <Image
                  src={meme.imageUrl || "/placeholder.svg"}
                  alt={meme.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <CardFooter className="flex">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                ❤️ {meme.likes} likes
              </div>
              <a
                href={meme.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-500"
              >
                View Original
              </a>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
