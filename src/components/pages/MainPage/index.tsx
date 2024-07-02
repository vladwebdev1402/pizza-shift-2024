import { Typography } from '@/components/atoms';
import { AuthForm } from '@/components/moleculus';

const MainPage = () => {
  return (
    <div>
      <AuthForm
        title={
          <Typography variant="h2" tag="h2">
            Авторизация
          </Typography>
        }
      />
    </div>
  );
};

export { MainPage };
