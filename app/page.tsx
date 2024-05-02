import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <div className="flex ">
          <Board />
        </div>
      </div>
    </main>
  );
}
