/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 20,
        marginBottom: 10,
    },
    tabsContainer: {
        paddingLeft: 10,
        paddingRight: 20,
    },
    tabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 10,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between',
    },
    tabText: {
        fontSize: 13,
        color: '#FFF',
    },
});

export default styles;