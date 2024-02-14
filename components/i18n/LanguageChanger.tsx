'use client';
import i18nConfig from '@/i18nConfig';
import { Listbox, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const option = [
  { id: 1, name: 'uk', value: 'ua', unavailable: false },
  { id: 2, name: 'en', value: 'eng', unavailable: false },
];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: { name: string }) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    const expiresDate = new Date(expires);
    Cookies.set('NEXT_LOCALE', newLocale.name, {
      expires: expiresDate,
      path: '/',
    });
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale.name + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale.name}`),
      );
    }
    router.refresh();
  };

  return (
    <Listbox value={{ name: currentLocale }} onChange={handleChange}>
      {({ open }) => {
        return (
          <>
            <div
              className={
                open
                  ? 'relative order-2 ml-auto flex w-[68px] cursor-pointer flex-col rounded-t bg-mainSelectColor uppercase'
                  : 'relative order-2 ml-auto flex w-[68px] cursor-pointer flex-col rounded-t uppercase'
              }
            >
              <Listbox.Button className="focus:border-blue-300 relative z-10 flex justify-around rounded px-1 uppercase tracking-[0.04em] transition-colors duration-300 hover:bg-activeColor focus:bg-activeColor">
                {currentLocale === 'en' ? 'eng' : 'ua'}
                <svg className="h-[24px] w-[24px] stroke-blackColor transition-colors">
                  <use href="/image/icons.svg#icon-chevron-down"></use>
                </svg>
              </Listbox.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform translate-y-[-24px] opacity-0 z-1"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform translate-y-[-24px] opacity-0 z-1"
              >
                <Listbox.Options className="z-1 absolute bottom-0 w-[100%] translate-y-[24px] rounded-b bg-mainSelectColor focus:outline-none">
                  {option.map(
                    person =>
                      currentLocale !== person.name && (
                        <Listbox.Option
                          key={person.id}
                          value={person}
                          disabled={person.unavailable}
                          className=" ui-active:bg-activeColor rounded px-1 tracking-[0.04em] transition-colors hover:bg-activeColor focus:bg-activeColor"
                        >
                          {person.value}
                        </Listbox.Option>
                      ),
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        );
      }}
    </Listbox>
  );
}
