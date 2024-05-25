import React, {useEffect, useState} from 'react';
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
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

export default function Detail({route}) {
  const navigation = useNavigation();
  const {id} = route.params;
  const [training, setTraining] = React.useState(null);
  const [time, setTime] = useState(null);
  const [timer, setTimer] = React.useState(false);

  function formatSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return [
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].join(':');
  }

  useEffect(() => {
    if (id) {
      const selected = yoga.yoga_plans.find(item => item.id === id);
      if (selected) {
        setTraining(selected);
        setTime(selected?.duration);
      }
    }
  }, [id]);

  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(interval);
    }
  }, [timer]);

  const children = remainingTime => (
    <Text
      accessibilityRole="timer"
      accessibilityLiveRegion="assertive"
      importantForAccessibility="yes">
      {formatSecondsToMinutes(time)}
    </Text>
  );

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
        <ScrollView>
          <Image
            source={require('../images/detail-image.png')}
            style={styles.detailImage}
          />
          <Text style={styles.title}>{training?.name}</Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CountdownCircleTimer
              isPlaying={timer}
              duration={training?.duration}
              colors="#455EFF"
              onComplete={() => {
                // do your stuff here
                setTimer(false);
              }}
              size={220}
              children={() => children()}
            />

            {!timer ? (
              <TouchableOpacity onPress={() => setTimer(true)}>
                <Image
                  source={require('../images/polygon.png')}
                  style={styles.polygon}
                />
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>

          <Text style={styles.description}>{training?.description}</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  backIcon: {
    width: 30,
    height: 25,
    margin: 20,
    resizeMode: 'contain',
  },
  detailImage: {
    height: 250,
    resizeMode: 'contain',
  },
  polygon: {
    width: 30,
    height: 30,
    marginTop: 40,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 14,
    fontWeight: 'light',
    padding: 20,
    textAlign: 'justify',
    opacity: 0.5,
  },
});
