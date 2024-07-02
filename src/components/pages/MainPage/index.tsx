import { Tab, TabContainer } from '@/components/atoms';

const MainPage = () => {
  return (
    <TabContainer>
      <Tab isFullWidth onClick={() => {}}>
        Большая
      </Tab>
      <Tab isFullWidth onClick={() => {}}>
        Средняя
      </Tab>
      <Tab isFullWidth onClick={() => {}}>
        Маленькая
      </Tab>
    </TabContainer>
  );
};

export { MainPage };
