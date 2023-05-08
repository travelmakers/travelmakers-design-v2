import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./Toggle";
import useStyles from "./Toggle.style";

type ToggleStylesNames = ClassNames<typeof useStyles>;

interface SharedToggleProps
  extends Props,
    TmComponentProps<ToggleStylesNames> {}

export type ToggleProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedToggleProps>;

export type ToggleComponent = <C extends React.ElementType = "input">(
  props: ToggleProps<C>
) => React.ReactElement;
