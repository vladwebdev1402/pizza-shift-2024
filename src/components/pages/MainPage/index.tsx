import { Button, Modal } from '@/components/atoms';
import { useState } from 'react';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ height: '1000px' }}>
      <Button onClick={() => setIsOpen(true)}>открыть модальное окно</Button>
      <Modal
        isOpen={isOpen}
        isMobileFullScreen
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div style={{ height: '1000px' }}></div>
      </Modal>
    </div>
  );
};

export { MainPage };
