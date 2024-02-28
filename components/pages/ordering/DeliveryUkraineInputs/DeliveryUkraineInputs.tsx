import { FC, Fragment, useState } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

import { Input } from '@/components/common/formElements/form/Input';
import { Label } from '@/components/common/formElements/form/Label';

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<{
    email: string;
    city: string;
    department_number: string;
  }>;
  selected: { name: string };
  setSelected: (value: { name: string }) => void;
}

export const DeliveryUkraineInputs: FC<Props> = ({
  register,
  errors,
  selected,
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { t } = useTranslation();
  const people = [{ name: t('novaPost') }, { name: t('ukrPost') }];
  // const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <Label labelText={t('city')} className="mb-4 flex flex-col uppercase">
        <Input
          {...register('city')}
          error={errors.city?.message}
          placeholder={t('cityPlaceholder')}
          className={`${errors.city ? 'border-notValidBorder bg-notValidBgc' : ''}`}
        />
      </Label>

      <Label
        labelText={t('deliveryMethod')}
        className="mb-4 flex flex-col uppercase"
      >
        <div className=" z-20">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative ">
              <Listbox.Button
                className="bg-white focus-visible:ring-white/75 focus-visible:ring-offset-orange-300 relative  w-full cursor-default border-[1px] border-blackColor px-4 py-3 text-left  text-[12px] font-medium leading-5 tracking-[.04em]  text-blackColor ring-transparent  focus:outline-none focus-visible:border-blackColor focus-visible:ring-2 focus-visible:ring-offset-2 "
                {...register('delivery_method')}
                onClick={toggleDropdown}
              >
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  {isOpen ? (
                    <ChevronDownIcon
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronUpIcon
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="bg-white  border-ac absolute z-10 mt-1 max-h-60 w-full overflow-auto  border-[1px]  bg-whiteColor text-base shadow-lg focus:outline-none sm:text-sm">
                  {people.map((person, personIndex) => (
                    <Listbox.Option
                      key={personIndex}
                      className={({ active }) =>
                        `relative cursor-default select-none px-4 py-2 capitalize ${
                          active
                            ? 'bg-activeColor text-whiteColor'
                            : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </Label>

      <Label labelText={t('postNumber')} className="flex flex-col uppercase">
        <Input
          {...register('department_number')}
          error={errors.department_number?.message}
          placeholder={t('postPlaceholder')}
          className={`${errors.department_number ? 'border-notValidBorder bg-notValidBgc' : ''}`}
        />
      </Label>
    </>
  );
};
