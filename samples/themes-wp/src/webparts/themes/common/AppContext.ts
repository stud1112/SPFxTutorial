import { ServiceScope } from '@microsoft/sp-core-library';
import { createContext } from 'react';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface AppContextProps {
    themeVariant: IReadonlyTheme | undefined;
}

// AppContext is created and has an initial value set
const AppContext = createContext<AppContextProps>(undefined);

export default AppContext;