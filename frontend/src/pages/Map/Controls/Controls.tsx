import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Controls: React.FC<Props> = ({ children }: Props) => {
  return <>{children}</>;
};

export default Controls;
