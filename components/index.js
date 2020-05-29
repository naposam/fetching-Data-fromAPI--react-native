import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator,ToastAndroid } from 'react-native';

export default class index extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        dataSource: [],
        isLoading: true
      }
    }
  
    
  ///this code was never used
    _renderItem = (item) => {
      return(
        <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
        <Image source={{ uri: item.picture.large }}  style={{width:80, height:80, marginBottom:3}}/>
        <View style={{flex:1 , justifyContent:'center', marginLeft: 5}}>
          <Text style={{fontSize: 18, color:'green', marginBottom: 15}}>
            {item.name.first}
          </Text>
  
          <Text style={{fontSize: 16, color: 'red'}}>
            {item.name.last}
          </Text>
        </View>
      </TouchableOpacity>
      )
      
    }
  //end never used code here
  
  //separator start here
    renderSeparator =() =>{
       return(
         <View style={{height: 1, width:'100%', backgroundColor:'black'}}>
  
         </View>
       )
    }
    componentDidMount (){
      // const url = "http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1"
      // fetch(url)
      // .then((reponse) => reponse.json())
      // .then((responseJson) =>{
      //    this.setState({
      //      dataSource: responseJson.book_array,
      //      isLoading: false
      //    })
      //    //console.log(responseJson)
      // })
      // .catch((error) =>{
      //   console.log(error)
      // })
  
      //call in  the function
      this.fetchData()
    }
  
    //fetching from an api
    fetchData = async() =>{
      const response = await fetch("http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1")
      //const response = await fetch("https://randomuser.me/api?results=10")
      const json = await response.json()
      this.setState({dataSource: json.book_array, isLoading: false})
  
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
        <TouchableOpacity style={{flex:1, flexDirection: 'row'}} onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
        <Image source={{ uri: item.image }}  style={{width:80, height:80, marginBottom:3}}/>
        <View style={{flex:1 , justifyContent:'center', marginLeft: 5}}>
          <Text style={{fontSize: 18, color:'green', marginBottom: 15}}>
            {item.book_title}
          </Text>
  
          <Text style={{fontSize: 16, color: 'red'}}>
            {item.author}
          </Text>
          <View>
        <TouchableOpacity><Text style={{left:80}}>MORE</Text></TouchableOpacity>
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