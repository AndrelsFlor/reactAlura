import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native';

//importa o componente criado por mim
import Post from './src/components/Post';
const width = Dimensions.get('screen').width;

export default class App extends React.Component {

  constructor () {
    //estado no react é o mesmo que escopo
    super();
    this.state = {
      fotos:[]
    };
  }

  //estado do componente logo após a chamada do construtor

  componentDidMount () {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
  }

  render() {
    // const fotos = [{id:1, usuario:'André'}, {id:2,usuario:'Alberto'}, {id:3, usuario:'Vitor'}];
    return ( 

      <FlatList style={styles.container}
       //Todo objeto sendo iterado, precisa ter uma propriedade key única no react
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={ ({item}) => 
         <Post foto={item}/>           
                 
        }
       
       
      
      // }      
      />


    
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20
  }

});
