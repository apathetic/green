const pkg = require('../package.json');
const year = new Date().getFullYear();

const banner = `/*!
 * ZigZag UI ${pkg.version}
 *
 * @link ${pkg.homepage}
 * @copyright (c) 2019-${year} wes hatch
 * @license ${pkg.license} https://github.com/apathetic/zigzag-ui/blob/master/LICENSE
 */
`;

module.exports = banner;