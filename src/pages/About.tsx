import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-14">
      <div className="flex flex-col space-y-16">
        <section className="flex justify-center">
          <h2 className="text-4xl font-medium">About Toyota</h2>
        </section>
        <motion.section
          initial={{ y: 80, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 100 }}
        >
          <div className="flex space-x-32 px-12 w-full justify-between">
            <div className="flex items-center w-[800px]">
              <div className="flex-col space-y-2">
                <h1 className="self-start font-semibold text-4xl">
                  Innovation and Technology
                </h1>
                <p className="text-xl text-justify">
                  Toyota continues to be at the forefront of automotive
                  innovation, focusing on hybrid and electric vehicle
                  technology. The company has introduced a range of hybrid
                  models, including the popular Prius, and is investing heavily
                  in hydrogen fuel cell technology with models like the Mirai.
                </p>
              </div>
            </div>
            <img
              src="/mirai.png"
              className="rounded-xl self-center w-[600px] object-cover"
              alt="Highlander"
            />
          </div>
        </motion.section>
        <motion.section
          initial={{ y: 80, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 100 }}
        >
          <div className="flex space-x-32 px-12 w-full justify-between">
            <img
              src="/agya.jpg"
              className="rounded-xl self-center w-[600px] object-cover"
              alt="Highlander"
            />
            <div className="flex items-center w-[800px]">
              <div className="flex-col space-y-2">
                <h1 className="self-start font-semibold text-4xl">
                  Global Presence
                </h1>
                <p className="text-xl text-justify">
                  Toyota maintains a strong global presence, with manufacturing
                  plants and sales networks in numerous countries. The company
                  produces millions of vehicles annually and has a diverse
                  lineup that includes sedans, SUVs, trucks, and commercial
                  vehicles.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ y: 80, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 100 }}
        >
          <div className="flex space-x-32 px-12 w-full justify-between">
            <div className="flex items-center w-[800px]">
              <div className="flex-col space-y-2">
                <h1 className="self-start font-semibold text-4xl">
                  Commitment to Sustainability
                </h1>
                <p className="text-xl text-justify">
                  Toyota is committed to sustainability and reducing its
                  environmental impact. The company has set ambitious goals to
                  achieve carbon neutrality by 2050 and is actively working on
                  developing eco-friendly technologies and practices.
                </p>
              </div>
            </div>
            <img
              src="/hybrid.jpg"
              className="rounded-xl self-center w-[600px] object-cover"
              alt="Highlander"
            />
          </div>
        </motion.section>
        <motion.section
          initial={{ y: 80, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 100 }}
        >
          <div className="flex space-x-32 px-12 w-full justify-between">
            <img
              src="/highlander.jpg"
              className="rounded-xl self-center w-[600px] object-cover"
              alt="Highlander"
            />
            <div className="flex items-center w-[800px]">
              <div className="flex-col space-y-2">
                <h1 className="self-start font-semibold text-4xl">
                  Customer-Centric Approach
                </h1>
                <p className="text-xl text-justify">
                  Toyota places a strong emphasis on customer satisfaction and
                  quality. The company is known for its reliable and durable
                  vehicles, and it continuously strives to improve the driving
                  experience through advanced safety features and innovative
                  designs.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
