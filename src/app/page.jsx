import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Sidebarinlockmode from "@/app/components/Sidebarinlockmode/Sidebarinlockmode";


export default function Home() {
  return (
    <div className="container flexp-col ">
      <div className="">
        <Header />
      </div>
      <div className="flex relative bottom-4 ">
        <div className="w-9/12 mr-1 ">
          <Main />
        </div>
        <div className="w-3/12 ml-1 ">
          <Sidebar /> <Sidebarinlockmode />
        </div>
      </div>
      <Footer />
    </div>
  );
}