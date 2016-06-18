import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

var testData = [{"firstName":"Black","lastName":"Garrett"},
{"firstName":"Morales","lastName":"Duncan"},
{"firstName":"Ramos","lastName":"King"},
{"firstName":"Dunn","lastName":"Collins"},
{"firstName":"Fernandez","lastName":"Montgomery"},
{"firstName":"Burns","lastName":"Fox"},
{"firstName":"Richardson","lastName":"Kim"},
{"firstName":"Hanson","lastName":"Evans"},
{"firstName":"Anderson","lastName":"Hunt"},
{"firstName":"Carter","lastName":"Grant"},
{"firstName":"Ray","lastName":"Ruiz"},
{"firstName":"Hart","lastName":"Schmidt"},
{"firstName":"White","lastName":"Andrews"},
{"firstName":"Hall","lastName":"Holmes"},
{"firstName":"Hawkins","lastName":"Gomez"},
{"firstName":"Bowman","lastName":"Sullivan"},
{"firstName":"Brooks","lastName":"Evans"},
{"firstName":"Reyes","lastName":"Perez"},
{"firstName":"Dixon","lastName":"Barnes"},
{"firstName":"Ward","lastName":"Lee"},
{"firstName":"Berry","lastName":"Payne"},
{"firstName":"Murray","lastName":"Rose"},
{"firstName":"Stephens","lastName":"Fowler"},
{"firstName":"Rodriguez","lastName":"Lewis"},
{"firstName":"Cook","lastName":"Dean"}];

function compare(a,b) {
  if (a.lastName < b.lastName)
    return -1;
  if (a.lastName > b.lastName)
    return 1;
  return 0;
}

var SampleRow = React.createClass({
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.text}>{this.props.lastName}, {this.props.firstName}</Text>
        </View>
      </View>
    );
  }
});

var ListViewRowsAndSections = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
   	var {data, sectionIds} = this.renderListViewData(testData.sort(compare));

    return {
      dataSource: ds.cloneWithRowsAndSections(data, sectionIds)
    };
  },
  
  componentDidMount() {
    var listViewScrollView = this.refs.listView.getScrollResponder();
    // listViewScrollView.scrollTo(1); // Hack to get ListView to render fully
  },
  
  renderListViewData(users) {
    var data = {};
    var sectionIds = [];
    
    users.map((user) => {
      var section = user.lastName.charAt(0);
      if (sectionIds.indexOf(section) === -1) {
        sectionIds.push(section);
        data[section] = [];
      }
      data[section].push(user);
    });

    return {data, sectionIds};
  },
  
  renderSectionHeader(data, sectionId) {
    var text;
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionId}</Text>
      </View>
    );
  },
  
  renderRow(rowData) {
    return <SampleRow {...rowData} style={styles.row} />
  },

  render() {
    return (
      <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  },
});

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <Text>Test</Text>
        </View>
        <View style={styles.bottomcontainer}>
          <ListViewRowsAndSections/>
        </View>
      
        <Image source={require('./img/items/kopi.png')} style={styles.itemThumbnail} />
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
  topcontainer: {
    flex: .4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  bottomcontainer: {
    flex: .6,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  }
  
});

AppRegistry.registerComponent('Project', () => Project);
