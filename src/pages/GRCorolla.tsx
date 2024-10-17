import { Button } from "@/components/ui/button";
import { CarFront } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardCarousel from "@/components/CardCarousel";

export default function GRCorolla() {
  const videoId = "Z5Lp8fiHpA0";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start relative overflow-clip text-white">
        <iframe
          width="1440"
          height="720"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
          className="top-0 bottom-24 -z-10 scale-[1.5] h-[620px] w-full"
        />
        <div className="flex absolute justify-center items-center top-0 left-0 w-full h-full">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center">
              <h3 className="text-7xl font-semibold">The GR Corolla</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-[800px]">
                <p className="text-xl text-center">
                  Unleash the thrill of the road with the Toyota GR Corolla!
                  This high-performance hot hatch is engineered by Toyota’s
                  elite Gazoo Racing division to deliver an exhilarating driving
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/locations">
                <Button className="flex z-10 space-x-3 items-center">
                  <CarFront />
                  <span>Book a Test Drive</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="snap-start">
        <div className="flex justify-center w-full">
          <Carousel className="w-full">
            <CarouselContent className="top-0">
              <CarouselItem className="flex flex-col">
                <CardCarousel
                  heading="Experience the Thrill"
                  img="/gr-corolla1.jpg"
                  subheading="The GR Corolla is engineered for those who crave excitement. With its turbocharged engine and precision handling, every drive becomes an exhilarating adventure. Feel the rush of power and control as you navigate the streets with confidence."
                />
              </CarouselItem>
              <CarouselItem>
                <CardCarousel
                  heading="Stay Connected and In Control"
                  img="/gr-corolla2.jpg"
                  subheading="The GR Corolla is packed with advanced technology to keep you connected and in control. From the intuitive infotainment system to the latest safety features, this car is designed to enhance your driving experience. Stay ahead of the curve with the GR Corolla’s innovative tech."
                />
              </CarouselItem>
              <CarouselItem>
                <CardCarousel
                  heading="Turn Heads Wherever You Go"
                  img="/gr-corolla3.jpg"
                  subheading="Make a statement with the GR Corolla’s bold and dynamic design. Its sleek lines and aggressive stance are sure to turn heads. Whether you’re cruising through the city or hitting the open road, the GR Corolla’s stylish exterior will leave a lasting impression."
                />
              </CarouselItem>
              <CarouselItem>
                <CardCarousel
                  heading="Feel the Power Beneath the Hood"
                  img="/gr-corolla4.jpg"
                  subheading="The GR Corolla’s engine is a marvel of engineering, delivering unmatched performance and efficiency. With its turbocharged powerplant, you’ll experience rapid acceleration and seamless power delivery. Whether you’re on the highway or navigating city streets, the GR Corolla’s engine ensures a thrilling and responsive drive every time."
                />
              </CarouselItem>
            </CarouselContent>
            <div className="relative bottom-[575px] px-8">
              <div className="float-left">
                <CarouselPrevious className="scale-150 absolute left-8 top-0 bottom-0" />
              </div>
              <div className="float-right">
                <CarouselNext className="scale-150 absolute right-8 top-0 bottom-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
