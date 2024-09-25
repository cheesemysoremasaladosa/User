
import { Button, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Back() {
  const router = useRouter();

  const handleDismiss = () => {
    router.dismiss()
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to first screen" onPress={() => handleDismiss()} />
    </View>
  );
}
