interface SelfProps {
  img: string;
  heading: string;
  subheading: string;
}

export default function CardCarousel(props: SelfProps) {
  return (
    <div className="flex flex-col">
      <img
        className="h-[625px] object-cover"
        src={props.img}
        alt={props.heading}
      />
      <div className="flex flex-col space-y-2 p-12">
        <h2 className="font-medium text-3xl">{props.heading}</h2>
        <div className="text-justify">{props.subheading}</div>
      </div>
    </div>
  );
}
