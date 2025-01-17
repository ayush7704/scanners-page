import logo from "../assets/logos/207762094.png";
import imgofLeft from "../assets/bg1.png";
import chef from "../assets/chef.png";
import ayushQR from "../assets/ayushnagar.png";

function footer() {
  return (
    <>
      <footer className="px-4 py-2 bg-white relative">
        <div className="mb-2 relative z-[2]">
          <div>
            <p className="font-normal text-center">
              Open Daily:
              <strong className="font-semibold"> 10 AM - 2 AM</strong>
            </p>
          </div>
          <p className="font-normal text-center">
            <strong className="font-semibold">Pure Veg</strong> ·
            <strong className="font-semibold"> Family-Friendly</strong> ·
            Affordable Since <strong className="font-semibold">2000</strong>
          </p>
          <address className="font-normal text-center">
            <strong className="font-semibold">Khajuri Sadak</strong>,
            Indore-Bhopal Road, Bhopal (MP)
          </address>
          <p className="font-normal text-center">
            {/* <strong className="font-semibold">Khajuri Sadak</strong>, */}
            Contact : <strong className="font-semibold">7999741488</strong> ,
            9165308504
          </p>
        </div>
        <img
          src={logo}
          className="relative z-[2] max-[280px]:w-[9rem] mx-auto block w-[11.875rem] md:w-[13.125rem]"
        />
        <img
          className="absolute z-0 drop-shadow-[0px_0px_20px_black] h-full scale-[1.55] left-[5%] rotate-[-20deg] top-[-6%]"
          src={imgofLeft}
          alt="background image to be come here"
        />
        <img
          className="absolute z-0 drop-shadow-[0px_0px_20px_black] h-full scale-[1.6] right-[7%] top-[-2%]"
          src={chef}
          alt="background image to be come here"
        />
        <div className="absolute bottom-[3%] left-5 w-full text-[0.7rem] flex items-baseline gap-2">
          <address className="inline-block">design &amp; developed by</address>
          <span className="capitalize font-normal text-[0.8rem]" style={{ textShadow: '0.125rem 1px 16px #ffffff' }}> ayush nagar</span>
          <img
            className="w-8 h-8 inline-block"
            src={ayushQR}
            alt="ayushnagar QR"
          />
        </div>
      </footer>
    </>
  );
}

export default footer;
