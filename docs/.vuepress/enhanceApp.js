import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
//import Dropdown from '@/components/Dropdown';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Select from '@/components/Select';
import './styles/index.scss';


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('g-button', Button);
  Vue.component('g-checkbox', Checkbox);
  //Vue.component('g-dropdown', Dropdown);
  Vue.component('g-icon', Icon);
  Vue.component('g-input', Input);
  Vue.component('g-select', Select);
}
