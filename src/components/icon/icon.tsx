import { IconProps } from "./icon.types";
import * as Styled from "./icon.styles";

export const Icon = ({ children, ...attributes }: IconProps) => {
  const defaultSize = 48;
  const defaultViewBox = "0 96 960 960";

  return (
    <Styled.SVG
      xmlns="http://www.w3.org/2000/svg"
      width={defaultSize}
      height={defaultSize}
      viewBox={defaultViewBox}
      {...attributes}
    >
      {children}
    </Styled.SVG>
  );
};
