"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google'
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function About() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
            <SEO
                title="Privacy Policy - Tubepay"
                description="Your privacy matters to us at Tubepay. Understand how we handle your data with transparency and security. We collect minimal information to enhance your experience, and you have the control to manage your data at your convenience."
                canonical="https://tubepay.live/privacy"
            />

            <div className="flex h-[70px] items-center px-[15px] w-screen bg-gradient-to-r from-orange-400 to-pink-500">
                <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
                    <img src="./logo.png" alt="logo" className='h-[40px]' />
                </a>
                <Link href="/">
                    <p className='text-md font-bold text-gray-700 hover:text-black ml-4' >HOME</p>
                </Link>
                <Link href="/about">
                    <p className='text-md font-bold text-gray-700 hover:text-black ml-4' >ABOUT US</p>
                </Link>
                <Link href="/privacy">
                    <p className='text-md font-bold text-gray-700 hover:text-black ml-4' >PRIVACY POLICY</p>
                </Link>
            </div>
            <div className="text-black p-8">
                <p className='text-3xl' ><strong>About Our Team and Our App</strong></p><br></br>
                <p>At the crossroads of innovation, passion, and knowledge, our team of college students united with a shared vision of crafting high-quality mobile applications that add tangible value to users&#39; lives. Leveraging our diverse skills in SQL database management, NodeJS backend development, and Flutter frontend design, we embarked on an exhilarating journey to develop cutting-edge apps that harness the power of AI to elevate user experiences and broaden their horizons.</p><br></br>
                <p><strong>Our Journey Begins</strong></p>
                <p>Our journey commenced as a collective of like-minded students driven by a shared ambition to leave a mark on the landscape of technology. Acknowledging the potential of AI and mobile applications to revolutionize industries and reshape user interactions, we set out to channel this potential into an app that not only prioritizes user-friendliness but also stimulates intellectual growth.</p><br></br>
                <p><strong>The App&#39;s Concept</strong></p>
                <p>After numerous brainstorming sessions, we settled on an idea that resonated with our objectives: Tubepay, an application designed for users to earn free rewards in their free time while enjoying their favorite videos. This concept not only caters to entertainment enthusiasts but also prioritizes user privacy and data security, as Tubepay is crafted by ASL Software.</p><br></br>
                <p><strong>The Tech Stack</strong></p>
                <p>Tubepay&#39;s foundation is built on a robust tech stack, amalgamating SQL database management, NodeJS, and Flutter. The SQL database provides a reliable way to store vast amounts of data, while NodeJS serves as the backbone of our backend, handling data processing and interactions. Flutter&#39;s cross-platform capabilities and beautiful UI components enable us to create an engaging and seamless user experience.</p><br></br>
                <p><strong>Privacy and Technology at the Core</strong></p>
                <p>ASL Software, the creator of Tubepay, prioritizes user privacy and data security. Ads are server-based on users&#39; interests, enhancing the ecosystem. The technology behind Tubepay incorporates modern industry standards, with Node.JS as the server-side language, MySQL for simplicity and lightweight databases, and advanced encryption standards for security.</p>
                <p>Our applications are crafted to meet modern needs, optimizing server costs without compromising speed and security. ASL Software utilizes proprietary software, custom-built to maintain servers and build applications using segments and micro-service architecture.</p><br></br>
                <p><strong>User-Driven Development</strong></p>
                <p>Throughout the development process, user feedback has been pivotal. Surveys, beta testing, and user interviews have provided insights to enhance Tubepay continually. This iterative approach allows us to fine-tune the app to meet the specific demands of our users.</p><br></br>
                <p><strong>Our Mission Ahead</strong></p>
                <p>As we look to the future, our mission is to empower users with the knowledge and confidence to communicate effectively. We are committed to expanding Tubepay&#39;s features, refining its AI capabilities, and exploring new ways to make language learning an enjoyable and rewarding experience.</p><br></br>
                <p><strong>Join Us on Our Adventure</strong></p>
                <p>Tubepay represents not only our technical prowess but also our dedication to creating products that make a positive impact. We invite you to join us on this exciting adventure of learning and growth as we continue to push the boundaries of what technology and AI can achieve for education and personal development.</p>
                <p>In conclusion, our team of college students came together to build Tubepay, an ad revenue-based application that combines the power of SQL, NodeJS, Flutter, and AI to enrich users&#39; lives by providing free rewards in their free time. We are enthusiastic about the possibilities that lie ahead and are committed to making a meaningful difference in the lives of our users. Thank you for joining us on this incredible journey!</p><br></br>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=appmoneydev@gmail.com&su=Inquiry&body=Tell us more about what you want...">
                    <p className='text-md w-[140px] font-bold text-orange-500 border-2 border-orange-700 rounded-md hover:text-black ml-4 flex justify-center items-center h-[50px]'>CONTACT US</p>
                </a>

            </div>
        </main>
    )
}

export default About;
