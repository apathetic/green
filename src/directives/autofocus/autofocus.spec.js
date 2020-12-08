import { mount } from '@vue/test-utils';
import { autofocus } from '.';

describe('v-autofocus directive', () => {
  it('Should focus username input element', () => {
    const wrapper = mount({
      template: `
      <form>
        <label htmlFor="country">Country</label>
        <select name="country" id="country"></select>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" v-autofocus />
      </form>
      `,
      directives: { autofocus },
    });

    const el = wrapper.find('#username').element;

    expect(el).toHaveFocus();
  });

  it('Should focus last input, inputUser, element.', () => {
    const wrapper = mount({
      template: `
      <form>
        <label htmlFor="inputName"></label>
        <input type="text" name="inputName" id="inputName" v-autofocus />
        <label htmlFor="inputUser"></label>
        <input type="text" name="inputUser" id="inputUser" v-autofocus />
      </form>
      `,
      directives: { autofocus },
    });

    const nameEl = wrapper.find('#inputName').element;
    const userEl = wrapper.find('#inputUser').element;

    expect(nameEl).not.toHaveFocus();
    expect(userEl).toHaveFocus();
  });

  it('Should focus first instance input, username, element.', () => {
    const wrapper = mount({
      template: `
      <form id="form" v-autofocus>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" />
      </form>
      `,
      directives: { autofocus },
    });

    const username = wrapper.find('#username').element;
    const email = wrapper.find('#email').element;

    expect(username).toHaveFocus();
    expect(email).not.toHaveFocus();
  });

  it('Should focus texarea element', () => {
    const wrapper = mount({
      template: `
      <form>
        <label htmlFor="statusDescription">Description</label>
        <textarea name="statusDescription" id="statusDescription" cols="30" rows="10" v-autofocus></textarea>
      </form>
      `,
      directives: { autofocus },
    });

    const el = wrapper.find('#statusDescription').element;

    expect(el).toHaveFocus();
  });

  it('Should not focus any element', () => {
    const wrapper = mount({
      template: `
      <form>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" v-autofocus>
          <option value="male">Male</option>
          <option value="female">female</option>
        </select>
        <button id="submit" v-autofocus>Submit</button>
      </form>
      `,
      directives: { autofocus },
    });

    const genderEl = wrapper.find('#gender').element;
    const submit = wrapper.find('#submit').element;

    expect(genderEl).not.toHaveFocus();
    expect(submit).not.toHaveFocus();
  });
});
