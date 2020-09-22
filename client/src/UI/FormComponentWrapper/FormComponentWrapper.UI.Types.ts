import { CssBaselineProps, GridContentAlignment, GridItemsAlignment, GridJustification, GridSpacing } from "@material-ui/core";
import { CSSProperties } from "react";

export default interface FormComponentWrapperTypes {
    justify?: GridJustification
    alignItems?: GridItemsAlignment
    alignContent?: GridContentAlignment
    spacing?: GridSpacing
}