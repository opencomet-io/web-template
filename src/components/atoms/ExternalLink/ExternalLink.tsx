import { FC, ReactNode } from 'react';

import * as S from './ExternalLink.styles';

export interface Props {
  children: ReactNode;
  destination: string;
  newTab?: boolean;
}

const ExternalLink: FC<Props> = ({ children, destination, newTab = true, ...props }) => {
  return (
    <S.Anchor
      href={destination}
      target={newTab ? '_blank' : '_self'}
      referrerPolicy="same-origin"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </S.Anchor>
  );
};

export default ExternalLink;
