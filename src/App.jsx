import { useContext } from "react";
import Header from "./components/Header";
import Card from "./components/card";
import { globaldata } from "./components/context/context";
import Footer from "./components/footer";
import background from "./assets/background.webp";

function App() {
  const { cardsData } = useContext(globaldata);
  return (
    <>
      <Header></Header>
      <main className="relative">
        <img
          className="absolute z-[-1] inset-0 w-full h-full object-cover"
          src={background}
          alt="background image 1"
        />
        <div className="grid sm:grid-cols-2 gap-6 justify-center justify-items-center px-[1.65rem] py-[1.15rem]">
          {cardsData.map((value, ind) => (
            <Card
              key={ind}
              imgs={value.imgs}
              num={ind + 1}
              subline={value.subline}
              cardName={value.cardName}
              cardIcon={value.cardIcon}
              classes={"w-full"}
              steps={value.steps}
            >
              <img className='w-full object-contain h-[120px] drop-shadow-[2px_8px_14px_rgba(0,0,0,0.68)]' src={value.scannner_img} alt={`${value.cardName} QR Scanner`} />
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
