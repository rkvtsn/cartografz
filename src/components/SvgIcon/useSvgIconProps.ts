import { IconSvgProps } from "./types";

export const useSvgIconProps = <T>(props: IconSvgProps<T>): IconSvgProps<T> => {
  const svgProps: IconSvgProps<T> = {
    width: "100%",
    preserveAspectRatio: "xMidYMid meet",
    ...props,
  };

  svgProps.className = `icon-svg${
    svgProps.className ? ` ${svgProps.className}` : ""
  }`;

  return svgProps;
};
