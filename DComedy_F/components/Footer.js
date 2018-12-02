import React, {Component} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Fonts} from "../src/Fonts";

class Footer extends Component {
    render() {
        return (
            <View style={styles.footerStyle}>
                {/* Linking : a 태그와 같은 역할을 담당 */}
                <Text style={styles.footerFontStyle} onPress={() => Linking.openURL('https://google.com')}>제보하기</Text>
            </View>
        );
    }
}

export default Footer;

const styles = StyleSheet.create({
    footerStyle: {
        height: 40,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },

    footerFontStyle: {
        fontFamily: Fonts.BMDOHYEON,
        fontSize: 12
    }
});