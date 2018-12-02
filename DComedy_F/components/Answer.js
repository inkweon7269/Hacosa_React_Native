import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Fonts} from "../src/Fonts";

class Answer extends Component {

    state = {clicked: true};

    // 정답보기 클리시 clicked 값을 true -> false로 변경
    _checkedAnswer = () => this.setState({clicked: !this.state.clicked});

    render() {
        const {clicked} = this.state;

        return (
            <View style={styles.answerStyle}>
                <TouchableOpacity onPress={this._checkedAnswer}>
                    {
                        //  삼항 연산자를 사용해서 clicked 상태에 따라 결과값을 다르게 출력
                        clicked
                            ? <Text style={styles.answerFontStyle}>정답보기</Text>
                            : <Text style={styles.answerFontStyle}>{this.props.answer}</Text>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

export default Answer;

const styles = StyleSheet.create({
    answerStyle: {
        position: "relative",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid"
    },

    answerFontStyle: {
        fontFamily: Fonts.BMDOHYEON,
        fontSize: 45,
    }
});