import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 300 40" {...props}>
      <image
        width="300"
        height="40"
        href={isDark ? "/images/egg/LogoTextNewDark.svg" : "/images/egg/LogoTextNewWhite.svg"}
      />
    </Svg>
  );
};

export default Logo;
