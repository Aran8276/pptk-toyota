interface SelfProps {
  image: string;
  heading: string;
  subheading: string;
  color: string;
}

export default function FeatureCard(props: SelfProps) {
  return (
    <div
      className={"flex flex-col w-[380px] h-[545px] rounded-xl " + props.color}
    >
      <img
        src={props.image}
        className="w-full h-[240px] rounded-t-xl object-cover"
        alt={props.heading}
      />
      <div className="flex flex-col space-y-3 p-8">
        <h3 className="font-medium text-2xl">{props.heading}</h3>
        <p className="text-lg text-justify line-clamp-6">{props.subheading}</p>
      </div>
    </div>
  );
}
