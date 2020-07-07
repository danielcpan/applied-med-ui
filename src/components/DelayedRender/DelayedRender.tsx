import { useDelayedRender } from 'hooks';

interface IDelayedRenderProps {
  delay?: number;
}

const DelayedRender: React.FC<IDelayedRenderProps> = ({ delay = 200, children }) => {
  return useDelayedRender(delay)(() => children);
};

export default DelayedRender;
