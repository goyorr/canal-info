import React from "react";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import BannerOne from "@/components/banners/BannerOne";
import BenefitsSection from "@/components/others/BenefitSection";
import InfiniteLooper from "@/components/Looper/InfiniteLooper";
import Slideshow from "@/components/slideshow/SlideShow";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <InfiniteLooper direction="right" speed={14}>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/canon.png" alt="canon" style={{ width: '150px', height: '80px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/hp.png" alt="hp" style={{ width: '90px', height: '60px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/samsung.png" alt="samsung" style={{ width: '130px', height: '40px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/dell.png" alt="dell" style={{ width: '120px', height: '40px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/lenovo.png" alt="lenovo" style={{ width: '120px', height: '90px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/cisco.png" alt="cisco" style={{ width: '150px', height: '60px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/epson.png" alt="epson" style={{ width: '120px', height: '30px' }} />
      </div>
      <div className="contentBlock contentBlock--two">
        <img src="/images/brands/microsoft.png" alt="microsoft" style={{ width: '170px', height: '60px' }} />
      </div>
    </InfiniteLooper>
    <Slideshow />
    <ProductsCollectionOne />
    <BenefitsSection textCenter={false} />
    <HeroBannerOne />
    <BannerOne />
    <NewsLetterTwo />
    </section>
  );
};

export default HomePageOne;
