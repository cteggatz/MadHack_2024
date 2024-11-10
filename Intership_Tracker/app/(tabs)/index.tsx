import React from "react";
import {Link} from "expo-router";
import { Image, StyleSheet, Text,View, Platform, Button, Pressable, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableHighlight } from "react-native-gesture-handler";


export default function HomeScreen() {
  return (
    <SafeAreaProvider style = {{flexDirection: "column"}}>

      <SafeAreaView style = {[styles.titleDiv, styles.div]}>
        <Text style={[styles.text, styles.title]}>Application List</Text>
      </SafeAreaView>

      <SafeAreaProvider style = {[styles.div]}>
        <Pressable onPress={() => Alert.alert(
        "Loading Data!", // Title of the alert
        "This is an alert message", // Message
        )} style = {styles.addApplicationButton}>
          <View>

            <Link href = {{pathname: "../application/addNewApplication", params: {id:"test"}}} style = {[styles.text, styles.title]}> Add Application </Link>
          </View>
        </Pressable>
      </SafeAreaProvider>
      
      <SafeAreaView style = {styles.bodyDiv}>
        <Link href = {{pathname: "../application/application", params: {id:"test"}}} style = {styles.text}> test </Link>
        <Link href = {{pathname: "../application/application", params: {id:"bob"}}} style = {styles.text}> bob </Link>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  div:{
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  titleDiv:{
    flex: 1,
    backgroundColor:"purple",
    color: "white"
  },
  bodyDiv:{
    flex: 6
  },
  text:{
    color: "white"
  },
  title:{
    fontSize: 30
  },
  addApplicationButton:{
    backgroundColor: "purple",
    margin:10,
    marginTop: 20,
    padding: 10
  }
});