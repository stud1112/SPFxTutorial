import * as React from 'react';
import styles from './ReactFormik.module.scss';
import { IReactFormikProps } from './IReactFormikProps';
import { IReactFormikState } from './IReactFormikState';
import { SPService } from '../shared/service/SPService';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, } from 'office-ui-fabric-react/lib/Stack';
import { Formik, FormikProps } from 'formik';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as yup from 'yup';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { DatePicker, Dropdown, mergeStyleSets, PrimaryButton, IIconProps } from 'office-ui-fabric-react';
import { sp } from '@pnp/sp';
import { Dialog } from '@microsoft/sp-dialog';
import { escape } from '@microsoft/sp-lodash-subset';

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

export default class ReactFormik extends React.Component<IReactFormikProps, IReactFormikState> {
  public render(): React.ReactElement<IReactFormikProps> {
    return (
      <div>KOKO!</div>
    );
  }
}
