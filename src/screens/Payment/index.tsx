import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CreditCard } from '../../components/CreditCard';

export function Payment() {
  return (
    <View style={styles.container}>
      <CreditCard />
    </View >
  );
}