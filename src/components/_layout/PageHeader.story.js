import { storiesOf } from '@storybook/vue';
import PageHeader from '@/components/layout/PageHeader';

storiesOf('Layout/PageHeader', module)
  .add('basic', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title" description="Modernipsum dolor sit amet nouveau realisme divisionism." />
    `,
  }))
  .add('with actions', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title" description="Modernipsum dolor sit amet nouveau realisme divisionism.">
        <g-button slot="secondary-action" secondary>Cancel</g-button>
        <g-button slot="primary-action">Save</g-button>
      </PageHeader>
    `,
  }))
  .add('with actions & no description', () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Page title">
        <g-button slot="secondary-action" secondary>Cancel</g-button>
        <g-button slot="primary-action">Save</g-button>
      </PageHeader>
    `,
  }));
