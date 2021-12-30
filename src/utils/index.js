import { format, fromat } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年m月d日');
}
