import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg version="1.1" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512" {...props}>
          		<path d="M223.07,470.77c-0.55-0.52-1.03-1.01-1.64-1.64c-14.4-14.75-67.61-62.89-147.88-62.89h-30V99.52H0V474.1h226.55
			L223.07,470.77z"/>
          <path d="M273.78,99.52l0.22,0.25V474.1h238V99.52H273.78z M463.97,387.5H328.45v-30h135.52V387.5z M463.97,329.6H328.45v-30
			h135.52V329.6z M463.97,271.7H328.45v-30h135.52V271.7z M463.97,213.8H328.45v-30h135.52V213.8z"/>
          <path d="M73.55,37.9v338.34c104,0,166.46,69.22,170.27,72.86H244V114.52v-3.59C244,110.93,180.9,37.9,73.55,37.9z"/>
          </Svg>

  );
};

export default Icon;
