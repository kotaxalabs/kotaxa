export default function ThemeGrid() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.05]
        [background-size:40px_40px]
        [background-image:
          linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
      "
    />
  );
}
