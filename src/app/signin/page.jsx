import Image from "next/image";
import loginlogo from "../../../public/mark.png";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

const login = () => {
  return (
    <main className="flex w-screen h-screen">
      <div className="w-1/3 bg-emerald-50 ">
        <div className="text-right mt-6">
          <h1 className="text-sm mr-8 mt-4">
            {" "}
            ... شبکه اجتماعی نوشت ، جایی برای بیان احساسات،افکاروناگفته های شما{" "}
          </h1>
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
            <li className="p-4">
              <a href="#" target="_blank" title="instagram.com">
                <FaInstagram className="text-pink-600 text-1xl" />
              </a>
            </li>
            <li className="p-4">
              <a href="#" target="_blank" title="facebook.com">
                <AiOutlineFacebook className="text-blue-600 text-1xl" />
              </a>
            </li>
            <li className="p-4">
              <a
                href="#"
                target="_blank"
                title="linkedin.com"
                className="text-blue-800 text-1xl"
              >
                <AiOutlineLinkedin />
              </a>
            </li>
            <li className="p-4">
              <a
                href="#"
                target="_blank"
                title="x.com"
                className="text-gray-600 text-1xl"
              >
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/3 bg-sky-400 flex flex-col items-center justify-center">
        <div className="">
          <div className="">
            <h1 className="text-6xl text-white ml-10 mb-4">ثبت نام</h1>
            <Image
              src={loginlogo}
              alt="neveshtlogo"
              width={100}
              className="ml-20 mt-4"
            />
          </div>
          <div className="">
            <form className="flex flex-col mt-8">
              <label for="name" className="text-sm text-right text-gray-600">:نام   </label>
              <input
                type="input"
                placeholder="مجتبی احمدپور "
                className="mb-1 rounded-md text-gray-400 text-right p-1 pr-2 w-72"
                id="name"
              />
              <label for="email" className="text-sm text-right text-gray-600">:ایمیل </label>
              <input
                type="email"
                placeholder="ahmadpour@nevehsh.ir"
                className="mb-2 rounded-md text-gray-400 text-right p-1 pr-2 w-72"
                id="email"
              />
              <label for="username" className="text-sm text-right text-gray-600">:نام کاربری </label>
              <input
                type="input"
                placeholder="نام کاربری"
                className="mb-2 rounded-md text-gray-400 text-right p-1 pr-2 w-72"
                id="username"
              />
              <label for="password" className="text-sm text-right text-gray-600">:رمزعبور</label>
              <input
                type="input"
                placeholder="رمز عبور"
                className="mb-2  rounded-md text-gray-400 text-right p-1 pr-2 w-72"
                id="password"
              />
              <label for="re-password" className="text-sm text-right text-gray-600">: تکرار رمزعبور</label>
              <input
                type="input"
                placeholder="تکرار رمزعبور"
                className="mb-2  rounded-md text-gray-400 text-right p-1 pr-2 w-72"
                id="re-password"
              />
               
            </form>
          </div>
          <div className="">
            <button className="bg-blue-600 text-white rounded-md w-72 p-2 mt-4 mb-4">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default login;
