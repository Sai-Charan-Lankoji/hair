const TryAtHome = () => {
  return (
    <div className="bg-[#e0ae7b] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-medium">Unsure Which Product To Pick?</h2>
            <h3 className="text-2xl">Try At Home</h3>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Select your preferred hair extensions from our diverse selection.</li>
              <li>Arrange a trial appointment to be held at your convenience.</li>
              <li>Our team of hair specialists will come to your residence.</li>
              <li>Confirm your choice and Book your Trial with ease.</li>
            </ol>
            <button className="bg-[#C4A484] text-white px-6 py-3 rounded">
              Schedule An Appointment
            </button>
          </div>
          <div className="md:w-1/2  gap-4 p-4">
            <img
              src="https://www.hairoriginals.com/cdn/shop/files/Group_121_1.png?v=1712745086"
              alt="Hair styling"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryAtHome;