import { Button } from "@heroui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useEffect, useState } from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { type Meme, initialMemes } from "@/lib/memes";
import { EditMemeModal } from "@/components/edit-meme-modal";

export default function IndexPage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Try to load memes from localStorage
    const storedMemes = localStorage.getItem("memes");

    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
    } else {
      setMemes(initialMemes);
      localStorage.setItem("memes", JSON.stringify(initialMemes));
    }
  }, []);

  const handleEditClick = (meme: Meme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const handleSaveMeme = (updatedMeme: Meme) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === updatedMeme.id ? updatedMeme : meme,
    );

    setMemes(updatedMemes);
    localStorage.setItem("memes", JSON.stringify(updatedMemes));
    setIsModalOpen(false);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <h1 className={title()}>Meme Directory - Table View</h1>
        <Table className="my-10">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Likes</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {memes.map((meme) => (
              <TableRow key={meme.id}>
                <TableCell>{meme.id}</TableCell>
                <TableCell>{meme.name}</TableCell>
                <TableCell>{meme.likes}</TableCell>
                <TableCell>
                  <Button
                    variant="bordered"
                    onClick={() => handleEditClick(meme)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {selectedMeme && (
          <EditMemeModal
            isOpen={isModalOpen}
            meme={selectedMeme}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveMeme}
          />
        )}
      </section>
    </DefaultLayout>
  );
}
