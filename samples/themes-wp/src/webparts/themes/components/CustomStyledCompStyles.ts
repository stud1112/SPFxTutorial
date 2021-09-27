import { ITextFieldStyleProps, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';

export const buttonStyles = {
  root: { backgroundColor: 'maroon' },
  rootHovered: { background: 'green' }
};

export const textFieldStyles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
  ...(props.focused && {
    field: {
      backgroundColor: '#c7e0f4'
    }
  })
});