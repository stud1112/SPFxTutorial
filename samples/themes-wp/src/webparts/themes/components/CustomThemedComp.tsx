import * as React from 'react';
import { useContext } from 'react';
// import { ThemeProvider } from '@fluentui/react';
import { PartialTheme, Theme, ThemeProvider } from '@fluentui/react-theme-provider';
import { DefaultButton, PrimaryButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { createTheme, loadTheme, ITextStyles, mergeStyles} from 'office-ui-fabric-react';
import AppContext from '../common/AppContext';

/*
loadTheme({
  palette: {
    "themePrimary": "#1b9e6a",
    "themeLighterAlt": "#f3fbf8",
    "themeLighter": "#d0efe3",
    "themeLight": "#aae2cb",
    "themeTertiary": "#63c59e",
    "themeSecondary": "#2eaa78",
    "themeDarkAlt": "#188e5f",
    "themeDark": "#147850",
    "themeDarker": "#0f593b",
    "neutralLighterAlt": "#f8f8f8",
    "neutralLighter": "#f4f4f4",
    "neutralLight": "#eaeaea",
    "neutralQuaternaryAlt": "#dadada",
    "neutralQuaternary": "#d0d0d0",
    "neutralTertiaryAlt": "#c8c8c8",
    "neutralTertiary": "#d2c4b7",
    "neutralSecondary": "#a58f7a",
    "neutralPrimaryAlt": "#7b634c",
    "neutralPrimary": "#69523c",
    "neutralDark": "#4f3e2d",
    "black": "#3b2e21",
    "white": "#ffffff"
  }
});

const myTheme = createTheme({
  palette: {
    themePrimary: '#1b9e6a',
    themeLighterAlt: '#010604',
    themeLighter: '#041911',
    themeLight: '#082f20',
    themeTertiary: '#105f3f',
    themeSecondary: '#188b5d',
    themeDarkAlt: '#2aa876',
    themeDark: '#43b588',
    themeDarker: '#6bc9a3',
    neutralLighterAlt: '#ffffff',
    neutralLighter: '#ffffff',
    neutralLight: '#ffffff',
    neutralQuaternaryAlt: '#ffffff',
    neutralQuaternary: '#ffffff',
    neutralTertiaryAlt: '#ffffff',
    neutralTertiary: '#1f1912',
    neutralSecondary: '#3f3124',
    neutralPrimaryAlt: '#5c4834',
    neutralPrimary: '#69523c',
    neutralDark: '#8d765f',
    black: '#ab9682',
    white: '#ffffff',
  }});

console.log(myTheme);
*/

const CustomThemedComp: React.FC<{}> = () => {
    // console.log(myTheme);
    const { themeVariant } = useContext(AppContext);
    return (
      <ThemeProvider theme={themeVariant}>
        <div style={{
            padding: "10px 10px 10px 0"
        }}>
          <PrimaryButton text="Fabric UI Primary Button"/>
        </div>
      </ThemeProvider>
    );
};
  
export default CustomThemedComp;