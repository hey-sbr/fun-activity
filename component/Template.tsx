"use client";
import Button from "@/component/Button";
import { useRouter } from "next/navigation";

export default function Template({heading, buttonLabel}: {heading: string, buttonLabel: string}) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/fun");
  };
  return (
    <div className="flex justify-center items-center flex-col h-full w-full gap-10">
      <h1 className="text-3xl font-bold text-center mt-10 ">
        {heading}
      </h1>
      <Button label={buttonLabel} onClick={handleClick} />
    </div>
  );
}
