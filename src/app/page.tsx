// pages/index.tsx
import  Header from "@/components/header"
import Skills from "@/components/skills"
import About from "./pages/about/page"
export default function Home() {
  return (
    <div className=" mx-auto ">
      <Header />
      <main className="bg-darkBlue min-h-screen">
        {/* Other sections can be added here */}
        {/* <Home/> */}
        <About/>
        <Skills />
      </main>
    </div>
  )
};
// }
// import Carousel from '../components/Carousel';

// export default function CarouselPage() {
//   const slides = [
//     { id: 1, content: 'Slide 1: Welcome to our carousel!' },
//     { id: 2, content: 'Slide 2: Another exciting slide.' },
//     { id: 3, content: 'Slide 3: Keep exploring our content!' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
//       <h1 className="text-4xl font-bold mb-8">Our Carousel Page</h1>
//       <Carousel slides={slides} />
//     </div>
//   );
// }
