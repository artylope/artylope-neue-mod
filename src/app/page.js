import Image from 'next/image';
import phoneIntro from '@/img/phone-intro.png';

export default function Home() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <div className="py-36 pr-12">
              <h2 className="text-4xl mb-8">Hello, I am Yi Xin</h2>
              <h1 className="text-5xl lg:text-8xl  mb-12">
                I solve problems, simplify complex ideas and craft intuitive and
                delightful experiences.
              </h1>
              <p className="text-xl  text-slate-700 dark:text-slate-300 leading-relaxed">
                Lead Product Designer at{' '}
                <strong>Open Government Products, Singapore</strong>. <br />
                Previously from <strong>Stripe</strong> and{' '}
                <strong>Amazon Web Services</strong>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center items-center">
            <Image src={phoneIntro} height={720} alt="Yi Xin's Mock Phone" />
            <div className="before:content-[''] before:bg-red-500 before:block before:absolute before:top-0 before:bottom-0 before:right-0 before:lg:w-1/2 before:-z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
