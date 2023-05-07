import { PictogramProps } from "./pictogram.types";
import * as Styled from "./pictogram.styles";

export const Pictogram = ({ children, ...attributes }: PictogramProps) => {
  return <Styled.SVG {...attributes}>{children}</Styled.SVG>;
};
