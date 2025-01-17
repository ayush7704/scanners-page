import { useContext } from "react";
import Header from "./components/Header";
import Card from "./components/card";
import { globaldata } from "./components/context/context";
import Footer from "./components/footer";
import bgone from "./assets/bg2.png";

function App() {
  const { cardsData } = useContext(globaldata);
  return (
    <>
      <Header></Header>
      <main className="relative">
        <img
          className="absolute z-[-1] inset-0 w-full h-full object-cover"
          src={bgone}
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
              classes={"w-full"}
              steps={value.steps}
            >
              <img className='w-full object-contain h-[120px] drop-shadow-[0px_0px_10px_black]' src={value.scannner_img} alt={`${value.cardName} QR Scanner`} />
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
