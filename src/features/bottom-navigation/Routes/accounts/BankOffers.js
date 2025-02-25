import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const BankOffers = () => {
    return (
        <View style={styles.container}>
            <Text variant='labelMedium'>JUST FOR YOU</Text>
            <Swiper
                style={styles.wrapper}
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                autoplay
            >
                <Card style={styles.slide}>
                    <Text>
                        Get instant loan on your LLOYDS Bank credit card with zero
                        documentation.
                    </Text>
                    <Button mode='contained' style={styles.action}>Get Now</Button>
                </Card>
                <Card style={styles.slide}>
                    <Text>
                        Don't miss the 24*7 support for the Car Loan offer upto € 30000.
                    </Text>
                    <Button mode='contained' style={styles.action}>Get Now</Button>
                </Card>
                <Card style={styles.slide}>
                    <Text>
                        Your opinion matters! Rate your experience and help us to improve.
                    </Text>
                    <Button mode='contained' style={styles.action}>Rate Us</Button>
                </Card>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        flex: 1,
    },
    wrapper: {
        marginTop: 16,
    },
    slide: {
        padding: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    pagination: {
        bottom: -10,
    },
    dot: {
        backgroundColor: '#ccdcd8',
    },
    activeDot: {
        backgroundColor: '#006a4d',
    },
    action: {
        width: 125,
        marginTop: 16,
        marginBottom: 16,
    }
});

export default BankOffers;
