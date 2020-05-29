import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator,ToastAndroid } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  renderSeparator =() =>{
     return(
       <View style={{height: 1, width:'100%', backgroundColor:'black'}}>

       </View>
     )
  }
  componentDidMount (){
    this.fetchData()
  }
  fetchData = async() =>{
    const response = await fetch("https://randomuser.me/api?results=20")
  
    const json = await response.json()
    this.setState({dataSource: json.results, isLoading: false})

  }

  render(){
return (
  this.state.isLoading
  ?
  <View  style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
  
      <ActivityIndicator size="large" color="#330066" animating/>
    
  </View>
  :
    <View style={styles.container}>
      
    <FlatList style={{marginTop:40}}
      data = {this.state.dataSource}
      renderItem = {({item}) =>
      <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => ToastAndroid.show(item.name.first, ToastAndroid.SHORT)}>
      <Image source={{ uri: item.picture.large }}  style={{width:80, height:80, marginBottom:3}}/>
      <View style={{flex:1 , justifyContent:'center', marginLeft: 5}}>
        <Text style={{fontSize: 18, color:'green', marginBottom: 15}}>
          {`${item.name.first} ${item.name.last}`}
        </Text>

        <Text style={{fontSize: 16, color: 'red'}}>
          {item.dob.age}
        </Text>
        <View>
      
    </View>
      </View>
    </TouchableOpacity>
    
    }
    
      keyExtractor = {(item, index) => index.toString()}
      ItemSeparatorComponent={this.renderSeparator}

      
/>
    </View>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
