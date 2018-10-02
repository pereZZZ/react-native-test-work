import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export default class InputSerch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  searchSubmit = () => {
    fetch('https://pixabay.com/api/?key=10280724-aad537f0866d29c71a682df9d&q=' + this.state.text + '&image_type=photo&pretty=true')
    // fetch('https://api.duckduckgo.com/?q=' + this.state.text + '&t=h_&iax=images&ia=images&format=json')
      .then(res => res.json())
      .then(data => this.props.getArrImage(data))
  };

  render() {

    return (
      <TextInput
        style={styles.container}
        behavior="padding"
        placeholder="Write"
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={this.searchSubmit}
      >
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
  },
});
