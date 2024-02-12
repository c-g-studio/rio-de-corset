import Link from 'next/link';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import { NextPage } from 'next/types';
import Image from 'next/image';
import { productsAPI } from '@/services/productsAPI';

const i18nNamespaces = ['corsets'];

interface NextPageProps {
  params: { locale: string };
}

const Page: NextPage<NextPageProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const response = await productsAPI.getCorsets(locale);
  const object = response.data.data[1];
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <section className="pt-[134px]">
        <div className="container">
          <h1 className="text-center">[ {t('title')} ]</h1>
          {/* <ul>{response.data.data.map(item => console.log(item))}</ul> */}
          <ul>
            <li>
              <Link href={`/corsets/${object.id}`}>
                <Image
                  src={
                    'http://localhost:1337' +
                    object.attributes.preview.data.attributes.url
                  }
                  width={312}
                  height={320}
                  alt=""
                />
                <div>
                  <div>
                    <h3>{object.attributes.name_uk}</h3>
                    <span>
                      <span>
                        {object.attributes.size.data.attributes.size_abbr}
                      </span>
                      <span>{object.attributes.pice_uk}</span>
                    </span>
                  </div>
                  <svg className="fill-transparent h-[24px] w-[24px] stroke-blackColor  transition-colors duration-300 ease-in group-hover:stroke-activeColor  ">
                    <use href="/image/icons.svg#icon-shopping-cart"></use>
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
          <Link
            href={{ pathname: '/corsets/some-corset', query: { id: 10 } }}
            className="text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm md:text-base"
          >
            link
          </Link>
        </div>
      </section>
    </TranslationsProvider>
  );
};

export default Page;
