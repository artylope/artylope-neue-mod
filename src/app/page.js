import Image from 'next/image';
import phoneIntro from '@/img/phone-intro.png';

export default function Home() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="">
            <div className="py-36">
              <h2 className="text-3xl mb-8 font-medium">Hello, I am Yi Xin</h2>
              <h1 className="text-5xl lg:text-8xl font-medium">
                I solve problems, simplify complex ideas and craft intuitive and
                delightful experiences.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={phoneIntro} height={720} alt="Yi Xin's Mock Phone" />
            <div className="before:content-[''] before:bg-red-500 before:block before:absolute before:top-0 before:bottom-0 before:right-0 before:lg:w-1/2 before:-z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
