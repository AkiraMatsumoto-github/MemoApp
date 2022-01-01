import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import { translateErrors } from '../utils';

// eslint-disable-next-line react/function-component-definition
export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => {
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
        />
      </View>
      <CircleButton
        name="check"
        // eslint-disable-next-line react/jsx-no-bind
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
