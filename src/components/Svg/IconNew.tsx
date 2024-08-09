import { IconSvgProps } from "./types";
import { useSvgIconProps } from "./useSvgIconProps";

const IconNew = (props: IconSvgProps) => {
  const svgIconProps = useSvgIconProps(props);

  return (
    <svg {...svgIconProps} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default IconNew;
