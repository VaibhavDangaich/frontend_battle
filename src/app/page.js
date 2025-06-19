"use client"
import Image from "next/image";
import HomePage from "./(components)/HomePage";
import BSSCarousel from "./(components)/BSSCarousel";
import CustomerSection from "./(components)/CustomerSection";

export default function Home() {
  return (
    <div >
      <HomePage></HomePage>
      <BSSCarousel></BSSCarousel>
      <CustomerSection></CustomerSection>
   
    </div>
  );
}