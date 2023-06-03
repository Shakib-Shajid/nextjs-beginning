import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div>
      <Herosection
        title={"This is home page"}
        para={"This is homepage pararagraph"}
        imageUrl={"/websites.jpg"}
      />
    </div>
  );
}
