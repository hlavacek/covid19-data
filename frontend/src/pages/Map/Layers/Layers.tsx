import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Layers: React.FC<Props> = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layers;
