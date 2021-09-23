import * as React from 'react';
import { useContext } from 'react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import AppContext from '../common/AppContext';
import useStyles from './MyButtonStyles';

const MyButton: React.FC<{}> = () => {
    /* Returns the serviceScope from the "global" AppContext, which is provided by 
       <AppContext.Provider> component above and is consumed using the useContext React Hook 
    */
    const { themeVariant } = useContext(AppContext);
    const { semanticColors }: IReadonlyTheme = themeVariant;
    const classes = useStyles(semanticColors);
    return (
    <div className={classes.MyButton}
    >
      Click me!
    </div>
    );
};
  
export default MyButton;