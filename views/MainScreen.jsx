import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Tab, TabView} from '@rneui/themed';
import {Header} from '@rneui/base';
const MainScreen = () => {
  const [index, setIndex] = useState(0);
  return (
    <View>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Annonces"
          titleStyle={{fontSize: 12}}
          icon={{name: 'event', type: 'material-icons', color: 'white'}}
        />
        <Tab.Item
          title="Messages"
          titleStyle={{fontSize: 12}}
          icon={{name: 'message', type: 'material-icons', color: 'white'}}
        />
        <Tab.Item
          title="Profil"
          titleStyle={{fontSize: 12}}
          icon={{name: 'user', type: 'font-awesome', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default MainScreen;

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
