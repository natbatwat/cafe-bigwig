import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

var itemData = [
  {
    "itemImage": "./img/items/kopi.png",
    "itemName": "Kopi O",
    "itemDescription": "1 floof / second",
  },{
    "itemImage": "./img/items/toast.png",
    "itemName": "Kaya Toast",
    "itemDescription": "2 floof / second",
  },{
    "itemImage": "./img/items/softboiledeggs.png",
    "itemName": "Soft Boiled Eggs",
    "itemDescription": "3 floof / second",
  },{
    "itemImage": "./img/items/softboiledeggs.png",
    "itemName": "Soft Boiled Eggs",
    "itemDescription": "3 floof / second",
  },
];

var ItemRow = React.createClass({
  render() {
    return (
      <View style={styles.itemContainer}>
        <Image source={require('./img/items/kopi.png')} style={styles.itemThumbnail} />
        
        <Text style={styles.itemTitle}>
          {this.props.itemName}
        </Text>
        
        <Text style={styles.itemDescription}>
          {this.props.itemDescription}
        </Text>
      </View>
    );
  }
});

var ListViewRowsAndSections = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    return {
      dataSource: ds.cloneWithRows(itemData),
    };
  },
  
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  },
  
  renderRow(data) {
    return <ItemRow {...itemData} />
  }
});

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.shopContainer}>
          <Text>Cafe Goes Here</Text>
        </View>
    
        <View style={styles.menuContainer}>
          <ListViewRowsAndSections/>
        </View>
      
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
  shopContainer: {
    flex: .4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#612832',
  },
  menuContainer: {
    flex: .6,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f3f4',
  }
  
});

AppRegistry.registerComponent('Project', () => Project);
