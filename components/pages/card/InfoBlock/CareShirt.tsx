import GentleCleaning from '@/public/image/card/gentleСleaning.svg';
import Handwash from '@/public/image/card/handwash.svg';
import WarmWater from '@/public/image/card/warmWater.svg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const CareShirt: FC = () => {
  const { t } = useTranslation();
  return (
    <ul>
      <li className="flex gap-2 text-xs md:text-base">
        <Handwash className="h-5 w-5 " /> {t('careInfo1')}
      </li>
      <li className="flex gap-2 text-xs md:text-base">
        <WarmWater className="h-5 w-5 " /> {t('careInfo2')}
      </li>
      <li className="flex gap-2 text-xs md:text-base">
        <GentleCleaning className="h-5 w-5 " /> {t('careInfo3')}
      </li>
    </ul>
  );
};
