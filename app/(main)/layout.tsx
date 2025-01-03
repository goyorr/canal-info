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
      <InfiniteLooper direction="right" speed={14}>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/canon.png" alt="canon" style={{ width: '200px', height: '120px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/hp.png" alt="hp" style={{ width: '180px', height: '120px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/samsung.png" alt="samsung" style={{ width: '200px', height: '100px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/dell.png" alt="dell" style={{ width: '170px', height: '60px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/lenovo.png" alt="lenovo" style={{ width: '200px', height: '130px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/cisco.png" alt="cisco" style={{ width: '200px', height: '100px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/epson.png" alt="epson" style={{ width: '200px', height: '50px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/microsoft.png" alt="microsoft" style={{ width: '230px', height: '100px' }} />
      </div>
    </InfiniteLooper>
      {children}
      <Footer />
      <ScrollToTop />
      <Toaster position="top-right" duration={2000}/>
    </div>
  );
}
