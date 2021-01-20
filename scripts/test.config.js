import Vue from 'vue';
import '@testing-library/jest-dom';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Icon from '@/components/Icon';
import InlineEdit from '@/components/InlineEdit';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import Textarea from '@/components/Textarea';

Vue.component('z-button', Button);
Vue.component('z-checkbox', Checkbox);
Vue.component('z-icon', Icon);
Vue.component('z-inline-edit', InlineEdit);
Vue.component('z-input', Input);
Vue.component('z-modal', Modal);
Vue.component('z-radio', Radio);
Vue.component('z-textarea', Textarea);

jest.mock('lodash/uniqueId', () => () => 'mock-id');
