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
  const cocinas = [
    "/cocina1.jpeg",
    "/cocina2.jpeg",
    "/cocina3.jpeg",
    "/cocina4.jpeg",
    "/cocina5.jpeg",
    "/cocina6.jpeg",
    "/cocina7.jpeg",
    "/cocina8.jpeg",
    "/cocina9.jpeg",
    "/cocina10.jpeg",
    "/cocina11.jpeg",
    "/cocina12.jpeg",
    "/cocina13.jpeg",
    "/cocina14.jpeg",
    "/cocina15.jpeg",
    "/cocina16.jpeg",
    "/cocina17.jpeg",
    "/cocina18.jpeg",
    "/cocina19.jpeg",
    "/cocina20.jpeg",
    "/cocina21.jpeg",
    "/cocina22.jpeg",
    "/cocina23.jpeg",
    "/cocina24.jpeg",
    "/cocina25.jpeg",
    "/cocina26.jpeg",
    "/cocina27.jpeg",
    "/cocina28.jpeg",
    "/cocina29.jpeg",
    "/cocina30.jpeg",
  ];
  return (
    <section>
        <h2 className={`${tinos.className} text-center text-6xl max-xl:text-2xl p-12`}>Cocinas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-12 p-12">
        {cocinas.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Cocina ${index + 1}`}
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