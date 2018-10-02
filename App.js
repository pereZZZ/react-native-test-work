import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import InputSerch from './component/InputSerch';
import MassImage from './component/MassImege';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrImage: [],
      filter: 4
    }
  }

  getArrImage = data => {
    this.setState({arrImage: data.hits})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Write name of image what you want</Text>
        <InputSerch getArrImage={this.getArrImage}/>
        {
          this.state.arrImage !== [] &&
            <View> style={styles.imageBlock}
              <View style={{width: 50, height: 50}}>
              <TouchableOpacity style={styles.button} onPress={() => this.setState({filter:2})}>
                <Text style={styles.text}>2 column</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity style={styles.button} onPress={() => this.setState({filter:3})}>
                <Text style={styles.text}>3 column</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity style={styles.button} onPress={() => this.setState({filter:4})}>
                <Text style={styles.text}>4 column</Text>
              </TouchableOpacity>
              </View>
            </View>
        }
        {
          this.state.arrImage !== [] &&
            <MassImage arrImage={this.state.arrImage} filter={this.state.filter}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%',
    justifyContent: 'center',
  },
  buttonBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:10,
  },
  button:{
    width: 300,
    backgroundColor: "rgba(92, 99,216, 1)",
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  text:{
    fontSize: 20,
    color: '#fff',
    paddingTop: 5,
  }
});
