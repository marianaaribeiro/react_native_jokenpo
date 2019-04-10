import React, {Component} from 'react';
import {Text, Button, View, Image} from 'react-native';


export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {escolhaUsuario:'', escolhaComputador:'', result:''}
    }

    jokenpo(escolhaUsuario){

        //escolhaComputador
        //gerar numero aleatório
        var aleatorio = Math.floor(Math.random() *3)

        var escolhaC = '';

        switch(aleatorio){
            case 0: escolhaC = 'Pedra' ; break;
            case 1: escolhaC = 'Papel'; break;
            case 2: escolhaC = 'Tesoura'; break;
            default: escolhaC = '';
        }

        var result ='';

        if(escolhaC == 'Pedra'){
            if(escolhaUsuario == 'Pedra'){
                result = 'Empate'
            }
            if(escolhaUsuario == 'Papel'){
                result = 'Você Ganhou'
            }
            if(escolhaUsuario == 'Tesoura'){
                result = 'Game Over'
            }
        }
        
        if(escolhaC == 'Papel'){
            if(escolhaUsuario == 'Pedra'){
                result = 'Game Over'
            }
            if(escolhaUsuario == 'Papel'){
                result = 'Empate'
            }
            if(escolhaUsuario == 'Tesoura'){
                result = 'Você Ganhou'
            }
        }
        if(escolhaC == 'Tesoura'){
            if(escolhaUsuario == 'Pedra'){
                result = 'Você Ganhou'
            }
            if(escolhaUsuario == 'Papel'){
                result = 'Game Over'
            }
            if(escolhaUsuario == 'Tesoura'){
                result = 'Empate'
            }
        }

       

        

        this.setState({escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaC, result: result});

    }
  render() {
      const {txtResult, topo, topoImg, btn, painelAcoes, btnPedra, btnPapel, btnTesoura, corpo} = estilos;
    return (
        <View>
            <View style={topo}>
                <Image style={topoImg} source={require('../../img/jokenpo.png')}></Image>
            </View>
            <View style={painelAcoes}>
                 <View style={btn}>
                    <Button style={btnPedra} color="#383738ce" title="Pedra" onPress={() => {this.jokenpo('Pedra')}}/>
                 </View> 
                 <View style={btn}>
                     <Button style={btnPapel} color="#beb8be" title="Papel" onPress={() => {this.jokenpo('Papel')}}/>
                 </View> 
                 <View style={btn}>
                     <Button style={btnTesoura}  color="#faa7e565" title="Tesoura" onPress={() => {this.jokenpo('Tesoura')}}/>
                 </View> 
            </View>
            <View style={corpo}> 
                <Icone  escolha={this.state.escolhaUsuario} jogador='Escolha do Jogador:'>{this.state.escolhaUsuario}</Icone>
                <Icone escolha={this.state.escolhaComputador} jogador='Escolha do Jogo:'></Icone>
                <Text style={txtResult}>{this.state.result}</Text>
               </View>

            
        </View>
    );
  }
}

class Icone extends Component{
    render(){
        const {txt, img} = estilos;
  
        if(this.props.escolha === 'Pedra'){
            return(
                <View style={img}>
                <Text style={txt}>{this.props.jogador}</Text>
                <Image  source={require('../../img/pedra.png')}/>
                </View>
            )
        } else if(this.props.escolha === 'Papel'){
            return(
                <View style={img}>
                <Text style={txt}>{this.props.jogador}</Text>
                <Image source={require('../../img/papel.png')}/>
                </View>
            )
        } else if(this.props.escolha === 'Tesoura'){
            return(
                <View style={img}>
                <Text style={txt}>{this.props.jogador}</Text>
                <Image  source={require('../../img/tesoura.png')}/>
                </View>
            )
        } else {
            return false;
        }

        
    }
}

const estilos ={
    topo:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#faa7e565',
    },
    corpo:{
        alignItems:'center',
        paddingTop: 20,
    },
    topoImg:{
        margin: 20,
        borderRadius: 40,
    },
    btn:{
        width: 120,
    },
    btnPedra:{
        backgroundColor: '#383738ce',
        color: '#fff',
        textColor: '#000'
    },
    btnPapel:{
        textColor: '#000'
    },
    btnTesoura:{
        backgroundColor: '#faa7e565',
    },
    painelAcoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#6d4a64b4',
    },
    txt:{
        fontSize:30,
    },
    txtResult:{
        fontSize:30,
        color: 'red',
        padding: 20,
    },
    img:{
        justifyContent: 'center',
        alignItems:'center',
    }
}


