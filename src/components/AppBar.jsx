import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line react/function-component-definition
export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarCenter}> Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  appbarCenter: {
    marginBottom: 8,
    fontSize: 22,
    color: '#ffffff',
    lineHeight: 32,
    fontWeight: 'bold',
  },
});
