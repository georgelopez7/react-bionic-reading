import { ApplyBionicText } from "../../utils/bionic.utils";
import { useBionic } from "../../store/useBionic";
import { IBionicTextProps } from "./bionic-text.interface";

export const BionicText = ({
  text,
  as: Component = "span",
  style,
  className,
}: IBionicTextProps) => {
  const { isBionic } = useBionic();
  return (
    <Component style={style} className={className}>
      {isBionic ? ApplyBionicText(text) : text}
    </Component>
  );
};
