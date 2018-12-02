import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from "../src/Fonts";

class Question extends Component {
    render() {
        return (
            <View style={styles.questionStyle}>
                <Text style={styles.questionsFontStyle}>{this.props.question}</Text>
            </View>
        );
    }
}

export default Question;

const styles = StyleSheet.create({
    questionStyle: {
        flex: 1,
        backgroundColor: "black",
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid"
    },

    questionsFontStyle: {
        fontFamily: Fonts.BMDOHYEON,
        color: "white",
        fontSize: 45
    },
});