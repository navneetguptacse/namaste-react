import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Error = () => {
  const error = useRouteError();
  let title = "Unexpected Error";
  let message = "Something went wrong. Please try again later.";
  let statusCode = null;

  if (isRouteErrorResponse(error)) {
    title = `${error.status} - ${error.statusText}`;
    message = error.data?.message || message;
    statusCode = error.status;
  } else if (error instanceof Error) {
    message = error.message;
  }

  // Different styling based on error type
  const is404 = statusCode === 404;
  const is500 = statusCode >= 500;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Error Icon */}
        <div className="mx-auto">
          {is404 ? (
            <div className="text-8xl mb-4">🍕</div>
          ) : is500 ? (
            <div className="text-8xl mb-4">⚠️</div>
          ) : (
            <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <FaExclamationTriangle className="w-12 h-12 text-orange-500" />
            </div>
          )}
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {is404 ? "404" : statusCode || "Oops!"}
          </h1>

          <h2 className="text-2xl font-semibold text-gray-700">
            {is404 ? "Page Not Found" : title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
            {is404
              ? "The page you're looking for seems to have gone missing. Let's get you back on track!"
              : message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-6">
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
            onClick={() => (window.location.href = "/")}
          >
            <FaHome className="w-5 h-5" />
            Back to Home
            <FaArrowRightLong className="w-4 h-4" />
          </button>

          <div className="flex gap-3">
            <button
              className="flex-1 bg-white border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-4 py-3 rounded-lg font-medium transition-all duration-200"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>

            <button
              className="flex-1 bg-white border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-4 py-3 rounded-lg font-medium transition-all duration-200"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Need help? Try these suggestions:
          </p>

          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-left">
              <h4 className="font-medium text-gray-900 mb-2">
                🔍 Search for restaurants
              </h4>
              <p className="text-gray-600">Find your favorite food near you</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 text-left">
              <h4 className="font-medium text-gray-900 mb-2">
                📞 Contact Support
              </h4>
              <p className="text-gray-600">
                Call us at 1800-123-4567 for assistance
              </p>
            </div>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="pt-6">
          <p className="text-xs text-gray-400 italic">
            {is404
              ? "Even our delivery partners couldn't find this page! 🛵"
              : "Don't worry, our tech team is as fast as our delivery! 🚀"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
