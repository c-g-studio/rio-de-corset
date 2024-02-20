'use client';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';

const playVideo: MouseEventHandler<HTMLButtonElement> = event => {
  const targetElement: EventTarget | null = event.currentTarget;
  const videoElement =
    document.querySelector<HTMLVideoElement>('#deliveryVideo');
  if (videoElement && videoElement.paused) {
    videoElement.play();
    (targetElement as HTMLElement).style.opacity = '0';
  } else if (videoElement) {
    videoElement.pause();
    (targetElement as HTMLElement).style.opacity = '1';
  }
};

export const AboutVideo: FC = () => {
  return (
    <div className="relative shrink-0">
      <video
        width="402"
        height="437"
        preload="none"
        poster="/image/about/work.jpg"
        className="h-[340px] w-[310px] object-cover"
        id="deliveryVideo"
      >
        <source src="/video/workCat.mp4" type="video/mp4" />
      </video>
      <button onClick={playVideo} className="absolute top-0 h-[100%] w-[100%]">
        <Image
          src="/image/play.png"
          width={80}
          height={80}
          alt="play button"
          className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </button>
    </div>
  );
};
