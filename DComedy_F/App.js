import React, {Component, Fragment} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import DB from './src/DB';

import Question from "./components/Question";
import Answer from "./components/Answer";
import Footer from "./components/Footer";

// 현재 날짜 정리 : 20180101
const yyyymmdd = () => {
    let x = new Date();
    let y = x.getFullYear().toString();
    let m = (x.getMonth() + 1).toString();
    let d = x.getDate().toString();

    (d.length === 1) && (d = '0' + d);
    (m.length === 1) && (m = '0' + m);
    let result = y + m + d;
    return result;
};

const current = yyyymmdd();

export default class App extends Component {

    // 현재 날짜와 DB.json 안에 있는 데이터를 비교하여 일치하는 값을 state 안에 저장
    state = DB.filter(item => item.id === current)[0];

    render() {

        // console.log(current);              // 현재 날짜 출력
        // console.log(this.state.question);  // 현재 날짜에 대응하는 question 출력
        // console.log(this.state.answer);    // 현재 날짜에 대응하는 answer 출력

        const {question, answer} = this.state;

        return (
            <Fragment>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    <Question question={question}/>
                    <Answer answer={answer}/>
                    <Footer/>
                </View>
            </Fragment>
        );
    }
}

// https://flexbox.help/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
});