import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        screen: Dimensions.get('window'),
        result: '0',
        operations: 'operations ...',
        isDot: false
      };
      this.buttons = [
               {
                   id: 10,
                   action: () => {
                        this.setState({
                            operations: 'operations ...',
                            result: '0',
                            isDot: false
                        });
                   },
                   name: 'AC'
               },
               {
                   id: 18,
                   action: () => {
                       console.log('');
                   }, name: '',
                   size: 2
               },
               {
                   id: 11,
                   action: () => {
                       console.log('/')
                   }, name: '/',
                   class: 'operation'
               },
               {
                   id: 7,
                   action: () => {
                       let res;
                       if(this.state.result === '0') {
                           console.log('0');
                           res = '7'
                       } else {
                           res = this.state.result + '7'
                       }
                       this.setState({
                            result: res
                       });
                   }, name: '7'
               },
               {
                   id: 8,
                   action: () => {
                       console.log(8)
                   }, name: '8'
               },
               {
                   id: 9,
                   action: () => {
                       console.log(9)
                   }, name: '9'
               },
               {
                   id: 12,
                   action: () => {
                       console.log('*')
                   }, name: '*',
                   class: 'operation'
               },
               {
                   id: 4,
                   action: () => {
                       console.log('4')
                   }, name: '4'
               },
               {
                   id: 5,
                   action: () => {
                       console.log(5)
                   }, name: '5'
               },
               {
                   id: 6,
                   action: () => {
                       console.log(6)
                   }, name: '6'
               },
               {
                   id: 14,
                   action: () => {
                       console.log('+')
                   }, name: '+',
                   class: 'operation'
               },
               {
                   id: 1,
                   action: () => {
                       console.log(1)
                   }, name: '1'
               },
               {
                   id: 2,
                   action: () => {
                       console.log(2)
                   }, name: '2'
               },
               {
                   id: 3,
                   action: () => {
                       console.log(3)
                   }, name: '3'
               },
               {
                   id: 13,
                   action: () => {
                       console.log('-')
                   }, name: '-',
                   class: 'operation'
               },
               {
                   id: 0,
                   action: () => {
                       console.log(0)
                   }, name: '0',
                   size: 2
               },
               {
                   id: 16,
                   action: () => {
                       console.log('.')
                   }, name: ','
               },
               {
                   id: 15,
                   action: () => {
                       console.log('=')
                   }, name: '=',
                   class: 'operation'
               }
           ];
    }

    getOrientation(){
      if (this.state.screen.width > this.state.screen.height) {
        return 'LANDSCAPE';
      } else {
        return 'PORTRAIT';
      }
    }

    getStyle(){
      if (this.getOrientation() === 'LANDSCAPE') {
        return landscapeStyles;
      } else {
        return portraitStyles;
      }
    }

    onLayout(){
      this.setState({screen: Dimensions.get('window')});
    }

    setNumber(number) {
        console.log(number);
    }

    render() {
      return (
        <View onLayout={this.onLayout.bind(this)} style={this.getStyle().container}>
            <Text style={this.getStyle().header}>
                {this.state.result}
            </Text>
            <Text style={this.getStyle().headerSecond}>
                {this.state.operations}
            </Text>
                {
                    this.buttons.map(button => {
                        if (!button.size) {
                            if (button.class) {
                                return <TouchableOpacity key={button.id} onPress={button.action}>
                                    <Text style={this.getStyle().btn, this.getStyle().operation}>
                                        {button.name}
                                    </Text>
                                </TouchableOpacity>
                            } else {
                                return <TouchableOpacity key={button.id} onPress={button.action}>
                                        <Text style={this.getStyle().btn}>
                                           {button.name}
                                        </Text>
                                   </TouchableOpacity>
                            }
                        } else {
                           return <TouchableOpacity key={button.id} onPress={button.action}>
                                <Text style={this.getStyle().btn, this.getStyle().twice}>
                                    {button.name}
                                </Text>
                            </TouchableOpacity>
                        }
                    })
                }
        </View>
        );
      }
}
export default App;

const btnWidth = Dimensions.get('window').width / 4;
const btnHeight = (Dimensions.get('window').height - 24) / 7;

const portraitStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    backgroundColor: '#1C1C1C'
  },

  btn: {
    backgroundColor: '#505050',
    width: btnWidth - 2,
    height: btnHeight - 2,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginBottom: 2,
    marginRight: 2
  },

  twice: {
    backgroundColor: 'lime',
    backgroundColor: '#505050',
    width: 2 * btnWidth - 2,
    height: btnHeight - 2,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginBottom: 2,
    marginRight: 2
  },

  header: {
  	width: 4 * btnWidth,
    textAlign: 'right',
    paddingRight: 20,
    backgroundColor: '#1C1C1C',
    color: 'white',
    fontWeight: 'bold',
    height: btnHeight,
    fontSize: 40,
    paddingTop: 20
  },

  headerSecond: {
  	width: 4 * btnWidth - 2,
    textAlign: 'right',
    paddingRight: 40,
    backgroundColor: '#1C1C1C',
    color: 'white',
    height: btnHeight - 2,
  	fontSize: 18,
  	marginBottom: 2,
    marginRight: 2,
    paddingTop: 20,
    opacity: 0.3
  },

  operation: {
    width: btnWidth - 2,
    height: btnHeight - 2,
    textAlign: 'center',
    fontSize: 30,
  	backgroundColor:'#FF9500',
    color:'white',
    marginBottom: 2,
    marginRight: 2
  },
});

const landscapeStyles = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lime'
  }
})