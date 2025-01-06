import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="dark:from-slate-800 dark:to-slate-900 text-white py-8 px-4 md:px-8">
      <hr className="w-full h-[2px] bg-white" />
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex md:flex-row  flex-wrap gap-4 md:gap-2 justify-between">
        <div className="flex flex-col space-y-2 mb-8 md:mb-0">
        <div className="flex flex-row space-y-1 mb-8 md:mb-0">
          <Logo />
        <div className="flex flex-col space-y-1 mb-4 font-bold md:mb-0 right-[-11px] relative">
          <div className="text-xl" >Reach Us:</div>
          
        <div className="flex flex-col font-bold md:mb-0">
          <div className="flex flex-row space-y-2">                   


          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

            
            
            05 22 66 55 01 </div>
           <div  className="flex flex-row space-y-2">

          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>


             05 22 66 55 02 </div>
           
           <div className="flex flex-row space-y-2">


          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

            06 61 19 45 40 </div>
           
          </div>
          </div>
          </div>


          <div className="flex flex-row font-bold">

<svg className="w-6 h-6 mr-2 -ml-1 text-white border-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email">
<path fill="white" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
<path fill="white" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
<path fill="white" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
</svg>

 <div >canalinformatique@menara.ma</div>
</div>
<div className="flex flex-row font-bold">

<CiLocationOn className="w-7 h-7 mr-1 -ml-1 relative left-[-2px]" />
<div className="relative top-[1px]" >Ain Sebaa centre, Route de Rabat, Casablanca</div>

</div>
          <div className="flex space-x-4 left-0">
            <Link
              href="www.facebook.com"
              className=""
            >
              {/* <FaFacebook size={30}/>
               */}

<svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
</svg>

            </Link>
            <Link
              href="www.x.com"
              className=""
            >
              {/* <FaTwitter size={30}/> */}

              <svg className="w-8 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
</svg>


            </Link>
            <Link
              href="https://www.instagram.com/_canal_informatique_/"
              className=""
              target="_blank"
              >
              {/* <FaInstagramSquare size={30}/> */}

              <svg className="w-8 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
</svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/canal-informatique/"
              className=""
              target="_blank"
            >
              {/* <FaInstagramSquare size={30}/> */}

              <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>

            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Categories</h3>
          <ul className="space-y-2">
            {dummyCategories.map(category => (
              <li key={category.name}>
              <Link
                href={`/shop?category=${category.name}`}
                className=""
              >
                {category.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className=""
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=""
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=""
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/help"
                className=""
              >
                Help Center
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className=""
              >
                Returns & Refunds
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="#"
                className=""
              >
                Terms of Service
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="#"
                className=""
              >
                Privacy Policy
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-white" />
      <div className="text-center mt-8">
        <p>&copy; 2025 Canal Informatique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
