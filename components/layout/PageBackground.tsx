import GradientBlur from "@/components/ui/GradientBlur";
import ThemeGrid from "@/components/ui/ThemeGrid";

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <GradientBlur />
      <ThemeGrid />
    </div>
  );
}
