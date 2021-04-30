import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FlatList} from "react-native-web";
import User from './Components/User'

export default function App() {
  return (
    <User />
  );
}

const styles = StyleSheet.create({});
