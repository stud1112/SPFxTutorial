import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface IThemesProps {
  description: string;
  themeVariant?: IReadonlyTheme | undefined;
}
