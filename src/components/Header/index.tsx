import { PropsWithChildren } from "react";
import "./styles.css";

const Header = ({ children, version }: HeaderProps) => {
  return (
    <div className="header">
      {children}
      <span className="header__version">
        <strong>{version}</strong>
      </span>
    </div>
  );
};

export default Header;

interface HeaderProps extends PropsWithChildren {
  version: string;
}
