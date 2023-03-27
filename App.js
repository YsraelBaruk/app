import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';
import car1 from './assets/car1.jpg';

export default function App() {
  return (
    <ScrollView>
      <ImageBackground style={x.container}>

        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.automaistv.com.br/wp-content/uploads/2022/12/img_944x6292020_04_08_17_23_37_182288_edited.jpg'}}>
          <Text style={x.card_tiutlo}>Nissan GTR R34</Text>
          <Text style={x.card_valor}>R$ 800.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://i.ytimg.com/vi/upojcLbKnI4/maxresdefault.jpg'}}>
          <Text style={x.card_tiutlo}>Lancer Evolution</Text>
          <Text style={x.card_valor}>R$ 250.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={{uri: 'https://www.tuningblog.eu/wp-content/uploads/2022/02/Dodge-Charger-1970-Widebody-Tuningblog.jpg'}}>
          <Text style={x.card_tiutlo}>Dodge Charger 1970 RT</Text>
          <Text style={x.card_valor}>R$ 600.000,00</Text>
        </ImageBackground>
        <ImageBackground style={x.card} source={car1}> 
          <Text style={x.card_tiutlo}>RX7</Text>
          <Text style={x.card_valor}>R$ 700.000,00</Text>
        </ImageBackground>

      </ImageBackground>
    </ScrollView>
  );
}

const x = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  card: {
    width: 350,
    height: 250,
    backgroundColor: 'grey',
    marginBottom: 30,
  },
  card_tiutlo: {
    textAlign: 'center',
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#00000061',
    color: 'white',
  },
  card_valor: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#00000061',
    color: 'white',
    marginTop: 192,
  },
});
//cover, contain, stretch, repeat, center