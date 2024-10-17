import { motion } from "framer-motion";

interface SelfProps {
  hasToyotaLogo?: boolean;
  heading: string;
  subheading: string;
  locationHandler: (screen: "locations" | "contact") => void;
}

export default function LocationCard(props: SelfProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      onClick={() => props.locationHandler("contact")}
      className="flex cursor-pointer items-center space-x-8 bg-gray-100 h-[86px] w-full px-8 rounded-lg"
    >
      {props.hasToyotaLogo ? (
        <img
          src="/toyota-logo.svg"
          className="w-[48px]"
          alt="Official Toyota Dealership"
        />
      ) : (
        <></>
      )}
      <div className="flex flex-col space-y-1">
        <h4 className="text-xl line-clamp-1">{props.heading}</h4>
        <p className="text-sm text-gray-600 line-clamp-1">{props.subheading}</p>
      </div>
    </motion.div>
  );
}
