import { storiesOf } from '@storybook/vue';
import { PageContent, Content } from '@/components/layout';

const TextBlock = {
  template: '<span>Modernipsum dolor sit amet color field painting cobra art deco, social realism photorealism orphism neoclassicism. Synthetism perspectivism les nabis academic carolingian new objectivity outsider art secularism academic tachism, eclecticism socialist realism secularism tachisme international gothic neue slowenische kunst kinetic art sound art. Russian futurism precisionism gothic art neo-impressionism barbizon school divisionism naturalism lettrism, baroque mail art street art international gothic socialist realism. Young british artists baroque socialist realism merovingian conceptual art, new objectivity cobra tachisme carolingian, multiculturalism superflat secularism. Renaissance expressionism mail art postmodern art lowbrow social realism, synthetism international gothic new media art gründerzeit hyperrealism outsider art, maximalism purism neo-geo sound art.</span>',
};

storiesOf('Layout/PageContent', module)
  .add('basic', () => ({
    components: { PageContent, Content, TextBlock },
    template: `
      <PageContent>
        <TextBlock />
      </PageContent>
    `,
  }))
  .add('multiple content sections', () => ({
    components: { PageContent, Content, TextBlock },
    template: `
      <PageContent>
        <Content title="Section title">
          <TextBlock />
        </Content>
        <Content>
          <TextBlock />
        </Content>
        <Content title="Section title">
          <TextBlock />
        </Content>
      </PageContent>
    `,
  }));
