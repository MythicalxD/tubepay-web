"use client";
import { useEffect, useState } from "react";

export default function AdsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const submitRefCode = () => {
    if (!refCode.trim()) {
      alert("Please enter a referral code");
      return;
    }
    alert("Referral Code submitted: " + refCode);
    setShowPopup(false);
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {/* ADS */}
      <div
        id="frame"
        style={{
          width: "100%",
          margin: "auto",
          position: "relative",
          zIndex: 99998,
        }}
      >
        <iframe
          data-aa="2425888"
          src="//acceptable.a-ads.com/2425888/?size=Adaptive"
          style={{
            border: 0,
            padding: 0,
            width: "70%",
            height: "260px",
            overflow: "hidden",
            display: "block",
            margin: "auto",
          }}
        ></iframe>
      </div>

      {/* WAIT TEXT */}
      <p className="text-center text-lg mt-4 font-semibold">
        Wait <span className="text-blue-500">10 seconds</span> to get free TP…
      </p>

      {/* POPUP OVERLAY */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>Enter Your Referral Code</h3>
            <input
              value={refCode}
              onChange={(e) => setRefCode(e.target.value)}
              placeholder="Referral Code"
              style={{
                width: "90%",
                padding: "8px",
                marginTop: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            />

            <button
              onClick={submitRefCode}
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "10px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
