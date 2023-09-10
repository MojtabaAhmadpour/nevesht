import style from "./signin.module.css"
import Image from "next/image";
import pic from "../../../public/assets/images/mark-copy.png";


export default function signin() {
  return (
    <main>
      <div classname={style.signin}>
        <div classname=''>
          <Image src={pic} width={300} />
        </div>
        <div classname=''>
          <h1 classname=''>ثبت نام در شبکه اجتماعی نوشت</h1>
        </div>
      </div>
    </main>
  );
}
