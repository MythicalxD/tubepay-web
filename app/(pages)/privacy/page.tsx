"use client";
import { Passion_One } from 'next/font/google'
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function Privacy() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
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
                <p className='text-3xl' ><strong>TubePay Privacy Policy</strong></p><br></br>
                <p><strong>Data Collection:</strong></p>
                <p>To provide you with the best experience and personalized services, TubePay requires users to provide their email address during the app registration process. This information is crucial for linking in-app progress and ensuring secure authentication.</p><br></br>
                <p><strong>Data Use:</strong></p>
                <p>Your email address is used solely for the purpose of enhancing your TubePay experience. We utilize it to link and store your in-app progress securely, as well as to authenticate your identity within the app.</p><br></br>
                <p><strong>Data Disposal:</strong></p>
                <p>At TubePay, we respect your right to privacy and control over your data. If you choose to close your account, we are committed to promptly and permanently deleting all associated data upon your request. Your privacy matters to us, and we want to ensure that your information is handled with the utmost care.</p><br></br>
                <p><strong>Data Privacy:</strong></p>
                <p>Your privacy is of paramount importance to us. We want to assure you that we do not use your email address to send newsletters or any other types of unsolicited information. Your email information is strictly used for the purposes mentioned in the &quot;Data Use&quot; section, and we do not engage in any practices that compromise your privacy or security.</p><br></br>
                <p><strong>Security Measures:</strong></p>
                <p>TubePay employs industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. We continuously update our security protocols to ensure that your information remains secure.</p><br></br>
                <p><strong>Third-Party Services:</strong></p>
                <p>TubePay may utilize third-party services to enhance the app&#39;s functionality. However, rest assured that we carefully select and vet these services to ensure they align with our commitment to user privacy.</p><br></br>
                <p><strong>Policy Updates:</strong></p>
                <p>This privacy policy is subject to periodic updates. Any changes to our privacy practices will be reflected in this document, and users will be notified accordingly. We recommend that you review this policy regularly to stay informed about how we collect, use, and protect your information.</p><br></br>
                <p><strong>Contact Information:</strong></p>
                <p>If you have any questions, concerns, or requests regarding your privacy and data on TubePay, please contact us at [<a href="mailto:&#x63;&#111;&#x6e;&#116;&#97;&#99;&#x74;&#64;&#101;&#x6d;&#97;&#x69;&#108;&#46;&#99;&#111;&#x6d;">&#x63;&#111;&#x6e;&#116;&#97;&#99;&#x74;&#64;&#101;&#x6d;&#97;&#x69;&#108;&#46;&#99;&#111;&#x6d;</a>]. We are here to address any inquiries and ensure your confidence in using our application.</p><br></br>
                <p>By using TubePay, you agree to the terms outlined in this privacy policy. We appreciate your trust in us and are committed to providing you with a secure and enjoyable experience. Thank you for choosing TubePay!</p><br></br>
                <p><em>Last Updated: 15/01/2024</em></p>

            </div>
        </main>
    )
}

export default Privacy;
