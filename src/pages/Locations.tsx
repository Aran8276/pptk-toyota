import LocationCard from "@/components/LocationCard";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Locate, Send, Trash2 } from "lucide-react";

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentScreen, setCurrentScreen] = useState<"locations" | "contact">(
    "locations"
  );

  useEffect(() => {
    console.log(currentScreen);
  }, [currentScreen]);

  const handleLocation = (screen: "locations" | "contact") => {
    setTimeout(() => {
      setCurrentScreen(screen);
    }, 400);
  };

  return (
    <div className="p-14">
      <AnimatePresence>
        {currentScreen == "locations" && (
          <motion.section
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "-200vh" }}
            transition={{ type: "spring" }}
            className="relative flex flex-col space-y-4"
          >
            <h2 className="text-4xl font-medium">Malang</h2>
            <div className="flex space-x-12 flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027639.8269482194!2d108.99766246211713!3d-6.98168608820725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629ccc1ef8e97%3A0x10ce721338dd27b5!2sToyota%20Auto2000%20Malang%20Sutoyo!5e0!3m2!1sen!2sus!4v1729060698640!5m2!1sen!2sus"
                width="2048"
                height="450"
                className="rounded-xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex justify-center w-full">
                <div className="flex flex-col w-full space-y-4">
                  <Input
                    placeholder="Search for dealership..."
                    className="w-full"
                  />
                  <LocationCard
                    locationHandler={handleLocation}
                    heading="Toyota Auto2000 Malang Sukun"
                    subheading="Jl. S. Supriadi No.35, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65147, Indonesia"
                    hasToyotaLogo
                  />
                  <LocationCard
                    locationHandler={handleLocation}
                    heading="Toyota Auto2000 Batulicin"
                    subheading="Jl Raya Batulicin Desa Sejahtera, Batulicin, Kec. Batulicin, Kalimantan Selatan 72213, Indonesia"
                    hasToyotaLogo
                  />
                  <LocationCard
                    locationHandler={handleLocation}
                    heading="Bursa mobil WTC Mangga Dua"
                    subheading="WTC Mangga Dua, Jl. Mangga Dua Raya No.8, RT.11/RW.5, Ancol, Kec. Pademangan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia"
                  />
                  <LocationCard
                    locationHandler={handleLocation}
                    heading="BMS Bursa Mobil Summarecon, Gading Serpong"
                    subheading="Jl. Gading Serpong Boulevard, Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810, Indonesia"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentScreen == "contact" && (
          <motion.section
            initial={{ opacity: 0, x: "100vh" }}
            transition={{ type: "spring", delay: 0.2 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex absolute bottom-0 left-0 right-0 top-32 justify-center"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center">
                <h2 className="font-medium text-2xl">Dealer Appointment</h2>
              </div>
              <form className="flex flex-col space-y-2 text-gray-600 py-4 px-48">
                <div className="flex space-x-2">
                  <Input className="w-full" placeholder="First name" />
                  <Input className="w-full" placeholder="Last name" />
                </div>
                <Input className="w-full" placeholder="Email address" />
                <Input className="w-full" placeholder="Phone" />
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Dealership" />
                    </SelectTrigger>
                    <SelectContent className="absolute">
                      <SelectItem value="light">Toyota Malang</SelectItem>
                      <SelectItem value="dark">Toyota Surabaya</SelectItem>
                      <SelectItem value="system">Toyota Jakarta</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Car" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Camry</SelectItem>
                      <SelectItem value="dark">Corolla</SelectItem>
                      <SelectItem value="system">Land Cruiser</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  className="h-[128px] w-full"
                  placeholder="Message"
                ></Textarea>
                <div className="flex py-8 justify-center">
                  <div className="flex space-x-3 justify-between">
                    <Button className="flex space-x-3 items-center">
                      <Send />
                      <span>Submit</span>
                    </Button>
                    <Button
                      className="flex space-x-3 items-center"
                      variant="destructive"
                    >
                      <Trash2 />
                      <span>Clear Forms</span>
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setCurrentScreen("locations")}
                      className="flex space-x-3 items-center"
                      variant="secondary"
                    >
                      <Locate />
                      <span>Back to Locations</span>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
