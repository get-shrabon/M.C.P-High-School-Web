const CTA = () => {
  return (
    <div className="pb-32 2xl:pb-56 2xl:pt-20 pt-10 CTA__container">
      <div className="w-[fit-content] mx-auto text-center cta__info">
        <h2 className="text-4xl font-bold font-mono">Join Our Newsletter</h2>
        <p>Subscribe our newsletter to get our latest update & news.</p>
        <div className="flex items-center justify-center mx-auto border w-[fit-content] p-2 rounded-xl mt-3">
          <input
            className="bg-transparent placeholder:text-slate-400 p-2 w-[250px]"
            type="email"
            name="email"
            id=""
            placeholder="Type Your Email..."
          />
          <button className="btn btn-warning">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
