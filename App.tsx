
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import TopView from './src/components/TopView';
import BotView from './src/components/BotView';
import BarraScroll from './src/components/BarraScroll';
import BigBlueButton from './src/components/BigBlueButton';
import MeuFooter from './src/components/MeuFooter';

export default function App() {
  return (
    <View style={styles.geral}>
      <TopView />
      <BarraScroll />
      <BotView />
      <BigBlueButton />
      <MeuFooter />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({

  geral: {
    flex: 1
  }
});
