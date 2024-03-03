import Featured from "@/components/Featured";
import Offered from "@/components/Offered";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offered />
    </main>
  );
}
