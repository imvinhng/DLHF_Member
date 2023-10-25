import React from "react";
import { RoundButton } from "./CustomButton";
import { useNavigation } from "@react-navigation/native";


export const CloseButton = (props) => {
    const navigation = useNavigation();

    return (
        <RoundButton
            iconName='times'
            iconSize={15}
            buttonStyle={props.buttonStyle}
            bgColor={props.buttonColor}
            onPressFunction={() => props.onPressFunction ?? navigation.navigate(props.navDest ?? 'Home')}
        />
    )
}