"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const initialButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const [buttons, setButtons] = useState(initialButtons);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setButtons((prevButtons) => [...prevButtons].sort(() => Math.random() - 0.5));
    }, 200);
    // on unmount, clear interval
    return () => clearInterval(interval);
  }, []);

  function handleClick(num) {
    setPhoneNumber(phoneNumber + num);
    setButtons([...buttons].sort(() => Math.random() - 0.5));
  };
  // Delete last digit
  function handleDelete() {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };
  // Call alert, clear input
  function handleCall() {
    alert(`Calling ${phoneNumber}...`);
    setPhoneNumber("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        FlippedPhone
      </h3>
      <input
        type="text"
        value={phoneNumber}
        disabled
        className="w-44 h-12 mb-6 text-center border border-gray-300 rounded focus:outline-none bg-gray-100 text-black text-lg"
      />

      <div className="grid grid-cols-3 gap-3 mb-4">
        {buttons.map((num, index) => (
          <button
            key={index}
            onClick={() => handleClick(num)}
            className="w-14 h-14 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer flex items-center justify-center font-semibold text-black text-lg"
          >
            {num}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="w-24 h-12 bg-red-500 hover:bg-red-600 text-white rounded font-semibold transition-colors"
        >
          X
        </button>

        <button
          onClick={handleCall}
          className="w-24 h-12 bg-green-500 hover:bg-green-600 text-white rounded font-semibold transition-colors"
        >
          Call
        </button>
      </div>
    </div>
  );
}
