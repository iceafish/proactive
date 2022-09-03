import { FC, ReactNode } from 'react';

export interface IIconButtonProps {
  icon?: ReactNode;
  onClick?: () => void;
}

export const IconButton: FC<IIconButtonProps> = ({ icon, onClick }) => (
  <div className="nav-button" onClick={onClick}>
    {icon}
  </div>
);
