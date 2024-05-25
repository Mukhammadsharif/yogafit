import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../images/back-image.png')}
        style={styles.init}>
        <Text style={styles.title}>Категории</Text>

        <ScrollView>
          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('List', {number: 0})}>
            <Image
              source={require('../images/easy.png')}
              style={styles.image}
            />
            <Image
              source={require('../images/easy-img.png')}
              style={[styles.yogaImage, {right: 0}]}
            />
            <Text style={[styles.text, {left: 10, textAlign: 'left'}]}>
              Простая йога {'\n'}для начинающих
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('List', {number: 6})}>
            <Image
              source={require('../images/norm.png')}
              style={styles.image}
            />
            <Image
              source={require('../images/norm-img.png')}
              style={[styles.yogaImage, {left: 0}]}
            />
            <Text style={[styles.text, {right: 10, textAlign: 'right'}]}>
              Нормальная йога {'\n'} для продолжающих
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('List', {number: 12})}>
            <Image
              source={require('../images/hard.png')}
              style={styles.image}
            />
            <Image
              source={require('../images/hard-img.png')}
              style={[styles.yogaImage, {right: 0}]}
            />
            <Text style={[styles.text, {left: 10, textAlign: 'left'}]}>
              Сложная йога {'\n'}для продвинутых
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('List', {number: 18})}>
            <Image
              source={require('../images/super.png')}
              style={styles.image}
            />
            <Image
              source={require('../images/super-img.png')}
              style={[styles.yogaImage, {left: 0}]}
            />
            <Text style={[styles.text, {right: 10, textAlign: 'right'}]}>
              Супер сложная {'\n'}йога для экспертов
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
  },
  category: {
    width: '95%',
    alignSelf: 'center',
    height: 120,
    borderRadius: 18,
    position: 'relative',
    marginTop: 30,
  },
  image: {
    width: '100%',
    borderRadius: 18,
    resizeMode: 'contain',
  },
  yogaImage: {
    resizeMode: 'contain',
    width: '40%',
    height: 150,
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    top: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
  },
});
