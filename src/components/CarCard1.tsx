import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SelfProps {
  heading: string;
  image: string;
}

export default function CarCard1(props: SelfProps) {
  return (
    <Link to="/">
      <motion.div
        initial={{ opacity: 0, x: "-40vh" }}
        transition={{ type: "spring", duration: 1.4 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="overflow-visible flex flex-col bg-black"
      >
        <div className="w-[275px]">
          <img
            src={props.image}
            className="w-full h-full"
            alt={props.heading}
          />
        </div>
        <h3 className="font-light text-center text-xl">{props.heading}</h3>
      </motion.div>
    </Link>
  );
}
