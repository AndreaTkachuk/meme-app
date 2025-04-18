/* eslint-disable react/jsx-sort-props */
"use client";

import type React from "react";
import type { Meme } from "@/lib/memes";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  // ModalTitle,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

interface EditMemeModalProps {
  meme: Meme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (meme: Meme) => void;
}

export function EditMemeModal({
  meme,
  isOpen,
  onClose,
  onSave,
}: EditMemeModalProps) {
  const [editedMeme, setEditedMeme] = useState<Meme>({ ...meme });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!editedMeme.name || editedMeme.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (editedMeme.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!editedMeme.imageUrl) {
      newErrors.imageUrl = "Image URL is required";
    } else if (!isValidUrl(editedMeme.imageUrl)) {
      newErrors.imageUrl = "Please enter a valid URL";
    } else if (
      !editedMeme.imageUrl.toLowerCase().endsWith(".jpg") &&
      !editedMeme.imageUrl.toLowerCase().endsWith(".jpeg")
    ) {
      newErrors.imageUrl = "URL must point to a JPG image";
    }

    if (editedMeme.likes < 0 || editedMeme.likes > 99) {
      newErrors.likes = "Likes must be between 0 and 99";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);

      return true;
    } catch {
      return false;
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(editedMeme);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "likes") {
      const likesValue = Number.parseInt(value);

      setEditedMeme({
        ...editedMeme,
        [name]: isNaN(likesValue) ? 0 : likesValue,
      });
    } else {
      setEditedMeme({
        ...editedMeme,
        [name]: value,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[425px]">
        <ModalHeader>
          <h2 className="text-lg font-semibold">Edit Meme</h2>
        </ModalHeader>
        <div className="grid gap-4 py-4 px-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="id"
              label="ID"
              value={String(editedMeme.id)}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-3">
              <Input
                id="name"
                name="name"
                label="Name"
                value={editedMeme.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-3">
              <Input
                id="imageUrl"
                label="Image URL"
                name="imageUrl"
                value={editedMeme.imageUrl}
                onChange={handleChange}
              />
              {errors.imageUrl && (
                <p className="text-sm text-red-500 mt-1">{errors.imageUrl}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-3">
              <Input
                id="likes"
                label="Likes"
                name="likes"
                type="number"
                min={0}
                max={99}
                value={String(editedMeme.likes)}
                onChange={handleChange}
              />
              {errors.likes && (
                <p className="text-sm text-red-500 mt-1">{errors.likes}</p>
              )}
            </div>
          </div>
        </div>
        <ModalFooter>
          <Button variant="bordered" onPress={onClose}>
            Cancel
          </Button>
          <Button onPress={handleSave}>Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
