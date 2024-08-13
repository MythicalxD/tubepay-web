"use client";
import styles from './imageAnimation.module.css';
import Slider from '@/components/slider';
import YouTubePlayer from '@/components/player';
import Slider1 from '@/components/slider-crypto';
import Slider2 from '@/components/slider-pay';
import { useEffect, useState } from 'react';
import { Passion_One } from 'next/font/google'
import Link from 'next/link';
import SEO from '@/components/SEO';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function Home() {

  const [count, setCount] = useState(0);
  const [time, setTime] = useState(150);
  const totalTime = 150;

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';
    script.src = 'https://www.smartsuppchat.com/loader.js?';

    const smartsupp = document.createElement('script');
    smartsupp.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '325031abf2b01b44e1fcbad7f72dec9d5f02e55f';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
      })(document);
    `;

    document.body.appendChild(smartsupp);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(smartsupp);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < totalTime) {
        setCount(prevCount => prevCount + 0.02);
      } else {
        clearInterval(intervalId);
      }
    }, 300);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [count]); // Empty dependency array ensures the effect runs only once on component mount


  return (
    <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
      {/* Landing Page */}
      <div className='md:h-screen h-[125vh] w-screen bg-gradient-to-r from-orange-400 to-pink-500'>
        <div className="flex h-[70px] items-center px-[15px] w-screen">
          <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
            <img src="./logo.png" alt="logo" className='md:h-[40px] h-[20px]' />
          </a>
          <Link href="/about">
            <p className='md:text-md md:block hidden text-sm font-bold text-gray-700 hover:text-black ml-4' >ABOUT US</p>
          </Link>
          <Link href="/privacy">
            <p className='md:text-md md:block hidden text-sm font-bold text-gray-700 hover:text-black ml-4' >PRIVACY POLICY</p>
          </Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=appmoneydev@gmail.com&su=I want to build a App/Software&body=Tell us more about what you want...">
            <p className='md:text-md text-sm font-bold text-white-600 hover:bg-purple-700 bg-purple-600 rounded-md p-2 px-4 ml-4' >BUILD YOUR APP</p>
          </a>
          <a href="/offerwall">
            <p className='md:text-md text-sm font-bold text-white-600 hover:bg-purple-700 bg-purple-600 rounded-md p-2 px-4 ml-4' >OFFERWALL</p>
          </a>
        </div>
        <div className="md:flex hidden absolute w-screen">
          <img src="./art1.png" alt="tubepay" className='md:w-[106px] md:h-[236px] w-[50px] h-[111px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="flex absolute right-10 top-[150px]">
          <img src="./art2.png" alt="tubepay" className='md:w-[106px] md:h-[236px] w-[50px] h-[111px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="md:flex hidden absolute right-10 top-[60px]">
          <img src="./v2.png" alt="tubepay" className='md:w-[47px] md:h-[66px] w-[47px] h-[66px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="md:flex hidden absolute md:right-[-150px] right-0 top-[400px] bottom-[60px]">
          <img src="./v1.png" alt="tubepay" className='md:w-[267px] md:h-[257px] w-[47px] h-[66px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="flex absolute md:left-[-150px] left-0 bottom-[60px]">
          <img src="./v1.png" alt="tubepay" className='md:w-[267px] md:h-[257px] w-[47px] h-[66px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="flex absolute md:left-[500px] left-[30px] bottom-[10px]">
          <img src="./art3.png" alt="tubepay" className='md:w-[270px] md:h-[136px] w-[100px] h-[50px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className="flex flex-col md:mx-[250px] md:mt-[60px] md:w-[500px]">
          <div className={`text-white md:text-[50px] text-[35px] mx-8 font-normal tracking-[3.50px] ${passion.className}`}>WATCH AND EARN FREE REWARDS AND PAYPAL CASH</div>
          <div className="text-white text-xl mx-8 font-semibold tracking-wider mt-[20px]">Download now and Enter Referral code<br />TUBEPAY to get free 1$ as signup bonus.<br /></div>
          <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
            <img src="./play.png" alt="download" className='z-10 w-[200px] h-[60px] mt-[20px] mx-8' />
          </a>
          <div className="flex w-screen justify-center items-center">
            <div className={`z-10 md:absolute relative md:right-10 top-0 md:block md:w-[600px] md:h-[500px] w-[300px] h-[360px] mt-[20px] mx-8 ${styles.imageContainer}`}>
              <img
                src="./img1.png"
                alt="download"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.animatedImage}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="md:flex hidden absolute md:top-[800px] top-[1000px] object-cover">
        <img src="./wave.png" alt="tubepay" className='w-screen' />
      </div>
      <div className="md:flex hidden absolute md:top-[900px] top-[1500px] transform rotate-180 object-cover">
        <img src="./wave.png" alt="tubepay" className='w-screen' />
      </div>

      {/* Stats */}
      <div className="z-10 flex md:flex-row flex-col w-screen gap-y-[80px] justify-between md:px-[200px] items-center absolute md:top-[1000px] top-[1000px]">
        <img src="./stat3.png" alt="stat1" className='w-[220px] h-[56px]' />
        <img src="./stat2.png" alt="stat1" className='w-[255px] h-[56px]' />
        <img src="./stat1.png" alt="stat1" className='w-[255px] h-[56px]' />
      </div>

      {/* Second Banner */}

      <div className='flex flex-col items-center md:mt-0 mt-[500px] md:h-[160vh] h-[125vh] w-screen bg-gradient-to-r from-orange-400 to-pink-500'>
        <div className="flex absolute md:right-[100px] right-[-50px] top-[1300px]">
          <img src="./art3.png" alt="tubepay" className='md:w-[270px] md:h-[136px] w-[100px] h-[50px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className={`text-white md:text-[50px] text-[35px] mx-8 md:mt-[600px] mt-[80px] font-normal tracking-[3.50px] ${passion.className}`}>EARN TP IN SECONDS</div>
        <div className="flex md:flex-row flex-col w-screen justify-center items-center md:px-[100px] h-[600px] mt-[30px]">
          <YouTubePlayer videoId='89blpMzo0BU' />
          <div className="flex flex-col p-8 m-4">
            <p className='text-bold text-3xl text-white mb-8' >CLick to watch</p>
            <div className={`animate-bounce`}>
              <h1 className='text-4xl text-white font-bold' >Balance: $ {count.toFixed(2)}</h1>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
              <div className="flex justify-center items-center w-[150px] h-[50px] mt-[30px] border-2 border-purple-700 rounded-md bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 from-purple-400 to-pink-700 text-white font-extrabold text-xl">
                CLAIM NOW
              </div>
            </a>
            <div className={`animate-pulse`}>
              <h1 className='text-2xl text-white font-semibold mt-[20px]' >Time Remaining: {time} sec</h1>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col items-center md:h-[110vh] h-[100vh] w-screen bg-gradient-to-r from-orange-400 to-pink-500'>
        <div className="flex absolute md:right-[-100px] right-[-20px] top-[1850px]">
          <img src="./v1.png" alt="tubepay" className='md:w-[267px] md:h-[257px] w-[47px] h-[66px] md:ml-[50px] md:mt-[30px]' />
        </div>
        <div className={`text-white md:text-[50px] text-[35px] mx-8 mt-[70px] font-normal tracking-[3.50px] ${passion.className}`}>EASY USER INTERFACE</div>
        <Slider />
      </div>

      {/* Divider */}
      <div className="md:flex hidden absolute md:top-[900px] top-[2500px] transform rotate-180 object-cover">
        <img src="./wave.png" alt="tubepay" className='w-screen' />
      </div>

      <div className='flex flex-col items-center mt-0 md:mt-[0px] md:h-[60vh] h-[60vh] w-screen bg-white'>
        <div className="flex absolute md:right-[100px] right-[20px] top-[2300px]">
          <img src="./art2.png" alt="tubepay" className='md:w-[270px] md:h-[136px] w-[100px] h-[50px] md:ml-[50px] ml-[20px] md:mt-[30px]' />
        </div>
        <div className={`text-black md:text-[50px] text-[35px] mx-8 mt-[30px] font-normal tracking-[3.50px] ${passion.className}`}>ALL CRYPTO AVAILABLE</div>
        <Slider1 />
        <Slider2 />
      </div>

      {/* Copyright */}
      <div className='flex flex-col justify-center items-center md:h-[60px] h-[60px] w-screen bg-gradient-to-r from-orange-400 to-pink-500'>
        <div className='text-md text-white px-3 text-center' >©2022 Copyright ASL Software. ALL RIGHTS RESERVED</div>
      </div>
    </main>
  )
}

export default Home;
