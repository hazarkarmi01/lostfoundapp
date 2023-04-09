import {Button, Card, Input, Text} from '@rneui/base';
import {Header, useTheme} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <Header containerStyle={{height: 100}} />
      <Card>
        <Card.Title>Inscription</Card.Title>
        <Card.Divider />
        <View>
          <Input
            placeholder="Nom"
            leftIcon={<FontAwesomeIcons name="user" size={20} />}
          />
          <Input
            placeholder="Prénom"
            leftIcon={<FontAwesomeIcons name="user" size={20} />}
          />
          <Input
            placeholder="Email"
            leftIcon={<FontAwesomeIcons name="user" size={20} />}
          />
          <Input
            secureTextEntry={true}
            placeholder="Mot de passe"
            leftIcon={<FontAwesomeIcons name="lock" size={20} />}
          />
          <Input
            secureTextEntry={true}
            placeholder="Adresse"
            leftIcon={<FontAwesomeIcons name="location-arrow" size={20} />}
          />
          <Input
            secureTextEntry={true}
            placeholder="Téléphone"
            leftIcon={<FontAwesomeIcons name="mobile-phone" size={20} />}
          />
          <Button size="md" title="Se connecter" type="solid" />
          <View style={styles.registerView}>
            <Text>Déja inscrit ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Text style={styles.registerLabel}>Se Connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default RegisterScreen;

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
