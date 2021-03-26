import React from 'react';
import { 
    ImageBackground , 
    StyleSheet ,
    Text,
    View
} from 'react-native';
import { 
    useDimensions,
    useDeviceOrientation 
  } from '@react-native-community/hooks';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Dashboard(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.menu}>
            </View>
            <View style={styles.button}>
            </View>
            <Text style={styles.text}> 
                Zoe's first project 
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    menu: {
        backgroundColor: "dimgray",
        width: "100%",
        height: 70,
    },
    button: {
        backgroundColor: "black",
        width: "100%",
        height: 70,
    },
    text: {
        color: "indigo",
        position: "absolute",
        top: "32%",
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Dashboard;