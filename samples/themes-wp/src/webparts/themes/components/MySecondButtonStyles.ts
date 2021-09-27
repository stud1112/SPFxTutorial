import { mergeStyles, mergeStyleSets } from 'office-ui-fabric-react';
import { ISemanticColors } from '@microsoft/office-ui-fabric-react-bundle';

interface IMySecondButtonClassNames {
  MyButtonStyling: string;
}

const useMergeStyles = (semanticColors: Partial<ISemanticColors>):IMySecondButtonClassNames => {
      return mergeStyleSets({
        MyButtonStyling: {
            width: "100px",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: 600,
            padding: "5px",
            margin: "3px 3px 3px",
            backgroundColor: semanticColors.accentButtonBackground,
            color: semanticColors.primaryButtonText,
            "&:hover": {
                backgroundColor: semanticColors.primaryButtonBackgroundHovered,
                color: semanticColors.primaryButtonTextHovered
            }
          }
    });
};

export default useMergeStyles;