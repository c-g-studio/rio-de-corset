import i18nConfig from '@/i18nConfig';

export function generateStaticParameters() {
  return i18nConfig.locales.map(locale => ({ locale }));
}