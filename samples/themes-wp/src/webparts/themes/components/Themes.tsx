import * as React from 'react';
import styles from './Themes.module.scss';
import { IThemesProps } from './IThemesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import AppContext from '../common/AppContext';
import MyButton from './MyButton';
import MySecondButton from './MySecondButton';
import CustomThemedComp from './CustomThemedComp';
import CustomStyledComp from './CustomStyledComp';
import { DefaultButton } from '@fluentui/react/lib/Button'; 

const Themes: React.FC<IThemesProps> = (props) => {
  const { semanticColors }: IReadonlyTheme = props.themeVariant;
  console.log(props.themeVariant);
  return (
    <AppContext.Provider value = {{themeVariant: props.themeVariant}}>
      <div style={{
                  backgroundColor: semanticColors.bodyBackground,                 
                  color: semanticColors.bodyText,
                  border: "1px solid black",
                  padding: "10px"
                  }}>
        <span className={ styles.title }>Welcome to SharePoint!</span>
        <p className={ styles.subTitle }>This web part is theme variant aware.</p>
        <MyButton />
        <MySecondButton />
        <CustomThemedComp />
        <CustomStyledComp />
        <DefaultButton>I am a button.</DefaultButton>
      </div>
    </AppContext.Provider>
  );
};

export default Themes;

/* Class implementation
export default class Themes extends React.Component<IThemesProps, {}> {
  public render(): React.ReactElement<IThemesProps> {
    const { semanticColors }: IReadonlyTheme = this.props.themeVariant;
    console.log(semanticColors);
    return (
      <div style={{backgroundColor: semanticColors.bodyBackground, color: semanticColors.bodyText}}>
        <span className={ styles.title }>Welcome to SharePoint!</span>
        <p className={ styles.subTitle }>This web part is theme variant aware.</p>
      </div>
    );
    //return (
    //  <div className={ styles.themes }>
    //    <div className={ styles.container }>
    //      <div className={ styles.row } style={{backgroundColor: semanticColors.bodyBackground, color: semanticColors.bodyText}}>
    //        <div className={ styles.column }>
    //          <span className={ styles.title }>Welcome to SharePoint!</span>
    //          <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
    //          <p className={ styles.description }>{escape(this.props.description)}</p>
    //          <a href="https://aka.ms/spfx" className={ styles.button }>
    //            <span className={ styles.label }>Learn more</span>
    //          </a>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    );
  }
} */