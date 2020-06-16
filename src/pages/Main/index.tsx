import React from 'react';
import { View, Text, SafeAreaView, Animated } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import styles from './styles';

const Main = () => {

    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChange(event: PanGestureHandlerStateChangeEvent) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            //Si acabo la animación
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 50) {
                opened = true;
            } else {
                translateY.setOffset(0);
                translateY.setValue(offset);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header />

            <View style={styles.content}>

                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <Animated.View
                        style={[
                            styles.card,
                            {
                                transform: [{
                                    translateY: translateY.interpolate({
                                        inputRange: [-350, 0, 380],
                                        outputRange: [-50, 0, 380],
                                        extrapolate: 'clamp',
                                    }),
                                }],
                            }
                        ]}
                    >
                        <View style={styles.cardHeader}>
                            <MaterialIcons name="attach-money" size={28} color="#666" />
                            <MaterialIcons name="visibility-off" size={28} color="#666" />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>Saldo disponible</Text>
                            <Text style={styles.description}>$255.947,65</Text>
                        </View>
                        <View style={styles.cardFooter}>
                            <Text style={styles.annotation}>
                                Transferencia de $20,00 recibida por Diego Anriquez hoy 18 hs.
                            </Text>
                        </View>
                    </Animated.View>
                </PanGestureHandler>

            </View>

            <Tabs translateY={translateY} />
        </SafeAreaView>
    );
}

export default Main;