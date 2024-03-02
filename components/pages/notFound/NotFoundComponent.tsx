import { introcondblack } from '@/app/[locale]/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type NotFoundProps = {
  sorry: string;
  notFound: string;
  back: string;
};

export const NotFoundComponent: FC<NotFoundProps> = ({
  sorry,
  notFound,
  back,
}) => {
  return (
    <section className="overflow-hidden">
      <div className="container relative pb-[60px] pt-[251px] text-center md:pb-[200px] lg:pb-[140px]">
        <div className="absolute top-[60px] flex w-full justify-center md:top-[106px] md:w-auto md:justify-start">
          <Image
            src="/image/404/adidas.png"
            width={180}
            height={241}
            alt="corset"
            className="w-[241px] animate-[rotateAnim_3s_linear_infinite]"
          />
        </div>
        <div className="md:mx-auto md:max-w-[487px]">
          <p
            className={`${introcondblack.className} text-[180px]/[1.11] font-black uppercase md:text-[274px]/[1]`}
          >
            404
          </p>
          <div className="mb-6 text-base uppercase tracking-[0.04em] md:mb-9 md:mb-9 md:text-2xl">
            <p>{sorry}</p>
            <p>{notFound}</p>
          </div>
          <Link
            href="/"
            className="block border border-transparent bg-activeColor py-[14px] text-base uppercase tracking-[0.08em] text-whiteColor transition-colors hover:border-blackColor hover:bg-transparent hover:text-blackColor focus:border-blackColor focus:bg-transparent focus:text-blackColor md:text-xl"
          >
            {back}
          </Link>
        </div>
        <Image
          src="/image/404/nike.png"
          width={180}
          height={241}
          alt="corset"
          className={`hidden w-[241px] animate-[revertRotateAnim_3s_linear_infinite] md:absolute md:bottom-[-74px] md:right-0 md:block lg:bottom-[-15px] lg:left-[100px] lg:right-auto`}
        />
        <Image
          src="/image/404/nike-desk.png"
          width={180}
          height={241}
          alt="corset"
          className={`hidden w-[241px] animate-[revertRotateAnim_3s_linear_infinite] lg:absolute lg:right-[130px] lg:top-[100px]  lg:block`}
        />
        <Image
          src="/image/404/adidas-desk.png"
          width={180}
          height={241}
          alt="corset"
          className={`hidden w-[241px] animate-[revertRotateAnim_3s_linear_infinite] lg:absolute lg:bottom-0 lg:right-0  lg:block`}
        />
      </div>
    </section>
  );
};
