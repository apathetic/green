import * as components from './components';
import * as directives from './directives';
import { install } from './framework';

export default (Vue, args) => {
  install(Vue, {
    components,
    directives,
    ...args,
  });
};

export const {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  EmptyState,
  Icon,
  Input,
  Loading,
  Modal,
  Paginate,
  Radio,
  SelectStatus,
  Textarea,
} = components;

export const {
  sticky,
} = directives;
