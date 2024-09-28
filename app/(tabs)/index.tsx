import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'

import {Link} from 'expo-router'

export default function Layout(){
  return (
    <View
      style={{
        flex: 1,
        margin: 10
      }}
    >
      <Text>map & pressable cart icons.</Text>
      <Link 
        style={styles.cartIcons}
        href={{
          pathname: '/vendor/[cartID]',
          params:{ cartID: 'Ramesh'}
        }}
        asChild 
      >
        <Pressable>
          <Text>Ramesh's cart</Text>
        </Pressable>
      </Link>

      <Link 
        style={styles.cartIcons}
        href={{
          pathname: '/vendor/[cartID]',
          params:{ cartID: 'Suresh'}
        }}
        asChild 
        
      >
        <Pressable>
          <Text>Suresh's cart</Text>
        </Pressable>
      </Link>

    </View> 
    
  )
}

const styles = StyleSheet.create({
  cartIcons:{
    marginTop: 15,
    margin: 3,
    padding:3,
    alignSelf: 'center'
  }
})