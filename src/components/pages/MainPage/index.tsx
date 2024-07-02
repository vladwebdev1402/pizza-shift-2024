import { Button } from '@/components/atoms';

import ProfileSVG from '@/assets/decorative/profile.svg?react';

const MainPage = () => {
  return (
    <>
      <Button icon={<ProfileSVG />} iconPosition="start" fullWidth>
        Тест кнопка иконка
      </Button>
      <Button
        icon={<ProfileSVG />}
        iconPosition="center"
        variant="outlined"
        fullWidth
      >
        Тест кнопка иконка
      </Button>
      <Button loading fullWidth>
        Загрузка
      </Button>
    </>
  );
};

export { MainPage };
