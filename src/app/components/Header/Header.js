"use client";
import style from "@/app/components/Header/Header.module.css";
import { BiPencil } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import Image from "next/image";
import typeicon from "../../../../public/assets/images/nevesht_logo_raw.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className={style.header}>
      <div className="flex">
        <button
          className="flex items-center mr-4 p-2 hover:bg-emerald-50 rounded-lg duration-75  "
          onClick={() => router.push("/signin")}
        >
          ثبت نام <BiPencil />
        </button>
        <button
          className="flex items-center mr-4 p-2 hover:bg-emerald-50 rounded-lg duration-75 "
          onClick={() => router.push("/login")}
        >
          ورود <BiLogIn />
        </button>
      </div>
      <div className="flex items-center">
        <Image src={typeicon} width={110} />
      </div>
      <div className="">
        <ul className="flex flex-row-reverse pr-4">
          <li>
            <Link href="#" className="flex items-center px-4 py-2 m-2 hover:bg-emerald-50 rounded-lg duration-75 "
            >
              صفحه اصلی <BiHomeAlt />{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-4 py-2 my-2 hover:bg-emerald-50 rounded-lg duration-75 "
            >
              محبوب ترین ها <BiHeart />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-4 py-2 m-2  bg-emerald-50 rounded-lg"
            >
              تازه ها <BiNews />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
