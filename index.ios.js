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
        <Text style={styles.itemTitle}>
          Kopi
        </Text>
        <Text style={styles.itemDescription}>
          1 floof / second
        </Text>
        <Image source={require('./img/items/softboiledeggs.png')} style={styles.itemThumbnail} />
        <Text style={styles.itemTitle}>
          Soft Boiled Eggs
        </Text>
        <Text style={styles.itemDescription}>
          1 floof / second
        </Text>
        <Image source={require('./img/items/kayatoast.png')} style={styles.itemThumbnail} />
        <Text style={styles.itemTitle}>
          Kaya Toast
        </Text>
        <Text style={styles.itemDescription}>
          2 floof / second
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  itemThumbnail: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
  },
  itemDescription: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
  },
});

AppRegistry.registerComponent('Project', () => Project);
