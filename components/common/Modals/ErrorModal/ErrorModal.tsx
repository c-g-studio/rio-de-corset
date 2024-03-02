/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

type ErrorModalProps = {
  isError: boolean;
  modalToggler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

export const ErrorModal: FC<ErrorModalProps> = ({ isError, modalToggler }) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        isError
          ? 'visible fixed  left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-auto bg-fuckingModalBackdrop opacity-100 transition-all ease-linear'
          : 'invisible fixed left-0 top-0  flex h-full w-full items-center justify-center overflow-auto bg-fuckingModalBackdrop opacity-0 transition-all ease-linear'
      }
    >
      <div
        className={
          isError
            ? 'visible fixed left-0 top-0 z-30 h-full w-full'
            : 'invisible fixed left-0 top-0 h-full w-full'
        }
        onClick={modalToggler}
      ></div>
      <div className="relative z-40 mt-[50px] bg-whiteColor px-4 pb-[73px] pt-[103px] md:mt-0 md:px-[75px]">
        <button
          className="absolute right-[24px] top-[24px]"
          aria-label="close modal"
          onClick={modalToggler}
        >
          <svg className="linear h-[24px] w-[24px] stroke-blackColor transition-colors duration-300 group-hover:stroke-activeColor	">
            <use href="/image/icons.svg#icon-x"></use>
          </svg>
        </button>
        <div className="max-w-[450px] bg-modalTextBg p-[25px] md:pl-[75px] md:pr-[75px]">
          <h3 className="mb-[32px] text-center text-[20px] font-medium uppercase tracking-[0.04em] text-blackColor">
            {t('errorOrderTitle')}
          </h3>
          <p className="text-center font-medium uppercase tracking-[0.04em]">
            {t('errorOrderText')}
          </p>
        </div>
      </div>
    </div>
  );
};
