const positions = [
  "left-[calc(50%_-_max(700px,50vw))]",
  "left-1/2",
  "left-[calc(50%_+_max(700px,50vw))]",
];

// Parent section must be `relative isolate` so the stripes sit behind its content.
export default function DiagonalStripes({
  colorClassName = "bg-threepts-green/4",
  flip = false,
}: {
  colorClassName?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {positions.map((position) => (
        <div
          key={position}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${flip ? "-rotate-45" : "rotate-45"} w-75 h-[300%] ${colorClassName} ${position}`}
        />
      ))}
    </div>
  );
}
