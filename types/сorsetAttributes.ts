export type сorsetAttributes = {
  name_uk: string;
  size_text_uk: string;
  description_uk: string;
  price_uk: number;
  name_en: string;
  size_text_en: string;
  description_en: string;
  price_en: number;
  preview: {
    data: {
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        url: string;
      };
    };
  };
  slides: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        url: string;
      };
    }[];
  };
  size: {
    data: {
      id: number;
      attributes: {
        size_abbr: string;
      };
    };
  };
  category: {
    data: {
      id: number;
      attributes: {
        categoty_name: string;
      };
    };
  };
};
