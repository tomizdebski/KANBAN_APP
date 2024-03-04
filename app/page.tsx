import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center text-fiolet">
          Welcome to Next.js with Tailwind CSS
        </h1>
        <p className="text-lg text-center mt-4">
          Get started by editing{" "}
          <code className="bg-gray-200 p-2 rounded-md">pages/index.js</code>
          <Button />
        </p>
      </div>
    </main>
  );
}
