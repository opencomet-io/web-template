import { FC, ReactNode } from 'react';

import * as S from './Layout.styles';

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Layout;
