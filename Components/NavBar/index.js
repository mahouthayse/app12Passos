import {Appbar} from "react-native-paper";
import React from "react"
import {StyleSheet} from "react-native";
import colors from "../../Style/colors";
import {useNavigation} from "@react-navigation/native";

const NavBar = ({title, url}) =>{
    const { navigate } = useNavigation();
    return(
            <Appbar.Header style={styles.bottom}>
                <Appbar.Action icon="chevron-left" size={32} onPress={() => navigate(url) }/>
                <Appbar.Content title={title} titleStyle={styles.titleText}/>

        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    bottom: {
        left:0,
        right:0,
        backgroundColor:`${colors.white}`,
        elevation: 0
    },
    titleText: {
        fontFamily: "montserrat_semibold",
        fontSize: 15,
        color: `${colors.title}`,
        textTransform: "uppercase",
    },
});

export default NavBar;
