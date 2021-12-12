import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line react/function-component-definition
export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
				<Text style={styles.memoListTitle}>お買い物リスト</Text>
				<Text style={styles.memoListItemDate}>2020年12/24 10:00</Text>
			</View>
			<View>
					<Feather name ='x' size={16} color="#b0b0b0"/>
					</View>
			</View>
			<View style={styles.memoListItem}>
					<View>
					<Text style={styles.memoListTitle}>お買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2020年12/24 10:00</Text>
					</View>
					<View>
					<Feather name ='x' size={16} color="#b0b0b0"/>
					</View>
			</View>
			<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListTitle}>お買い物リスト</Text>
						<Text style={styles.memoListItemDate}>2020年12/24 10:00</Text>
					</View>
					<View>
					<Feather name ='x' size={16} color="#b0b0b0"/>
					</View>
			</View>
  </View>
    )
};

const styles = StyleSheet.create({
	memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
	},
});
