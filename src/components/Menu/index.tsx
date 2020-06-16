/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

interface MenuProps {
    translateY: Animated.Value;
}

export default function Menu(props: MenuProps) {
    return (
        <Animated.ScrollView
            style={[
                styles.container,
                {
                    opacity: props.translateY.interpolate({
                        inputRange: [0, 150],
                        outputRange: [0, 1],
                    }),
                }
            ]}
        >
            <View style={styles.code}>
                <QRCode
                    value="https://github.com"
                    size={80}
                    color="#8B10AE"
                    backgroundColor="#FFF"
                />
            </View>

            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Ionicons name="md-help" size={20} color="#FFF" />
                    <Text style={styles.navText}>Ayuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Ionicons name="ios-person" size={20} color="#FFF" />
                    <Text style={styles.navText}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <MaterialIcons name="credit-card" size={20} color="#FFF" />
                    <Text style={styles.navText}>Configurar tarjeta</Text>
                </View>
                <View style={styles.navItem}>
                    <MaterialIcons name="smartphone" size={20} color="#FFF" />
                    <Text style={styles.navText}>Configuraciones</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.signoutButton}
                onPress={() => { }}
            >
                <Text style={styles.signOutButtonText}>Salir</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );
}