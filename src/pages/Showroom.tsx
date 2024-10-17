import CarCard2 from "@/components/CarCard2";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Showroom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <div className="flex text-white justify-center bg-cover h-fit pb-12 w-full bg-[url('/camry-group.jpg')]">
          <div className="flex flex-col space-y-8 py-14">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center">
                <h2 className="text-5xl font-semibold">Toyota Showroom</h2>
              </div>
              <div className="flex justify-center">
                <div className="w-[540px] text-center">
                  <p>
                    Explore the newest Toyota trucks, cars, SUVs, hybrids and
                    minivans. See photos, compare models, get tips, calculate
                    payments, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  animate={{ y: 0, opacity: 100 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <CarCard2 name="RAV4" price={28675} image="/rav4.png" />
                  <CarCard2 name="SEQUOIA" price={28675} image="/sequoia.png" />
                  <CarCard2 name="4RUNNER" price={28675} image="/4runner.png" />

                  <CarCard2 name="TACOMA" price={28675} image="/tacoma.png" />
                  <CarCard2 name="LAND CRUISER" price={28675} image="/lc.png" />
                  <CarCard2 name="TUNDRA" price={28675} image="/tundra.png" />

                  <CarCard2 name="PRIUS" price={28675} image="/prius.png" />
                  <CarCard2 name="CAMRY" price={28675} image="/camry.png" />
                  <CarCard2 name="COROLLA" price={28675} image="/corolla.png" />

                  <CarCard2 name="GR86" price={28675} image="/gr86.png" />
                  <CarCard2 name="SUPRA" price={28675} image="/supra.png" />
                  <CarCard2
                    name="GR COROLLA"
                    price={28675}
                    image="/gr-corolla.png"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
