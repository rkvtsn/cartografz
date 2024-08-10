import { PropsWithChildren } from "react";

const IconWrapper = ({ children, width, height }: IconWrapperProps) => {
  return <div style={{ width, height }}>{children}</div>;
};

export default IconWrapper;

interface IconWrapperProps extends PropsWithChildren {
  width?: string | number;
  height?: string | number;
}
