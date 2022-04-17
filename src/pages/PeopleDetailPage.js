import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component{

    render(){

        const { people } = this.props.navigation.state.params;

        return(
            <View style={styles.container}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: people.picture.large }}
                    />
                    <View style={styles.detailContainer} >
                        <View style={styles.line} >
                            <Text style={styles.cell} >Email: {people.email}</Text>
                        </View>
                        <View style={styles.line} >
                            <Text style={styles.cell} >Cidade: {people.location.city}</Text>
                        </View>
                        <View style={styles.line} >
                            <Text style={styles.cell} >Estado: {people.location.state}</Text>
                        </View>
                        <View style={styles.line} >
                            <Text style={styles.cell} >Tel: {people.phone}</Text>
                        </View>
                        <View style={styles.line} >
                            <Text style={styles.cell} >Cell: {people.cell}</Text>
                        </View>
                        <View style={styles.line} >
                            <Text style={styles.cell} >Nat: {people.nat}</Text>
                        </View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    avatar: {
        aspectRatio: 1,
        borderRadius: 200,
    },
    container:{
        flex:1,
        padding: 15,
        backgroundColor: '#e2f9ff'
        
    },
    detailContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line:{
        paddingTop: 3,
        paddingBottom:3,
        borderWidth: 1,
        borderColor: '#c5c5c5',
    },
    cell:{
        fontSize: 18,   
        paddingLeft: 5,

    }
});
