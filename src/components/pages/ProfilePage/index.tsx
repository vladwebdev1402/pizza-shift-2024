import { Button } from '@/components/atoms';
import { ProfileForm } from '@/components/moleculus';
import { User } from '@/types';

import style from './style.module.scss';

const ProfilePage = () => {
  const onProfileSbumit = (data: User) => {
    console.log(data);
  };

  return (
    <div className="container">
      <ProfileForm
        onSubmit={onProfileSbumit}
        buttons={<Button className={style.update}>Обновить данные</Button>}
        // isDisabledPhone
      />
    </div>
  );
};

export { ProfilePage };
