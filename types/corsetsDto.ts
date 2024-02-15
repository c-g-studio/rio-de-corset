import { corsetAttributes } from '@/types/сorsetAttributes';

export type corsetsDto = {
  data: [
    {
      id: number;
      attributes: corsetAttributes;
    },
  ];
};
