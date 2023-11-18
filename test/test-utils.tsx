/* eslint-disable import/export */
import { type FC, type ReactNode } from 'react';
import {
  render,
  type RenderResult,
  type RenderOptions,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
