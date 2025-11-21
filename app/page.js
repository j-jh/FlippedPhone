"use client";
import { useEffect, useState } from "react";
import InCall from "@/components/InCall";
import KeyScreen from "@/components/KeyScreen";

export default function FlippedPhone() {
  const initialButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const [buttons, setButtons] = useState(initialButtons);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inCall, setInCall] = useState(false);

  // On mount, set interval to scramble letters every 200 milliseconds 
  useEffect(() => {
    setInterval(() => {
      setButtons([...buttons].sort(() => Math.random() - 0.5));
    }, 200);
  }, []);

  // Append digit to number
  function handleClick(num) {
    setPhoneNumber(phoneNumber + num);
    setButtons([...buttons].sort(() => Math.random() - 0.5));
  };

  // Delete last digit of number
  function handleDelete() {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  // Toggle call state to call
  function handleCall() {
    setInCall(true); // switch to call screen
  };

  // Toggle call state to end
  function handleEndCall() {
    setInCall(false);
    setPhoneNumber("");
  };

  return (
    <div className="scale-150">
      {inCall ?
        <InCall
          phoneNumber={phoneNumber}
          handleEndCall={handleEndCall} /> :
        <KeyScreen
          phoneNumber={phoneNumber}
          buttons={buttons}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleCall={handleCall}
        />
      }
    </div>
  );
}
