import * as React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import UpdateHeadScreen from './UpdateHeadScreen';

class UpdateHeadWrapperScreen extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <UpdateHeadScareen />
      </ActionSheetProvider>
    );
  }
}

export default UpdateHeadWrapperScreen;