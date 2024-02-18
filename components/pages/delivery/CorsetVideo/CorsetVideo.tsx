'use client';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';

const playVideo: MouseEventHandler<HTMLButtonElement> = event => {
  const targetElement: EventTarget | null = event.target;
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

export const CorsetVideo: FC = () => {
  return (
    <div className="relative">
      <video
        width="402"
        height="437"
        preload="none"
        poster="/image/delivery/desc/corset.jpg"
        className="h-[566px] w-[343px] object-cover md:h-[411px] md:w-[322px] lg:h-[437px] lg:w-[402px]"
        id="deliveryVideo"
      >
        <source src="/video/corset_pack.mp4" type="video/mp4" />
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
