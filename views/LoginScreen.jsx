import {Button, Card, Input, Text} from '@rneui/base';
import {Header, useTheme} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Header containerStyle={{height: 100}} />
      <Card>
        <Card.Title>Authentification</Card.Title>
        <Card.Divider />
        <View>
          <Input
            placeholder="Email"
            leftIcon={<FontAwesomeIcons name="user" size={20} color={'#000'} />}
          />
          <Input
            secureTextEntry={true}
            placeholder="Mot de passe"
            leftIcon={<FontAwesomeIcons name="lock" size={20} />}
          />
          <Button size="md" title="Se connecter" type="solid" onPress={()=>{
            navigation.replace('main')
          }} />
          <View style={styles.registerView}>
            <Text>Pas en encore inscrit ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('register')
              }}>
              <Text style={styles.registerLabel}>Inscrivez vous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginStyle: {
    fontSize: 24,
    color: '#FFF',
  },
  registerView: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 10,
  },
  registerLabel: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
