import { Input } from '@/components/atoms';

const MainPage = () => {
  return (
    <div>
      <Input value="asdasads" label="label" />
      <Input value="asdasads" label="label" disabled />
      <Input placeholder="asdasads" label="label" />
      <Input placeholder="asdasads" label="label" error="asdad" />
    </div>
  );
};

export { MainPage };
