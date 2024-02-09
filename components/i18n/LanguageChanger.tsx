'use client';
import i18nConfig from '@/i18nConfig';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    const expiresDate = new Date(expires);
    Cookies.set('NEXT_LOCALE', newLocale, { expires: expiresDate, path: '/' });

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="uk">Ua</option>
      <option value="en">Eng</option>
    </select>
  );
}
