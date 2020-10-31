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
                   id: 19,
                   action: () => {
                       this.sqrt();
                   },
                   name: '√',
                   extended: true
               },
               {
                   id: 20,
                   action: () => {
                       console.log('x!');
                   },
                   name: 'x!',
                   extended: true
               },
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
                   id: 21,
                   action: () => {
                       console.log('±');
                   },
                   name: '±',
                   extended: true
               },
               {
                   id: 22,
                   action: () => {
                       console.log('%');
                   },
                   name: '%',
                   extended: true
               },
               {
                   id: 18,
                   action: () => {
                       console.log('');
                   }, name: '',
                   size: 2,
                   extended: false
               },
               {
                   id: 11,
                   action: () => {
                       console.log('/')
                   }, name: '/',
                   class: 'operation'
               },
               {
                   id: 23,
                   action: () => {
                       console.log('e^x');
                   },
                   name: 'e^x',
                   extended: true
               },
               {
                   id: 24,
                   action: () => {
                       console.log('10^x');
                   },
                   name: '10^x',
                   extended: true
               },
               {
                   id: 7,
                   action: () => {
                        this.setNumber('7');
                   }, name: '7'
               },
               {
                   id: 8,
                   action: () => {
                       this.setNumber('8');
                   }, name: '8'
               },
               {
                   id: 9,
                   action: () => {
                       this.setNumber('9');
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
                   id: 25,
                   action: () => {
                       console.log('ln');
                   },
                   name: 'ln',
                   extended: true
               },
               {
                   id: 26,
                   action: () => {
                       console.log('log10');
                   },
                   name: 'log10',
                   extended: true
               },
               {
                   id: 4,
                   action: () => {
                       this.setNumber('4');
                   }, name: '4'
               },
               {
                   id: 5,
                   action: () => {
                       this.setNumber('5');
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
                   id: 27,
                   action: () => {
                       console.log('e');
                   },
                   name: 'e',
                   extended: true
               },
               {
                   id: 28,
                   action: () => {
                       console.log('x^2');
                   },
                   name: 'x^2',
                   extended: true
               },
               {
                   id: 1,
                   action: () => {
                       this.setNumber('1');
                   }, name: '1'
               },
               {
                   id: 2,
                   action: () => {
                       this.setNumber('2');
                   }, name: '2'
               },
               {
                   id: 3,
                   action: () => {
                       this.setNumber('3');
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
                   id: 29,
                   action: () => {
                       console.log('π');
                   },
                   name: 'π',
                   extended: true
               },
               {
                   id: 30,
                   action: () => {
                       console.log('x^3');
                   },
                   name: 'x^3',
                   extended: true
               },
               {
                   id: 0,
                   action: () => {
                       this.setNumber('0');
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
                       console.log('=');
                       this.test();
                   }, name: '=',
                   class: 'operation'
               }
           ];
    }

    searchDot() {
        const regex = /[^\w\s]/g;

        if (paragraph.search(regex) != -1) {
            this.setState({
                isDot: true
            });
        } else {
            this.setState({
                isDot: false
            });
        }
    }

    sqrt() {
        let input = parseInt(this.state.result);
        this.setState({
            result: Math.sqrt(input),
            operations: '√'
        });
        searchDot()
    }

    setNumber(stringNumber) {
        let res;
        if(this.state.result === '0') {
            res = stringNumber
        } else {
            res = this.state.result + stringNumber
        }
        this.setState({
            result: res
        });
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

    getPortraitButtons() {
      return this.buttons.map(button => {
             if(!button.extended) {
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
           }
        })
    }

    getLandscapeButtons() {
      return this.buttons.map(button => {
             if(button.extended != false) {
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
           }
        })
    }

    getButtons() {
      if (this.getOrientation() === 'LANDSCAPE') {
        return this.getLandscapeButtons();
      } else {
        return this.getPortraitButtons();
      }

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
                    this.getButtons()
                }
        </View>
        );
      }
}
export default App;

const btnWidth = Dimensions.get('window').width / 4;
const btnHeight = (Dimensions.get('window').height - 24) / 7;

const btnWidthLandscape = Dimensions.get('window').width / 6;
const btnHeightLandscape = (Dimensions.get('window').height - 24) / 7;


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
      width: btnWidthLandscape - 2,
      height: btnHeightLandscape - 2,
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginBottom: 2,
      marginRight: 2
    },

    twice: {
      backgroundColor: 'lime',
      backgroundColor: '#505050',
      width: 2 * btnWidthLandscape - 2,
      height: btnHeightLandscape - 2,
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginBottom: 2,
      marginRight: 2
    },

    header: {
      width: 6 * btnWidthLandscape,
      textAlign: 'right',
      paddingRight: 20,
      backgroundColor: '#1C1C1C',
      color: 'white',
      fontWeight: 'bold',
      height: btnHeightLandscape,
      fontSize: 30,
      paddingTop: 20
    },

    headerSecond: {
      width: 6 * btnWidthLandscape - 2,
      textAlign: 'right',
      paddingRight: 40,
      backgroundColor: '#1C1C1C',
      color: 'white',
      height: btnHeightLandscape - 2,
      fontSize: 18,
      marginBottom: 2,
      marginRight: 2,
      paddingTop: 20,
      opacity: 0.3
    },

    operation: {
      width: btnWidthLandscape - 2,
      height: btnHeightLandscape - 2,
      textAlign: 'center',
      fontSize: 30,
      backgroundColor:'#FF9500',
      color:'white',
      marginBottom: 2,
      marginRight: 2
    }
})
