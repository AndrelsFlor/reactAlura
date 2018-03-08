import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends React.Component {
  render() {
    
    return (
        <View >
        <View style={styles.cabecalho}>
            <Image source={{uri: this.props.foto.urlPerfil}}
            style={styles.fotoPerfil}/>
            {/* passei a variável "foto" como propriedade do componente e a estou acessando agora */}
            <Text>{this.props.foto.loginUsuario}</Text>
        </View>
        
        <Image source={{uri: this.props.foto.urlFoto}}
        style={styles.fotoPost}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 
  cabecalho:{
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoPerfil:{marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  fotoPost:{
    width:width,
    height:width
  }
});
