const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600">
            © 2025{" "}
            <a
              href="/"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Swiggy Restaurants App
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
