const pkg = require('../package.json');
const year = new Date().getFullYear();

const banner = `/*!
 * Green UI ${pkg.version}
 *
 * @link ${pkg.homepage}
 * @copyright (c) 2019-${year} wes hatch
 * @license ${pkg.license} https://github.com/apathetic/green-ui/blob/master/LICENSE
 */
`;

module.exports = banner;