import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Button from '../widgets/Button';
import {useNavigation} from '@react-navigation/native';

export default function InitialScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../images/init.png')}
        style={styles.init}>
        <Button
          text={'Начать'}
          onPress={() => navigation.navigate('Categories')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  init: {
    flex: 1,
    height: Dimensions.get('window').height,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
});
