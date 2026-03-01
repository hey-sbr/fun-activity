import Image from "next/image";
import icon from "@/component/icon/logo-2x.svg";

export function Logo(){
    return (
        <div className="p-2 shadow-2xl absolute top-5 left-10 bg-white rounded-2xl h-fit w-fit">
        <Image src={icon} alt="Background" loading="eager"/>
      </div>
    )
}