'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function Redirector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
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
          window.location.href = targetUrl; // Hard redirect to break out of frame
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetUrl]);

  if (!targetUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Error: No destination URL provided.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 1. Status Message */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Redirecting you in...
        </h1>
        <div className="text-5xl font-bold text-blue-600 animate-pulse">
          {timeLeft}s
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Please wait while we prepare your link.
        </p>
      </div>

      {/* 2. Featured Ad Area */}
      <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-[10px] text-gray-300 uppercase tracking-widest mb-2 text-center">
          Advertisement
        </p>
        <div id="frame" className="flex justify-center">
          <iframe 
            data-aa='2425888' 
            src='//acceptable.a-ads.com/2425888/?size=Adaptive'
            style={{
              border: 0, 
              padding: 0, 
              width: '100%', 
              height: '250px', // Larger ad format for the bridge page
              overflow: 'hidden', 
              display: 'block'
            }}
          />
        </div>
      </div>

      {/* 3. Manual Override */}
      <button 
        onClick={() => window.location.href = targetUrl}
        className="mt-8 text-gray-400 text-sm underline decoration-dotted"
      >
        Click here to skip if not redirected
      </button>
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