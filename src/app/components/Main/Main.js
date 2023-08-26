import style from "@/app/components/Main/Main.module.css"
import Image from 'next/image'
import mainimage from '../../../../public/assets/images/empty_folder.png'

export default function Main(){
    return(
        <div className={style.main}>
              <Image
                  src={mainimage}
                   alt="mainimage"
                   width={320}
              />
            <div className="">
                <h2 className={style.h2}>!نوشت خالی است</h2>
                <h3 className={style.h3}>.شما می توانید اولین نویسنده باشید</h3>
            </div>
        </div>
    )
}