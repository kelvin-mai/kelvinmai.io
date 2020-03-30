import * as prettier from 'prettier';

export const toJSON = (data: any) =>
  prettier.format(JSON.stringify(data), { parser: 'json' });

interface SortByDateOptions {
  dateProp: string;
  order?: 'asc' | 'desc';
}

export const sortByDate = (
  arr: any[],
  { dateProp, order = 'desc' }: SortByDateOptions
) => {
  const compareFn = {
    asc: (a: any, b: any): number =>
      Date.parse(a[dateProp]) - Date.parse(b[dateProp]),
    desc: (a: any, b: any): number =>
      Date.parse(b[dateProp]) - Date.parse(a[dateProp]),
  };
  return arr.sort(compareFn[order]);
};
