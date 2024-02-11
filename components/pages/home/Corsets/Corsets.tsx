import initTranslations from '@/app/i18n';
import { FC } from 'react';

interface HeroProps {
  locale: string;
}
export const Corsets: FC<HeroProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className="mt-[1264px] h-[800px] bg-whiteColor md:mt-[1016px] lg:mt-[1485px]">
      <h2>[ {t('corsets')} ]</h2>
    </section>
  );
};
