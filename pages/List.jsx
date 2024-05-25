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
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {yoga} from '../app/yoga';

export default function List({route}) {
  const navigation = useNavigation();
  const {number} = route.params;

  function formatSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return [
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].join(':');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../images/back-image.png')}
        style={styles.init}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../images/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {number === 0
            ? 'Простая йога для начинающих'
            : number === 6
            ? 'Нормальная йога для продолжающих'
            : number === 12
            ? 'Сложная йога для продвинутых'
            : 'Супер сложная йога для экспертов'}
        </Text>

        <ScrollView>
          {yoga.yoga_plans.slice(number, number + 5).map((item, index) => (
            <TouchableOpacity
              style={styles.category}
              key={index}
              onPress={() => navigation.navigate('Detail', {id: item?.id})}>
              <Image
                source={require('../images/done.png')}
                style={styles.done}
              />
              <View>
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.kkal}>
                  {item?.kkal} ккал {'    '}{' '}
                  {formatSecondsToMinutes(item?.duration)}
                </Text>
              </View>
              <Image
                source={require('../images/chevron.png')}
                style={styles.chevron}
              />
            </TouchableOpacity>
          ))}
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
    height: 90,
    borderRadius: 18,
    position: 'relative',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#00C19D',
    paddingRight: 10,
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
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 10,
    textAlign: 'left',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
  },
  done: {
    width: '22%',
    resizeMode: 'contain',
  },
  chevron: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  kkal: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  backIcon: {
    width: 30,
    height: 25,
    margin: 20,
    resizeMode: 'contain',
  },
});
