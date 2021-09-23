import { createUseStyles } from 'react-jss';
import { ISemanticColors } from '@microsoft/office-ui-fabric-react-bundle';

/***********************************************************************************************
    Component Styling using Dynamic React-JSS. In a nutshell:
    (*) Define a class for the rules you want to apply in an react component (here 'MyButton')
    (*) Every css property with a static value of string type OR including a measuring unit (eg. px) is written as: width: "100px"
    (*) Every property with a static value of number tyoe is written as: fontWeight: 600
    (*) Dynamic values come from the input parameter(s) of useStyles (here semanticColors)

    For more information go to:
    (1) https://cssinjs.org/react-jss  [React JSS]
    (2) https://github.com/cssinjs/jss/blob/master/docs/react-jss-ts.md [Usage with TypeScript]
    (3) For a full list of the semantic colors go here: https://tahoeninjas.blog/2020/07/28/adding-support-for-theme-variants-in-spfx-web-parts/

 ************************************************************************************************/

const useStyles = createUseStyles({
    MyButton: (semanticColors: Partial<ISemanticColors>) => ({
      width: "100px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: 600,
      padding: "5px",
      backgroundColor: semanticColors.primaryButtonBackground,
      color: semanticColors.primaryButtonText,
      "&:hover": {
          backgroundColor: semanticColors.primaryButtonBackgroundHovered,
          color: semanticColors.primaryButtonTextHovered
        }
      })
});

export default useStyles;