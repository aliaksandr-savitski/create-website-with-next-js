import { toCamel } from './toCamel';

const serialize = value => JSON.parse(JSON.stringify(value));

// eslint-disable-next-line import/prefer-default-export
export const normalizeContentItem = (item) => {
  const normalizedObject = {};

  Object.entries(serialize(item))
    .forEach(([key, value]) => { normalizedObject[toCamel(key)] = value; });

  return normalizedObject;
};
