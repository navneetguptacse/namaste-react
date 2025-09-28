const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Swiggy
          </h1>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Welcome to Swiggy - India's largest food delivery platform. We
              connect millions of customers with their favorite restaurants and
              deliver delicious food right to their doorstep.
            </p>
            <p className="mb-4">
              Founded in 2014, Swiggy has revolutionized the food delivery
              experience with our innovative technology, extensive restaurant
              network, and reliable delivery fleet.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p>
                  To provide unparalleled convenience to urban consumers
                  wherever they are.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p>
                  To be the most loved hyperlocal player in emerging markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
