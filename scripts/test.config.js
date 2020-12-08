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

Vue.component('g-button', Button);
Vue.component('g-checkbox', Checkbox);
Vue.component('g-icon', Icon);
Vue.component('g-inline-edit', InlineEdit);
Vue.component('g-input', Input);
Vue.component('g-modal', Modal);
Vue.component('g-radio', Radio);
Vue.component('g-textarea', Textarea);

jest.mock('lodash/uniqueId', () => () => 'mock-id');
