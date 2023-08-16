import React, { useState } from "react";

const Cta = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;

    if (
      fullName.trim() === "" ||
      fullName.length > 50 ||
      !/^[a-zA-Z\s]*$/.test(fullName)
    ) {
      setError(
        "Please enter a valid full name (up to 50 characters, no special characters)"
      );
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Please enter a valid email address");
      isValid = false;
    }

    if (isValid) {
      try {
        // Send the data to the API route
        const response = await fetch("/api/submitForm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email }),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        const data = await response.json();
        console.log("API response:", data);
        // Clear form and set submitted state
        setFullName("");
        setEmail("");
        setError("");
        setSubmitted(true);
      } catch (error) {
        console.error("API error:", error);
        setError(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    }
  };

  return (
    <section name="cta" id="cta" className="text-gray-600 body-font">
      <div className="container">
        <div className="md:mx-auto mx-auto">
          <div className="flex flex-col text-center w-full mb-6 sm:mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Join Waitlist: Secure Your Spot!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gradient">
              Eager for what&apos;s next? Be part of the inner circle by joining
              our waitlist and stay in the loop.
            </p>
          </div>

          {submitted ? (
            <p className="text-center font-semibold text-white relative flex-grow w-full">
              Thank you for joining us. We will be in touch soon.
            </p>
          ) : (
            <div className="wrap sm:flex justify-center">
              <form
                onSubmit={handleSubmit}
                className="grid sm:flex gap-4 sm:items-end"
              >
                <div className="relative w-full">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-slate-50"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full bg-white bg-opacity-50 rounded border-2 border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setError("");
                    }}
                  />
                </div>
                <div className="relative  w-full">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-slate-50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white bg-opacity-50 rounded border-2 border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                </div>
                <div className="relative">
                  <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
          {error && <p className="text-red-500 mt-2 text-center ">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Cta;
