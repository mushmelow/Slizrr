import React from "react";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Button
} from "react-native";

const AuthScreen = props => {
  return;
  <View>
    <Card>
      <ScrollView>
        <Input
          id="email"
          label="email"
          keyboardType="email-address"
          required
          email
          autoCapitalize="none"
          errorMessage=" please enter a valid email address"
          onValueChange= {()=> {}}
          initialValue=''
        ></Input>
       
         <Input
          id="password"
          label="password"
          keyboardType="default"
          required
          minLength= {5}
          autoCapitalize="none"
          errorMessage=" please enter a valid password address"
          onValueChange= {()=> {}}
          initialValue=''
        ></Input>
         <Button title='login' onPress={()=> {}}></Button>
         <Button title='switch to sign up' onPress={()=> {}}></Button>
      </ScrollView>
    </Card>
  </View>;
};

const style = StyleSheet.create({});

export default AuthScreen;
