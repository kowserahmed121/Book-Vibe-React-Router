import bannerImg from "../../assets/books.png";

const Hero = () => {
  return (
    <div className="mt-6">
      <div className="hero bg-base-200 py-24 rounded-xl">
        <div className="hero-content gap-28 flex-col lg:flex-row-reverse px-20">
          <img
            className="w-[400px] h-[400px] -inset-10 -rotate-1"
            src={bannerImg}
          />
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-accent">View all Book List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
