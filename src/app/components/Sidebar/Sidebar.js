import style from "@/app/components/Sidebar/Sidbar.module.css"

export default function Sidebar(){
    return(
        <div className={style.sidebar}>
            <h3 className={style.h3}>افزودن نوشته جدید</h3>
            <form class="w-full ">
                <input type="text " placeholder="...اینجا بنویسید "  className="text-right mt-6 bg-transparent border-none w-full text-gray-700 focus:outline-none "/>
            </form>
            <div className="flex flex-col mt-48">
                <button className="bg-blue-500 p-4 rounded-lg text-white text-md font-medium mb-1">انتشار </button>
                <button className="bg-red-500 p-2 rounded-lg text-white text-md font-medium mt-1">پاک کردن نوشته</button>
            </div>
        </div>
    )
}