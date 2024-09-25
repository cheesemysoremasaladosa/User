import MapView  from 'react-native-maps';
import { StyleSheet,View ,Image} from 'react-native';
export function UserMap(){
    return (
        <View style={styles.container}>
            <Image></Image>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
