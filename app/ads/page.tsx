'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function Redirector() {
  const searchParams = useSearchParams();
  
  // Get the target URL from the query string
  const targetUrl = searchParams.get('url');
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // If no URL is present, don't start the timer
    if (!targetUrl) return;

    // Countdown logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetUrl]);

  // Handle the actual redirect when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && targetUrl) {
      // Using window.location.href ensures a hard redirect which is better for breaking out of iframes/ads
      window.location.href = targetUrl;
    }
  }, [timeLeft, targetUrl]);

  if (!targetUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 font-sans">
        Error: No destination URL provided.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 font-sans">
      {/* 1. Status Message */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Loading your game in...
        </h1>
        <div className="text-5xl font-bold text-blue-600 animate-pulse">
          {timeLeft}s
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Please wait while we verify your connection.
        </p>
      </div>

      {/* 2. Featured Ad Area (Verification Unit) */}
      <div className="w-full max-w-xl bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-[10px] text-gray-300 uppercase tracking-widest mb-2 text-center">
          Advertisement
        </p>
        
        {/* START: Your specific ad unit fixed for React */}
        <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
          <iframe 
            data-aa='2425969' 
            src='https://acceptable.a-ads.com/2425969/?size=Adaptive'
            style={{
              border: 0, 
              padding: 0, 
              width: '70%', 
              height: '250px', // Set height to ensure visibility
              overflow: 'hidden', 
              display: 'block', 
              margin: 'auto'
            }}
          />
        </div>
        {/* END: Ad unit */}
        
      </div>

      {/* 3. Manual Override (Optional but recommended) */}
      {/* <div className="mt-8">
         <button 
          onClick={() => window.location.href = targetUrl}
          className="text-gray-400 text-sm underline decoration-dotted hover:text-gray-600"
        >
          Click here if you are not redirected
        </button>
      </div> */}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <Redirector />
    </Suspense>
  );
}