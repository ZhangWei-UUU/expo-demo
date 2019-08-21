import * as React from 'react';
import { View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const icon = (name) => <MaterialIcons key={name} name={name} size={24} />;

// A custom button that shows examples of different share sheet configurations
export default class ShowActionSheetButton extends React.PureComponent {
  static defaultProps = {
    withTitle: false,
    withMessage: false,
    withIcons: false,
    withSeparators: false,
    withCustomStyles: false,
    onSelection: null,
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _showActionSheet = () => {
    const {
      withTitle,
      withMessage,
      withIcons,
      withSeparators,
      withCustomStyles,
      onSelection,
      showActionSheetWithOptions,
    } = this.props;

    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['从手机相册选择'];
    const icons = withIcons
      ? [icon('delete'), icon('save'), icon('share'), icon('cancel')]
      : undefined;
    const title = withTitle ? 'Choose An Action' : undefined;
    const message = withMessage
      ? 'This library tries to mimic the native share sheets as close as possible.'
      : undefined;
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 3;
    const textStyle = withCustomStyles
      ? {
        fontSize: 20,
        fontWeight: '500',
      }
      : undefined;
    const titleTextStyle = withCustomStyles
      ? {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700',
      }
      : undefined;
    const messageTextStyle = withCustomStyles
      ? {
        fontSize: 12,
        textAlign: 'right',
      }
      : undefined;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title,
        message,
        icons,
        // Android only
        tintIcons: true,
        // Android only; default is true
        showSeparators: withSeparators,
        // Affects Android only; default is false
        textStyle,
        // Android only
        titleTextStyle,
        // Android only
        messageTextStyle, // Android only
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        onSelection(buttonIndex);
      }
    );
  };

  render() {
    return (
      <View>
        <Entypo
          name="dots-three-horizontal"
          color="#fff"
          size={25}
          onPress={this._showActionSheet} />
      </View>
    );
  }
}