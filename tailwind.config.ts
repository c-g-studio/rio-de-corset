import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1',
          md: '2.5rem',
          lg: '4rem',
        },
      },
      backgroundImage: {
        checkedRadio: "url('/checkedRadio.png')",
      },
    },
    keyframes: {
      rowAnim: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - 20px))' },
      },
      colAnim: {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(calc(-100% - 20px))' },
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      mainText: '#0D0E12',
      secondText: '#FEFEFE',
      mainBgc: '#FEFEFE',
      activeColor: '#9EB315',
      mainSelectColor: '#e0ec8f',
      activeCardColor: '#E7E7E7',
      transparent: 'transparent',
      pressColor: '#5F6A18',
      selectBgc: '#5F6A18',
      blackColor: '#000000',
      whiteColor: '#ffffff',
      orderMenuBgc: '#AEAEAE',
      placeholderColor: '#989898',
      notValidBorder: '#D54747',
      notValidBgc: '#FFE8E8',
      silverColor: '#606060',
      inputBorder: '#7f7f7f',
      activeBtn: '#D9D9D9',
      greyColor: '#f1f1f1',
      orderHover: 'rgba(217, 217, 217, 0.2)',
      continueHover: 'rgba(79, 79, 79, 0.44)',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
};
export default config;
