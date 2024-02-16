'use client';
import { FC, useEffect, useState } from 'react';

type AnimateTitleProps = {
  titleString: string;
};

export const AnimateTitle: FC<AnimateTitleProps> = ({ titleString }) => {
  const [viewString, setViewString] = useState('');

  useEffect(() => {
    const string = titleString;
    setViewString('');
    let intervalId: NodeJS.Timeout;
    let index = -1;
    const arrayString = [...string];

    const addLetters = () => {
      intervalId = setInterval(() => {
        index += 1;
        if (index <= arrayString.length - 1) {
          setViewString(previousState => previousState + arrayString[index]);
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    };

    addLetters();

    return () => clearInterval(intervalId);
  }, [titleString]);

  return (
    <h2 className="mb-6 text-center  text-[26px] font-medium uppercase tracking-[0.04em] text-blackColor md:mb-8 md:text-[34px] lg:mb-10 lg:text-[40px]">
      [ {viewString} ]
    </h2>
  );
};
