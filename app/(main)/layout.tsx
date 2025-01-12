import HeaderOne from "@/components/headers/HeaderOne";
import Footer from "@/components/footers/Footer";
import ScrollToTop from "@/components/others/ScrollToTop";
import { Toaster } from "sonner";
import InfiniteLooper from "@/components/Looper/InfiniteLooper";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="z-20">
      <HeaderOne />
      {children}
      <Footer />
      <ScrollToTop />
      <Toaster position="top-right" duration={2000}/>
    </div>
  );
}
