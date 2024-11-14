import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-black text-white min-h-screen space-y-10 md:space-y-0">
      {/* Matn qismi */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-gray-400 text-sm md:text-base">Hi, I am</p>
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
          Kalbayev Akrom
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold">Frontend Developer</h2>

        {/* Ijtimoiy Media Ikonkalari */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <i className="fab fa-instagram text-xl md:text-2xl"></i>
          <i className="fab fa-twitter text-xl md:text-2xl"></i>
          <i className="fab fa-behance text-xl md:text-2xl"></i>
        </div>

        {/* Tugmalar */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <Button className="bg-orange-500 text-white px-6 py-3">Hire Me</Button>
          <Button className="text-white border-white px-6 py-3">
            Download CV
          </Button>
        </div>

        {/* Statistika qismi */}
        <div className="grid grid-cols-3 gap-4 justify-around mt-10">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-orange-500">5+</p>
            <p className="text-sm md:text-base">Experiences</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-orange-500">20+</p>
            <p className="text-sm md:text-base">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-orange-500">80+</p>
            <p className="text-sm md:text-base">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Profil rasmi */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image
          src="/my-picture.jpg"
          alt="Mahmood Fazile"
          width={300}
          height={300}
          className="rounded-full border border-gray-700"
        />
      </div>
    </div>
  );
};

export default About;
