import Image from 'next/image';
import phoneIntro from '@/img/phone-intro.png';

export default function Home() {
  return (
    <>
      {/* first container */}
      <div className="container overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <div className="lg:py-36 lg:pr-8">
              <h2 className="text-lg lg:text-4xl mb-4 lg:mb-12 text-slate-800 dark:text-white">
                Hello, I am Yi Xin
              </h2>
              <h1 className="text-3xl lg:text-[5.5rem] mb-4 lg:mb-20 tracking-tight leading-[1em]">
                I <span className="">solve</span> problems,{' '}
                <span className="">simplify</span> complex ideas,{' '}
                <span className="">create</span> intuitive and delightful
                experiences.
              </h1>
              <p className="text-lg lg:text-2xl text-slate-800 dark:text-slate-300 lg:leading-relaxed">
                Lead Product Designer at{' '}
                <strong>Open Government Products, Singapore</strong>. Previously
                from <strong>Stripe</strong> and{' '}
                <strong>Amazon Web Services</strong>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="-mt-12">
              <Image src={phoneIntro} height={720} alt="Yi Xin's Mock Phone" />
            </div>

            <div className="before:content-[''] before:bg-red-500 before:block before:absolute before:right-0 before:w-[50vw] before:top-0 before:bottom-0 before:-z-10 before:-mr-64"></div>
          </div>
        </div>
      </div>
    </>
  );
}
