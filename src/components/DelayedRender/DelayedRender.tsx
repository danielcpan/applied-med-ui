import { useDelayedRender } from 'hooks';

interface IDelayedRenderProps {
  /** Delay in milliseconds */
  delay?: number;
}
/**
 * Delays the rendering of it's children. Useful for preventing
 * loading/spinner flashes aka better user experience.
 */
const DelayedRender: React.FC<IDelayedRenderProps> = ({ delay = 200, children }) => {
  return useDelayedRender(delay)(() => children);
};

export default DelayedRender;
