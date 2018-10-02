import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text} from 'react-native';
import Video from "expo/src/av/Video.web";

export default class MassImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.props.arrImage.map((item, index) =>
              index % this.props.filter === 0 &&
                <View key={index+'k'} style={styles.imageBlock}>
                  {this.props.arrImage.map((item2, index2) =>
                    index === 0 ?
                      index2 < this.props.filter &&
                        <Image
                          key={index2+'a'}
                          source={{uri: item2.largeImageURL}}
                          style={this.props.filter < 4 ?
                            {height: 130,width: 130}:
                            styles.image}
                        />
                      :
                      (index2 < index + this.props.filter && index2 >= index) &&
                        <Image
                          key={index2+'a'}
                          source={{uri: item2.largeImageURL}}
                          style={this.props.filter < 4 ?
                            {height: 130,width: 130}:
                            styles.image}
                        />
                  )}
                </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageBlock: {
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    width: '100%',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width:100,
  },

});
