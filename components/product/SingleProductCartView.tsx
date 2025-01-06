"use client";
import React, { useEffect, useState } from "react";
import RatingReview from "../others/RatingReview";
import Link from "next/link";
import Image from "next/image";
import ProductOptions from "./ProductOptions";
import { Product } from "@/types";
import { calculateDiscount } from "@/lib/calculateDiscount";
import { useRouter } from "next/navigation";

const SingleProductCartView = ({ product }: { product: Product }) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const {
    category,
    discount,
    id,
    images,
    name,
    price,
    rating,
    reviews,
    stockItems,
  } = product;

  // Calculate discounted price
  const discountedPrice = calculateDiscount(price, discount);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Link
      href={`/shop/${id}`}
      className="relative border rounded-xl shadow-lg overflow-hidden group bg-gray-950"
    >
      <div className={`w-full overflow-hidden`}>
        <div className="relative w-full h-[180px] bg-gray-900 group-hover:scale-110 transition-all duration-300 rounded-md overflow-hidden">
          <Image className="object-contain" src={images[0]} alt={name} fill />
          {stockItems === 0 ? (
            <p className="py-1 px-1 text-sm font-bold rounded-sm bg-rose-500 text-white absolute top-2 right-2">
              out of stock
            </p>
          ) : (
            product.discount > 0 && (
            <p className="py-1 px-2 text-xs font-bold rounded-sm bg-green-500 text-white absolute top-2 left-2">
              {product.discount}%
            </p>
          ))}
        </div>
      </div>
      <div className="hidden group-hover:block slideCartOptions absolute top-1 right-2">
        <ProductOptions product={product} />
      </div>
      <div className="my-1 space-y-2 pb-9 p-2">
        <p
          onClick={(e) => {
            e.preventDefault();
            router.push(`shop?category=${category}`);
          }}
          className="text-sm text-sky-500 font-light -mb-1 hover:opacity-60 "
        >
          {" "}
          {category}
        </p>
        <h3 className="text-sm font-fold capitalize hover:text-blue-500">
          {name.slice(0, 45)}
          {name.length > 45 && "..."}
        </h3>
        {/* <RatingReview rating={rating} review={reviews.length} /> */}
          {/* <br /> */}
          {product.discount > 0 ? (
            <p className="absolute space-y-4 bottom-2">
              <span className="text-xl font-bold text-blue-500">
                {discountedPrice.toFixed(2)} <span className="text-sm">Dhs</span>
              </span>
              <span className="ml-2" />
              <span className="line-through text-sm text-muted-foreground">{price}</span>
              <span className="ml-1" />
              <span className="text-xs text-muted-foreground">Dhs</span>
            </p>
          ) : (
            <p className="absolute bottom-2">
              <span className="text-xl font-bold text-blue-500">
                {discountedPrice.toFixed(2)} <span className="text-sm">Dhs</span>
              </span>
            </p>
          )}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default SingleProductCartView;
