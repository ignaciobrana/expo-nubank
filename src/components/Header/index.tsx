/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import logo from '../../assets/Nubank_Logo.png';

import styles from './styles';

function Header() {
    return (
        <View style={styles.container}> 
            <View style={styles.top}>
                <Image source={logo} />
                <Text style={styles.title}>Ignacio</Text>
            </View>
            <Ionicons name="ios-arrow-down" size={24} color="#FFF" />
        </View>
    );
}

export default Header;