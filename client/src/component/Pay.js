// /client/src/components/Pay.js
import React, { useState } from "react";
import axios from "axios";

const Pay = () => {
  const [data, setData] = useState({
    name: "DemoTest",
    email: "demo@test.com",
    phone: "9999999999",
    amount: 10,
  });

  const handleFormData = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const makePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sunny2040.github.io/sahyog.github.io:5000/api/initiatePayment", data);
      if (response.data.success) {
        window.location.href = response.data.paymentUrl;
      } else {
        alert("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("An error occurred during payment initiation");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={makePayment}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                value={data.name}
                onChange={handleFormData}
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={data.email}
                onChange={handleFormData}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleFormData}
                type="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
            <div className="mt-2">
              <input
                id="amount"
                name="amount"
                value={data.amount}
                onChange={handleFormData}
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pay;
