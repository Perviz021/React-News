import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/common/Navbar";
import RightAside from "@/components/common/RightAside";
import Subscription from "@/components/widgets/subscription";

function AppLayout({ children }) {
  return (
    <main className="w-full 2xl:w-[1360px] mx-auto flex gap-x-[45px]">
      <div className="w-[260px] shrink-0">
        <div className="2xl:fixed">
          <Logo />
          <Navbar />
          <Subscription className="mt-[40px]" />
        </div>
      </div>
      <div className="flex-1">
        <Header />
        <div className="flex gap-x-[45px] 2xl:pt-[95px]">
          <div className="flex-1">
            {children}

            <Footer />
          </div>
          <div className="w-[285px] shrink-0 2xl:fixed mr-[30px]">
            <RightAside />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
