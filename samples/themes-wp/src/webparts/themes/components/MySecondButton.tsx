import * as React from 'react';
import { useContext } from 'react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import AppContext from '../common/AppContext';
import useMergeStyles from './MySecondButtonStyles';

const MySecondButton: React.FC<{}> = () => {
    /* Returns the serviceScope from the "global" AppContext, which is provided by 
       <AppContext.Provider> component above and is consumed using the useContext React Hook 
    */
    const { themeVariant } = useContext(AppContext);
    const { semanticColors }: IReadonlyTheme = themeVariant;
    const { MyButtonStyling } = useMergeStyles(semanticColors);    
    return (
    <div className={MyButtonStyling}
    >
      My Second Button
    </div>
    );
};
  
export default MySecondButton;