"use client"
import Image from "next/image";
import HomePage from "./(components)/HomePage";
import BSSCarousel from "./(components)/BSSCarousel";
import CustomerSection from "./(components)/CustomerSection";
import ProductCarousel from "./(components)/ProductCarousel";
import TestimonialsSection from "./(components)/TestimonialsSection";

export default function Home() {
  return (
    <div >
      <HomePage></HomePage>
      <BSSCarousel></BSSCarousel>
      <ProductCarousel></ProductCarousel>
      <CustomerSection></CustomerSection>
      <TestimonialsSection></TestimonialsSection>
   
    </div>
  );
}