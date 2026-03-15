const Home = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-48 pb-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Zeebu Job Finder
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Find your dream job today!
        </p>

        <a
          href="#"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
        >
          Browse Job Listings
        </a>
      </div>
    </div>
  );
};

export default Home;