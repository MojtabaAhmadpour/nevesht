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
            <h1 className="text-6xl text-white ml-20 mb-4">ورود</h1>
            <Image
              src={loginlogo}
              alt="neveshtlogo"
              width={100}
              className="ml-20 mt-4"
            />
          </div>
          <div className="">
            <form className="flex flex-col mt-12">
              <input
                type="input"
                placeholder="نام کاربری"
                className="rounded-md text-gray-400 text-right p-1 pr-2 w-72"
              />
              <input
                type="input"
                placeholder="رمز عبور"
                className="mt-6 rounded-md text-gray-400 text-right p-1 pr-2 w-72"
              />
               
            </form>
          </div>
          <div className="flex align-center">
            <input type="radio" id="html" name="fav_language" value="" ></input> {" "}
            <label for="html" className="text-xs text-white"> !مرابه یاد داشته باش</label>
            <a href="#" className="text-xs ml-16 text-white hover:text-blue-700 duration-75">
              فراموشی رمز عبور؟
            </a>
          </div>
          <div className="">
            <button className="bg-blue-600 text-white rounded-md w-72 p-2 mt-4 mb-4">ورود</button>
          </div>
          <div className="">
            <a href="#" className="underline text-blue-700 text-sm ml-20 hover:text-white duration-75">
              
              .ثبت نام در نوشت
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default login;
