import React from 'react';
import PeopleList from '../components/PeopleList'
import {View, StyleSheet} from 'react-native';

import axios from 'axios';

export default class PeoplePage extends React.Component{

 constructor(props){
   super(props);

   this.state = {
      peoples: []
   };
 }

 componentDidMount(){
  axios.get('https://randomuser.me/api/?nat=br&results=5').then(response =>{
    const{ results } = response.data;
    this.setState({
      peoples: results
    })
    
  })
 }

  render(){
    return(
        <View style={styles.container} >
        <PeopleList peoples={this.state.peoples}
        onPressItem={pageParams => 
            this.props.navigation.navigate('peopleDetail', pageParams)
        }
        />
        </View>
    );
  }
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#e2f9ff',
        flex:1
    },
})
