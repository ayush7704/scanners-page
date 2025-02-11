import { useContext } from "react";
import { globaldata } from "./context/context";

function card({ steps, children, classes, cardName, subline, num, imgs }) {
  const { cardsData } = useContext(globaldata);
  return (
    <section
      className={`${classes} backdrop-blur-[5px] bg-[rgba(255,_255,_255,_0.7)] text-[1.1rem] grid sm:grid-cols-1 relative overflow-hidden shadow-[0px_9px_25px_-21px_black] rounded-[18px] border border-[#0000003b] `}
    >
      <h2 className="capitalize bg-[linear-gradient(0deg,_rgb(125,83,155),_rgba(0,0,0,1),_rgba(0,0,0,1),_rgb(170,189,205))] font-medium absolute top-[3px] z-[2] px-3 rounded-3xl p-1 left-[3px] bg-black text-white">
        {num}. {cardName}
      </h2>

      {/* scanner */}
      <div className="grid items-center grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
        <div className="grid items-center p-4 pt-[2.7rem]">{children}</div>
        <div className="p-2">
          {cardName.toLowerCase() === "menu" && (
            <img
              className="h-full drop-shadow-[0px_0px_20px_black] max-h-40 object-contain w-full"
              src={imgs}
              alt={`${cardName} image`}
            />
          )}
          {cardName.toLowerCase() === "free wifi" && (
            <div>             
              <img
                className="h-full drop-shadow-[0px_0px_20px_black] max-h-40 w-full object-contain"
                src={imgs}
                alt="free wifi image"
              />
            </div>
          )}
          {cardName.toLowerCase() === "feedback" && (
            <img
              className="h-full drop-shadow-[0px_0px_20px_black] object-contain w-full"
              src={imgs}
              alt={`${cardName} image`}
            />
          )}
          {cardName.toLowerCase() === "payment" && (
            <>
              <img
                className="h-full drop-shadow-[0px_0px_20px_black] max-h-[12rem] object-contain w-full"
                src={imgs}
                alt={`${cardName} image`}
              />
            </>
          )}
        </div>
      </div>
      {/* end of scanner */}

      {/* middle lines  */}

      {cardName.toLowerCase() === "menu" && (
        <div className="px-3">
          <span className="text-[0.82em]">Website: </span>
          <span className="text-[0.82em] font-normal">mannudhaba.netlify.app/menu</span>
        </div>
      )}

      {cardName.toLowerCase() === "free wifi" && (
        <div className="px-3">
          <p className="leading-[normal]">
            <span className="text-[0.82em] font-light">Name: </span>{" "}
            <span className="text-[0.82em] font-normal">
              Mannu Dhaba and Family Restaurant  <span className="text-xs font-light text-gray-600"> (or similar)</span>
              </span>
          </p>
          <p className="leading-[normal]">
            <span className="text-[0.82em] font-light">Password: </span>{" "}
            <span className="text-[0.82em] font-normal">mannudhaba</span>
          </p>
        </div>
      )}

      {cardName.toLowerCase() === "feedback" && (
        <div className="px-3">
          <span className="text-[0.82em] font-light">Name: </span>
          <span className="text-[0.82em] font-normal">
            Mannu Dhaba and Family Restaurant
          </span>
        </div>
      )}

      {cardName.toLowerCase() === "payment" && (
        <div className="px-3">
          <span className="text-[0.82em] font-light">Receiver name: </span>
          <span className="text-[0.82em] font-normal">Manohar nagar</span>
        </div>
      )}

      {/* end of middle lines  */}

      <div className="p-3 bg-white">
        <h3 className="font-medium text-[0.95em] mb-2">{subline}</h3>

        {/* steps  */}
        <p className="mb-1 text-[0.92em] font-normal">Steps:</p>
        <ol className="text-[0.9em] mb-1">
          {steps.map((value, ind) => (
            <li key={ind}>{value}</li>
          ))}
        </ol>
      </div>
      {/* end of steps*/}
    </section>
  );
}

export default card;
