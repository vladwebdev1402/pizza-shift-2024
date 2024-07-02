import { NavLink } from '@/components/atoms';
import { ROUTER_PATHS } from '@/constants';
import TimeSVG from '@/assets/decorative/time.svg?react';
import ProfileSVG from '@/assets/decorative/profile.svg?react';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <NavLink type="footer" to={ROUTER_PATHS.main} icon={<TimeSVG />}>
        Главная
      </NavLink>
      <NavLink type="footer" to={'/adsads'} icon={<ProfileSVG />}>
        Профиль
      </NavLink>
    </div>
  );
};

export { MainPage };
