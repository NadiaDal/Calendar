import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {Navigation} from '../../types';

interface HeaderProps {
  formattedMonth: string;
  onPress: (navigation: Navigation) => void;
}

const Header: React.FC<HeaderProps> = ({formattedMonth, onPress}) => {
  const renderButton = (navigation: Navigation) => {
    return (
      <TouchableOpacity onPress={() => onPress(navigation)}>
        <Text>{navigation}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.header}>
      {renderButton(Navigation.prev)}
      <Text style={styles.text}>{formattedMonth}</Text>
      {renderButton(Navigation.next)}
    </View>
  );
};

export default Header;
