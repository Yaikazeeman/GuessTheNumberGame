import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <TitleText>The Game is over!</TitleText>
        <View style={styles.imageContainer}>
            <Image fadeDuration={800} source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={style.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess <Text style={styles.highlight} >{props.userNumber}</Text></BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: 'primary',
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        width: '80%',
        marginVertical: 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }

});

export default GameOverScreen;