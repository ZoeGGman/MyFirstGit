import React, { Component } from 'react';
import { ImageBackground,StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function DashBoardScreen(props){
    return (
        <ImageBackground 
            style={styles.background}
            blurRadius= {5}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.menu}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Menu')}>
                    <Image 
                        style={styles.button}
                        source={require("../assets/menu.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.text}> 
                <Text style={styles.font1}>Zoe's first project</Text>
                <Text> </Text>
                <Text style={styles.font2}>Here's a menu icon with a dropdown list function</Text>
            </View>
        </ImageBackground>
    );
}
function MenuScreen(props){
    return (
        <ImageBackground 
            style={styles.background}
            blurRadius= {5}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.menu}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('DashBoard')}>
                    <Image 
                        style={styles.button}
                        source={require("../assets/menu.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.text}> 
                <Text style={styles.font1}>This is menu page</Text>
                <Text> </Text>
                <Text style={styles.font2}>Press again the iCon will turn back</Text>
            </View>
        </ImageBackground>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="DashBoard" component={DashBoardScreen} />
                <Drawer.Screen name="Menu" component={MenuScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    menu: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    button: {
        width: 90,
        height: 90,
    },
    text: {
        position: "absolute",
        top: "32%",
    },
    font1: {
        color: "hotpink",
        fontSize: 30,
        fontWeight: 'bold',
    },
    font2: {
        color: "hotpink",
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MyDrawer;