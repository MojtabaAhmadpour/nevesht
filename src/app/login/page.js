import style from "./login.module.css";
import Image from "next/image";
import loginlogo from "../../../public/mark.png";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

const login = () => {
  return (
    <main className="flex w-screen h-screen">
      <div className="w-1/3 bg-blue-100 ">
        <div className="text-right mt-6">
          <h1 className="text-xl mr-4">
            {" "}
            🥰😍🤩از این که به نوشت برگشتی خوشحالیم🔵
          </h1>
          <h3 className="text-xs mr-12 mt-4">
            {" "}
            ... شبکه اجتماعی نوشت ، جایی برای بیان احساسات،افکاروناگفته های شما{" "}
          </h3>
        </div>
        <Image
          src={loginlogo}
          alt="logonevesht"
          width={300}
          className="mx-auto mt-16"
        />
        <div className="mt-24 ml-24">
          <p className="text-xs ml-4">نوشت را در شبکه های اجتماعی دنبال کنید</p>
          <ul className="flex ml-4">
          <li className="p-4"><a href="#" target="_blank" title="instagram.com"><FaInstagram className="text-pink-600 text-1xl" /></a></li>
          <li className="p-4"><a href="#" target="_blank" title="facebook.com"><AiOutlineFacebook className="text-blue-600 text-1xl"/></a></li>
          <li className="p-4"><a href="#" target="_blank" title="linkedin.com" className="text-blue-800 text-1xl"><AiOutlineLinkedin/></a></li>
          <li className="p-4"><a href="#" target="_blank" title="x.com" className="text-gray-600 text-1xl"><FaXTwitter/></a></li>
          </ul>
        </div>
      </div>
      <div className="w-2/3 bg-sky-400"></div>
    </main>
  );
};

export default login;
