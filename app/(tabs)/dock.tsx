
import { Tabs } from 'expo-router';
import { StyleSheet,View ,Text,Image} from 'react-native';
export function Dock(){
    return (
        <View style={styles.container}>
            {/* <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
         
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
         
        }}
      />
    </Tabs> */}
    <Text>hello world</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container:{
      position: 'absolute', // Positioning the dock at the bottom
    bottom: 0,
    width: '100%',
    backgroundColor: 'blue', // Styling the Dock
    zIndex: 1
    }
})