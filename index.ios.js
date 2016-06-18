import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Image source={require('./img/items/kopi.png')} style={styles.itemThumbnail} />
        
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemThumbnail: {
    width: 50,
    height: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
