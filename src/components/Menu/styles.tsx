import { StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginHorizontal: 30,
    },
    code: {
        backgroundColor: '#FFF',
        padding: 10,
        alignSelf: 'center',
    },
    nav: {
        width: '100%',
        marginTop: 30,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255, 255, 255, 0.8)',
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    },
    navText: {
        fontSize: 15,
        color: '#FFF',
        marginLeft: 20,
    },
    signoutButton: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 12,
        width: '100%',
    },
    signOutButtonText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default styles;