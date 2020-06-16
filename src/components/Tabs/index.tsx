/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

interface TabsProps {
    translateY: Animated.Value;
}

function Tabs(props: TabsProps) {
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{
                        translateY: props.translateY.interpolate({
                            inputRange: [0, 380],
                            outputRange: [0, 30],
                            extrapolate: 'clamp',
                        }),
                    }],
                    opacity: props.translateY.interpolate({
                        inputRange: [0, 380],
                        outputRange: [1, 0.3],
                        extrapolate: 'clamp',
                    }),
                }
            ]}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}
            >
                <View style={styles.tabItem}>
                    <Ionicons name="ios-person" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="ios-chatbubbles" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="md-arrow-down" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="md-arrow-up" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="ios-lock" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Bloquear tarjeta</Text>
                </View>
            </ScrollView>
        </Animated.View>
    );
}

export default Tabs;