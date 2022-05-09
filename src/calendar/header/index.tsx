import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';

interface HeaderProps {
  formattedMonth: string;
}

const Header: React.FC<HeaderProps> = ({formattedMonth}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Prev</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{formattedMonth}</Text>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
