import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="font-bold">Hello World!</p>
    </div>
  );
}
