import { ApplyBionicText } from "../../utils/bionic.utils";
import { useBionic } from "../../store/useBionic";
import { IBionicTextProps } from "./bionic-text.interface";

export const BionicText = ({
  text,
  as: Component = "span",
  style,
  className,
  forceBionicMode = false,
}: IBionicTextProps) => {
  const { bionicMode } = useBionic();
  const isBionicModeEnabled = forceBionicMode || bionicMode;
  return (
    <Component style={style} className={className}>
      {isBionicModeEnabled ? ApplyBionicText(text) : text}
    </Component>
  );
};
