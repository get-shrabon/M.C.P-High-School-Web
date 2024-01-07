import Marquee from "react-fast-marquee";

const Textslide = () => {
  return (
    <div className="container mx-auto py-10 px-5 relative top-[-50px] shadow bg-no-repeat bg-center bg-cover slide__bg rounded flex ">
      <button className="bg-yellow-500 text-nowrap py-3 px-4 select-none cursor-cell rounded-lg text-white font-bold">
        Latest Announce
      </button>
      <Marquee autoFill={true} pauseOnHover={true} className="shadow py-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
          eligendi unde consectetur vitae quam reprehenderit?
        </p>
      </Marquee>
    </div>
  );
};

export default Textslide;
