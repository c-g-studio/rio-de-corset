import { FC } from 'react';
import { AboutDescription } from './AboutDescription/AboutDescription';
import { AboutSlider } from './AboutSlider/AboutSlider';

interface AboutProps {
  locale: string;
}
export const About: FC<AboutProps> = ({ locale }) => {
  return (
    <>
      <AboutDescription locale={locale} />
      <AboutSlider />
    </>
  );
};
