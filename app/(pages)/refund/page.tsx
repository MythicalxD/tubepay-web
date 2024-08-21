"use client";
import SEO from '@/components/SEO';
import { Passion_One } from 'next/font/google'
import Link from 'next/link';

const passion = Passion_One({ subsets: ['latin'], weight: '400', })


function Privacy() {

    return (
        <main className="flex flex-col min-h-screen w-screen bg-[#F3F4F5] overflow-x-hidden">
            <SEO
                title="Refund and Cancelation - Tubepay"
                description="Refund and Cancelation"
                canonical="https://tubepay.live/refund"
            />

            <div className="flex h-[70px] items-center px-[15px] w-screen bg-gradient-to-r from-orange-400 to-pink-500">
                <a href="https://play.google.com/store/apps/details?id=com.earn.tubepay.tubepay">
                    <img src="./logo.png" alt="logo" className='h-[40px]' />
                </a>
                <Link href="/">
                    <p className='text-md font-bold text-gray-700 hover:text-black ml-4' >HOME</p>
                </Link>
            </div>
            <div className="text-black p-8">
                <h1 className='text-3xl' ><strong>TubePay Refund and Cancelation</strong></h1><br></br>
                <p>Cancellation and Refund Policy

                    At Tubepay, we are committed to providing a seamless experience for our users. However, we understand that sometimes circumstances change, and you may need to cancel your transaction. Please read our cancellation and refund policy carefully to understand your rights and obligations.

                    1. Cancellation Policy

                    Once a payment is made, you have a 30-minute window to cancel the transaction and request a full refund.
                    Cancellations after the 30-minute window will not be accepted, and the payment will be considered final.
                    2. Refund Policy

                    Refunds are only available within the 30-minute cancellation window.
                    To request a refund, please contact our support team through [contact method, e.g., email, live chat, or phone] within 30 minutes of making the payment. Please include your transaction ID and the reason for the refund request.
                    Once your refund request is received and processed, the refund will be issued back to the original payment method within [insert time frame, e.g., 5-10 business days].
                    3. Exceptions

                    Refunds are not applicable if the services/products have already been delivered or used.
                    In cases where technical issues arise on our platform, and you are unable to complete the intended transaction, please contact our support team immediately for assistance.
                    4. Changes to the Policy

                    Tubepay reserves the right to modify or update this policy at any time. Any changes will be communicated to users via [email, in-app notification, etc.].
                    5. Contact Us

                    If you have any questions or concerns about our cancellation and refund policy, please feel free to contact us at [contact email/phone number].</p><br></br>

            </div>
        </main>
    )
}

export default Privacy;
