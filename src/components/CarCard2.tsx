import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SelfProps {
  image: string;
  name: string;
  price: number;
}

export default function CarCard2(props: SelfProps) {
  return (
    <Link to="/grcorolla">
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="w-[235px] h-[275px] cursor-pointer bg-white rounded-xl"
      >
        <div className="px-4 pt-4">
          <img src={props.image} className="w-full" alt={props.name} />
        </div>
        <div className="text-black text-center p-6">
          <h4 className="font-light text-2xl">{props.name}</h4>
          <p className="font-normal tracking-tight">MSRP STARTING AT</p>
          <p className="font-extrabold">${props.price?.toLocaleString()}</p>
        </div>
      </motion.div>
    </Link>
  );
}
