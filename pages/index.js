import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen gap-4">
        <div className="text-[#34333E] p-[18px] text-center border-2 rounded-[5px] border-solid">
          <Link href="/login">Log-in Page</Link>
        </div>
        <div className="bg-[#34333E] p-[18px] text-center border-2 rounded-[5px] border-solid text-white">
          <Link href="/details">Details Page</Link>
        </div>
      </div>
    </>
  );
}
