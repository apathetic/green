/**
 * Replaces params in a translation message with respective values
 * @param {string} path Translation path (foo.bar.baz)
 * @param {object} params Any params used in the translation message
 * @returns {string}
 */
export default function format(path, params) {
  const pathParams = path.match(/({)([\w]+)(})/g) || [];
  let message = path;

  pathParams.forEach((param) => {
    const prop = param.replace(/[{}]/g, '');

    message = message.replace(param, params[prop] || '');
  });

  return message;
}
