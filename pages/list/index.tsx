import { MemeList } from "@/components/meme-list";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Meme Directory - List View</h1>
          <MemeList />
        </div>
      </section>
    </DefaultLayout>
  );
}
