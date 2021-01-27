import './styles/index.scss';
import {
  Badge,
  Button,
  Checkbox,
  Chip,
  Collapse,
  Dropdown,
  EmptyState,
  Field,
  // Filters,
  Icon,
  InlineEdit,
  Input,
  ListView,
  Loading,
  Modal,
  Paginate,
  Radio,
  Select,
  SelectStatus,
  Textarea,
  // TextEditor,
} from '../../src/components'; // '@/components/';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('z-badge', Badge);
  Vue.component('z-button', Button);
  Vue.component('z-checkbox', Checkbox);
  Vue.component('z-chip', Chip);
  Vue.component('z-collapse', Collapse);
  Vue.component('z-dropdown', Dropdown);
  Vue.component('z-emptystate', EmptyState);
  Vue.component('z-field', Field);
  Vue.component('z-icon', Icon);
  Vue.component('z-inlineedit', InlineEdit);
  Vue.component('z-input', Input);
  Vue.component('z-listview', ListView);
  Vue.component('z-loading', Loading);
  Vue.component('z-modal', Modal);
  Vue.component('z-paginate', Paginate);
  Vue.component('z-radio', Radio);
  Vue.component('z-select', Select);
  Vue.component('z-selectstatus', SelectStatus);
  Vue.component('z-textarea', Textarea);
  // Vue.component('z-texteditor', TextEditor);
}
