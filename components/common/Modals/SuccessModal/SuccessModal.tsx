/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

type SuccessModalProps = {
  isOpen: boolean;
  modalToggler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

export const SuccessModal: FC<SuccessModalProps> = ({
  isOpen,
  modalToggler,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        isOpen
          ? 'visible fixed  left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-auto bg-fuckingModalBackdrop opacity-100 transition-all ease-linear'
          : 'invisible fixed left-0 top-0  flex h-full w-full items-center justify-center overflow-auto bg-fuckingModalBackdrop opacity-0 transition-all ease-linear'
      }
    >
      <div
        className={
          isOpen
            ? 'visible fixed left-0 top-0 z-30 h-full w-full'
            : 'invisible fixed left-0 top-0 h-full w-full'
        }
        onClick={modalToggler}
      ></div>
      <div className="relative z-40 ml-4 mr-4 mt-[50px] bg-whiteColor px-[30px] pb-[55px] pt-[84px] md:mt-0 md:px-[75px]">
        <button
          className="absolute right-[24px] top-[24px]"
          aria-label="close modal"
          onClick={modalToggler}
        >
          <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
            <use href="/image/icons.svg#icon-x"></use>
          </svg>
        </button>
        <div className="max-w-[450px] ">
          <h3 className="mb-[32px] text-center text-[24px] font-medium uppercase tracking-[0.04em] text-blackColor">
            {t('successOrderTitle')}
          </h3>
          <p className="mb-4 text-center font-medium uppercase tracking-[0.04em]">
            {t('successOrderText')}
          </p>
          <Image
            src="/heart.svg"
            width={24}
            height={24}
            alt="heart icon"
            className="mx-auto block"
          />
        </div>
      </div>
    </div>
  );
};
