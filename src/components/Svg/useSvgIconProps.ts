import { IconSvgProps } from "./types";

export const useSvgIconProps = (props: IconSvgProps): IconSvgProps => {
  const svgProps: IconSvgProps = {
    width: 23,
    height: 23,
    ...props,
  };
  svgProps.viewBox = props.viewBox
    ? props.viewBox
    : `0 0 ${svgProps.height} ${svgProps.width}`;

  svgProps.className = `icon-svg ${svgProps.className}`;

  return svgProps;
};
