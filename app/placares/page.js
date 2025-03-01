"use client";
import { useState } from "react";
import Image from "next/image";
import { Tinos } from 'next/font/google'
 
const tinos = Tinos({
  weight:'400',
  subsets: ["latin"],
})

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placards = [
    "/placard1.jpeg",
    "/placard2.jpeg",
    "/placard3.jpeg",
    "/placard4.jpeg",
    "/placard5.jpeg",
    "/placard6.jpeg",
    "/placard7.jpeg",
    "/placard8.jpeg",
    "/placard9.jpeg",
    "/placard11.jpg",
    "/placard12.jpeg",
    "/placard13.jpeg",
    "/placard14.jpeg",
    "/placard15.jpeg",
    "/placard16.jpeg",
    "/placard17.jpeg",
    "/placard10.jpeg",
    "/placard18.jpeg",
  ];
  return (
    <section>
        <h2 className={`${tinos.className} text-center text-6xl max-xl:text-2xl p-12`}>Placares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-12 p-12">
                {placards.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Placard ${index + 1}`}
                    width={500}
                    height={500}
                    className="cursor-pointer object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
                </div>
              {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                  <div className="relative">
                    <Image
                      src={selectedImage}
                      alt="Imagen ampliada"
                      width={800}
                      height={800}
                      className="w-screen max-h-[90vh] rounded-lg object-scale-down"
                    />
                    <button
                      className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
                      onClick={() => setSelectedImage(null)}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              )}
    </section>
  )
}