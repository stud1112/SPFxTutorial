import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton  } from 'office-ui-fabric-react/lib/Button';
import { buttonStyles, textFieldStyles } from './CustomStyledCompStyles';

const CustomStyledComp: React.FC<{}> = () => {
    return (
        <Stack>
          <Stack.Item>
            <TextField placeholder="What needs to be done?" styles={textFieldStyles} />
          </Stack.Item>
          <PrimaryButton styles={buttonStyles}>Add</PrimaryButton>
        </Stack>
      );
}

export default CustomStyledComp;