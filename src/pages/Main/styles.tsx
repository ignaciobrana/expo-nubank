import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B10AE',
        paddingTop: getStatusBarHeight(),
        justifyContent: 'center',
    },
    content: { 
        flex: 1,
        maxHeight: 400,
        zIndex: 5,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 4,
        marginTop: 0,
        marginHorizontal: 20,
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    cardContent: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    cardFooter: {
        padding: 30,
        backgroundColor: '#eee',
        borderRadius: 4,
    },
    title: {
        fontSize: 13,
        color: '#999',
    },
    description: {
        fontSize:32,
        marginTop: 3,
        color: '#333',
    },
    annotation: {
        fontSize: 12,
        color: '#333',
    },
});

export default styles;