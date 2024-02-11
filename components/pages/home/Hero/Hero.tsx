import { introcondblack } from '@/app/[locale]/fonts';
import initTranslations from '@/app/i18n';
import { FC } from 'react';

interface HeroProps {
  locale: string;
}
export const Hero: FC<HeroProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className="absolute top-[608px] z-10 h-[656px] w-[100%] bg-activeColor py-[287px] md:top-[540px] md:h-[476px] md:py-[173px] lg:top-[767px] lg:h-[718px] lg:py-[241px]">
      <div className="container">
        <h1
          className={`${introcondblack.className} mb-2 text-center text-[40px]/[1] font-black uppercase text-whiteColor sm:text-[50px]/[1] md:text-[100px]/[1] lg:mb-4 lg:text-[168px]/[1.07]`}
        >
          rio.de.corset
        </h1>
        <p
          className={` text-center text-base font-light tracking-[0.04em] text-whiteColor md:text-lg/[1.22] lg:text-[32px]/[1.25]`}
        >
          <span className="mr-1">[</span>
          <span className={`${introcondblack.className} font-light`}>
            {t('update')}
          </span>
          <span className="ml-1">]</span>
        </p>
      </div>
    </section>
  );
};
