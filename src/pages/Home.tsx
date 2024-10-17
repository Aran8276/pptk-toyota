import CarCard1 from "@/components/CarCard1";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, CarFront } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pb-12">
      <section>
        <div className="flex items-center justify-center w-screen h-screen bg-cover bg-[url('/corolla-hatchback.jpg')]">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            transition={{ duration: 0.8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col text-center text-white space-y-8"
          >
            <h2 className="font-medium text-7xl bg-clip-text text-transparent h-20 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#999999]">
              The Corolla Hatchback Hybrid
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              animate={{ opacity: 100 }}
              className="flex justify-center px-64"
            >
              <h3 className="text-lg w-full">
                With its hybrid engine that delivers 138 horsepower and
                available Electronic On-Demand All-Wheel Drive (AWD), you can go
                farther in everything you do.
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              animate={{ opacity: 100 }}
              className="flex justify-center"
            >
              <div className="flex justify-around w-fit space-x-3">
                <Link to="/locations">
                  <Button className="space-x-3">
                    <CarFront />
                    <span>Request a Test Drive</span>
                  </Button>
                </Link>
                <Button variant="secondary">Browse Showroom</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="flex bg-black text-white justify-center space-y-4 items-center">
          <div className="flex-col space-y-12 py-16">
            <h2 className="font-medium text-center text-4xl">
              Our Best Sellers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <CarCard1 heading="Camry" image="/camry.png" />
              <CarCard1 heading="Corolla" image="/corolla.png" />
              <CarCard1 heading="RAV4" image="/rav4.png" />
              <CarCard1 heading="Tacoma" image="/tacoma.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex-col space-y-48 mx-12 py-24">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="w-[675px]">
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ duration: 1.75, delay: 0.7 }}
              whileInView={{ opacity: 1 }}
              src="/camry.png"
              className="w-full h-full"
              alt="camry"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center self-center space-y-8 text-center">
              <div className="w-[300px]">
                <h2 className="text-6xl leading-tight font-semibold tracking-wider text-center">
                  Economic Camry
                </h2>
              </div>
              <div className="w-[450px]">
                <p className="text-xl font-medium">
                  Camry's refined performance and elevated design let you chase
                  your daily thrills in style.
                </p>
              </div>
              <Button
                className="text-lg px-5 flex items-center space-x-3 border-black"
                size="lg"
                variant="outline"
              >
                <Car />
                <span>Browse Cars</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-y-12 flex-col">
            <h2 className="text-4xl text-center font-medium">
              Style for miles.
            </h2>
            <div className="flex space-x-3">
              <img
                src="/camry-group.jpg"
                className="object-cover w-full rounded-xl"
                alt="Camry Group"
              />
              <img
                src="/camry-rims.jpg"
                className="object-cover w-full rounded-xl"
                alt="Camry Group"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-y-12 flex-col">
            <h2 className="text-4xl text-center font-medium">
              The look of endless possibilities.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FeatureCard
                color="bg-indigo-100"
                heading="Redefined XLE Design"
                image="/camry-flyby.png"
                subheading="Whether you’re rowing through the gears of a 6-speed Manual with a short-throw shifter or triggering the paddle shifters of a 6-speed Auto with Dynamic Rev  Management, GR86 is ready for your next move."
              />
              <FeatureCard
                color="bg-indigo-100"
                heading="Rain Sensing Wipers"
                image="/camry-rain.png"
                subheading="Camry’s available  rain-sensing wipers help keep your line of sight clear by activating  when rain is detected on the windshield and adjust their speed according to how much rain is falling."
              />
              <FeatureCard
                color="bg-indigo-100"
                heading="Heated and Ventilated"
                image="/camry-interior.png"
                subheading="Camry’s available  heated and ventilated front seats put a premium on comfort with the  touch of a button, while an available heated steering wheel warms up for those extra chilly drives."
              />
              <FeatureCard
                color="bg-indigo-100"
                heading="Aluminum Sport Pedals"
                image="/camry-pedals.png"
                subheading="It’s all about the details. Camry’s aluminum sport pedals give an extra “oomph” to its premium look and feel (Only for SE and XSE models)."
              />
            </div>
            <div className="flex justify-center">
              <Button>Book a Test Drive</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-col space-y-48 mx-12 py-24">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex justify-center">
            <div className="flex flex-col items-center self-center space-y-8 text-center">
              <div className="w-[300px]">
                <h2 className="text-6xl leading-tight font-semibold tracking-wider text-center">
                  Sports GR86
                </h2>
              </div>
              <div className="w-[450px]">
                <p className="text-xl font-medium">
                  GR86 blends iconic heritage detailing with race-ready prowess,
                  injecting excitement into the twists and turns of your daily
                  drives.
                </p>
              </div>
              <Button
                className="text-lg px-5 flex items-center space-x-3 border-black"
                size="lg"
                variant="outline"
              >
                <Car />
                <span>Browse Cars</span>
              </Button>
            </div>
          </div>
          <div className="w-[675px]">
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ duration: 1.75, delay: 0.7 }}
              whileInView={{ opacity: 1 }}
              src="/gr86.png"
              className="w-full h-full"
              alt="camry"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-y-12 flex-col">
            <div className="flex justify-center">
              <div className="w-[400px]">
                <h2 className="text-4xl text-center font-medium">
                  Designed for the win. Delivering the thrills.
                </h2>
              </div>
            </div>
            <div className="flex space-x-3">
              <img
                src="/gr86-flyby.jpg"
                className="object-cover w-full rounded-xl"
                alt="Camry Group"
              />
              <img
                src="/gr86-rear.jpg"
                className="object-cover w-full rounded-xl"
                alt="Camry Group"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-y-12 flex-col">
            <h2 className="text-4xl text-center font-medium">Packs a punch.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FeatureCard
                color="bg-red-100"
                heading="18-In. Alloy Wheels"
                image="/gr86-rims.png"
                subheading="Stand out when you pull up with available 18-in. alloy wheels in a  matte-black finish, and maintain control on the road with Michelin® * Pilot® Sport 4 tires that grip the road in wet or dry conditions. *"
              />
              <FeatureCard
                color="bg-red-100"
                heading=" Front-Engine RWD"
                image="/gr86-drift.jpg"
                subheading="With a  front-mounted engine sending power to the rear wheels, GR86 was born to  give you better control in corners. Its strong chassis and optimal  weight distribution allow nimble handling on the road."
              />
              <FeatureCard
                color="bg-red-100"
                heading="Vehicle Stability Control"
                image="/gr86-flyby-2.jpg"
                subheading="Optimize traction and control with the help of GR86’s Vehicle Stability Control (VSC), * or dial it back to help you reach the limits of grip. Or use Full-Off  Mode to prevent the VSC from kicking in, putting you in full control."
              />
              <FeatureCard
                color="bg-red-100"
                heading="6-Speed Manual Trans"
                image="/gr86-manual.jpg"
                subheading="Whether you’re rowing through the gears of a 6-speed Manual with a short-throw shifter or triggering the paddle shifters of a 6-speed Auto with Dynamic Rev  Management, GR86 is ready for your next move."
              />
            </div>
            <div className="flex justify-center">
              <Button>Book a Test Drive</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
