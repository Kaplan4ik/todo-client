import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { FC, ReactElement } from 'react';

const wrapper: FC = ({ children }: any) => {
  return children;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper, ...options });

export {
  act,
  fireEvent,
  renderHook,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
export { customRender as render };
