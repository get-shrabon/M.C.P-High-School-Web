import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [showAll, setShowAll] = useState(9);
  useEffect(() => {
    fetch("Dummy-Images.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-20">
      <div className="text-center">
        <h5 className="underline text-[#ffd900] font-bold text-xl font-mono mb-1">
          Our Gellary
        </h5>
        <h2 className=" mb-5 text-3xl font-bold text-black">
          Overview Our School
        </h2>
      </div>
      <div className="container mx-auto grid gap-5 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        {gallery.slice(0, showAll).map((img) => (
          <div key={img.id}>
            <img data-aos="zoom-in-up" src={img.image} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <div className={showAll === gallery.length && "hidden"}>
          <button
            onClick={() => setShowAll(gallery.length)}
            className="btn btn-warning"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
