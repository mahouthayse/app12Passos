import {StyleSheet, TextInput} from "react-native";
import colors from "./colors";
import styled from "styled-components/native/dist/styled-components.native.esm";

const global = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: `${colors.primary}`,
        borderRadius: 100,
        elevation: 0,
        marginVertical:8
    },
    labelPrimary:{
        fontFamily: 'montserrat_semibold',
        fontSize: 14,
        color: `${colors.white}`,
        textTransform:'none'
    },
    buttonSecondary: {
        backgroundColor: `${colors.white}`,
        borderRadius: 100,
        elevation: 0,
        marginVertical:8
    },
    labelSecondary:{
        fontFamily: 'montserrat_semibold',
        fontSize: 14,
        color: `${colors.primary}`,
        textTransform:'none'
    },
    inputPrimary: {
        marginBottom:16,
        height:45,
        borderBottomWidth: 1,
        borderBottomColor: `${colors.grey}`,
        padding:8,
        color: `${colors.grey}`,
        fontFamily: 'montserrat_medium',
        fontSize: 14,
    }

});

export default global;