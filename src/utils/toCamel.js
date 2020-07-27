// eslint-disable-next-line import/prefer-default-export
export const toCamel = s => s.replace(/([-_][a-z])/ig, $1 => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));
