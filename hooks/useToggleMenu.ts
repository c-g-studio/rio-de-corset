'use client';
import { useLockBodyScroll, useMedia, useToggle } from 'react-use';

const IS_MOBILE = '(max-width: 767px)';
const IS_TABLET = '(min-width: 768px)';
const IS_DESCTOP = '(min-width: 1440px)';

export const useToggleMenu = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const isMobile = useMedia(IS_MOBILE, false);
  const isTablet = useMedia(IS_TABLET, false);
  const isDesctop = useMedia(IS_DESCTOP, false);

  useLockBodyScroll(isMenuOpen && isMobile);

  return { isMenuOpen, toggleMenu, isMobile, isTablet, isDesctop };
};
