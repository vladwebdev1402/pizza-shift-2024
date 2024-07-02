import { Container, NavLink } from '@/components/atoms';
import { ROUTER_PATHS } from '@/constants';
import TimeSVG from '@/assets/decorative/time.svg?react';
import ProfileSVG from '@/assets/decorative/profile.svg?react';

const MainPage = () => {
  return (
    <Container>
      <NavLink type="footer" to={ROUTER_PATHS.main} icon={<TimeSVG />}>
        Главная
      </NavLink>
      <NavLink type="footer" to={'/adsads'} icon={<ProfileSVG />}>
        Профиль
      </NavLink>
    </Container>
  );
};

export { MainPage };
