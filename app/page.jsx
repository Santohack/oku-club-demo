import BookTitle from "@/components/BookCard";
import BookDetails from "@/components/BookDetails";
import ReadyToJoin from "@/components/join/ReadyToJoin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between">
      <BookTitle />
      <BookDetails />
      <ReadyToJoin />
    </div>
  );
}
