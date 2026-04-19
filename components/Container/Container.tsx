import styled from './Container.module.css';
import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className={styled.container}>{children}</div>;
}
