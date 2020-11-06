import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform,  View, Text,  Image, TouchableOpacity, Alert } from 'react-native';


const Button = (props) => {
            button = props.button;
            stylesArr = props.styleArr[0];
            let buttonStyles = false;
            if (props.mode === 'landscape') {
                if (button.extended != false) {
                    if (!button.size) {
                        buttonStyles = button.class ? [stylesArr.btn, stylesArr.operation] : buttonStyles = [stylesArr.btn];
                    } else {
                        buttonStyles = [stylesArr.btn, stylesArr.twice];
                    }
                }
            } else {
                if(!button.extended) {
                    if (!button.size) {
                        buttonStyles = button.class ? [stylesArr.btn, stylesArr.operation] : buttonStyles = [stylesArr.btn];
                    } else {
                        buttonStyles = [stylesArr.btn, stylesArr.twice];
                    }
                }
            }

            if (buttonStyles) {
                return (
                    <TouchableOpacity key={button.id} onPress={button.action}>
                        <Text style={buttonStyles}>
                            {button.name}
                        </Text>
                    </TouchableOpacity>
                );
            } else {
                return null;
            }
      }

export default class Myapp extends Component<{}> {
       constructor(){  
            super();

            this.btnWidth = Dimensions.get('window').width / 4;
            this.btnHeight = (Dimensions.get('window').height - 24) / 7;

            // DATA ABOUT ALL BUTTONS:
            this.buttons = [
            {
                id: 19,
                action: () => {
                    this.back()
                },
                name: 'del',
                extended: true
            },
            {
                id: 20,
                action: () => {
                    this.countFactorial();
                },
                name: 'x!',
                extended: true
            },
            {
                id: 10,
                action: () => {
                     this.setState({
                         operations: '',
                         result: '0',
                         isDot: false,
                         currentOperation: '',
                         secondNumber: '0',
                         firstNumber: '0'
                     });
                },
                name: 'AC'
            },
            {
                id: 21,
                action: () => {
                    this.negative();
                },
                name: '±',
                extended: true
            },
            {
                id: 22,
                action: () => {
                    this.enterSecond();
                    this.changeOperation('%');
                },
                name: '%',
                extended: true
            },
            {
                id: 18,
                action: () => {},
                name: '',
                size: 2,
                extended: false
            },
            {
                id: 11,
                action: () => {
                    this.enterSecond();
                    this.changeOperation('/');
                },
                name: '/',
                class: 'operation'
            },
            {
                id: 23,
                action: () => {
                    this.exponential()
                },
                name: 'e^x',
                extended: true
            },
            {
                id: 24,
                action: () => {
                    this.pow10()
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
                    this.enterSecond();
                    this.changeOperation('*');
                },
                name: '*',
                class: 'operation'
            },
            {
                id: 25,
                action: () => {
                    this.ln()
                },
                name: 'ln',
                extended: true
            },
            {
                id: 26,
                action: () => {
                    this.log()
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
                    this.setNumber('6');
                }, name: '6'
            },
            {
                id: 14,
                action: () => {
                    this.enterSecond();
                    this.changeOperation('+');
                }, name: '+',
                class: 'operation'
            },
            {
                id: 27,
                action: () => {
                    this.sqrt();
                },
                name: '√',
                extended: true
            },
            {
                id: 28,
                action: () => {
                    this.square();
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
                    this.enterSecond();
                    this.changeOperation('-');
                }, name: '-',
                class: 'operation'
            },
            {
                id: 29,
                action: () => {
                    this.pi()
                },
                name: 'π',
                extended: true
            },
            {
                id: 30,
                action: () => {
                    this.cube();
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
                    this.addDot()
                }, name: ','
            },
            {
                id: 15,
                action: () => {
                    this.calculate();
                }, name: '=',
                class: 'operation'
            }
                    ];

            this.state = {
                isVisible : true,
                screen: Dimensions.get('window'),
                operations: '',
                result: '0',
                isDot: false,
                firstNumber: '0',
                isSecond: false,
                secondNumber: '0',
                lastOperation: ''
            }
      }



      Hide_Splash_Screen = () => {
            this.setState({
                isVisible : false
            });
      }  
       
      componentDidMount(){  
            const that = this;
            setTimeout(() => {
                that.Hide_Splash_Screen();
            }, 2000);
       }


       // FEATURES:
           searchDot() {
               if(this.state.result != '0') {
                   if (this.state.result.indexOf(".") != -1) {
                       this.setState({
               isDot: true
                       });
                   } else {
                       this.setState({
               isDot: false
                       });
                   }
               }
           }

           clearOperation() {
               this.setState({
                   operations: ''
               });
           }

           sqrt() {
               this.clearOperation();
               let input = parseFloat(this.state.result);
               this.setState({
                   operations: '√'
               });
               this.setOneOperation(Math.sqrt(input).toString());
           }

           square() {
               this.clearOperation();
               let input = parseFloat(this.state.result);
               this.setState({
                   operations: '(' + input + ')^2'
               });
               this.setOneOperation((input * input).toString());
           }

           cube() {
               this.clearOperation();
               let input = parseFloat(this.state.result);
               this.setState({
                   operations: '(' + input + ')^3'
               });
               this.setOneOperation((input * input * input).toString());
           }

           exponential() {
               this.clearOperation();
               let input = parseFloat(this.state.result);
               this.setState({
                   operations: 'exp(' + input + ')'
               });
               this.setOneOperation(Math.exp(input).toString());
           }

           setNumber(stringNumber) {
               this.clearOperation();
               if(!this.state.isSecond) {
                   if(this.state.firstNumber == '0') {
                       this.setState({
               firstNumber: stringNumber,
               result: stringNumber
                       });
                   } else {
                       let res = this.state.firstNumber + stringNumber;
                       this.setState({
               firstNumber: res,
               result: res
                       });
                   }
               } else {
                   if(this.state.secondNumber == '0') {
                       this.setState({
               secondNumber: stringNumber,
               result: stringNumber
                       });
                   } else {
                       let res = this.state.result + stringNumber;
                       this.setState({
               secondNumber: res,
               result: res
                       });
                   }
               }
           }

           countFactorial() {
               this.clearOperation();
               const input = parseInt(this.state.result);
               const result = this.factorial(input);
               this.setState({
                   operations: this.state.result + '!'
               });
               this.setOneOperation(result);
           }

           factorial(n) {
              if ((n == 0) || (n == 1))
                 return 1
              else {
                 var result = (n * this.factorial(n-1));
                 return result
              }
           }

           log() {
               this.clearOperation();
               const input = parseInt(this.state.result);
               this.setState({
                   operations: 'log10(' + input + ')'
               });
               this.setOneOperation(Math.log10(input).toString());
           }

           ln() {
               this.clearOperation();
               const input = parseInt(this.state.result);
               this.setState({
                   operations: 'ln(' + input + ')'
               });
               this.setOneOperation(Math.log(input).toString());
           }

           pow10() {
               this.clearOperation();
               const input = parseInt(this.state.result);
               this.setState({
                   operations: '10^(' + input + ')'
               });
               this.setOneOperation(Math.pow(10, input).toString());
           }

           addDot() {
               this.clearOperation();
               if (!this.state.isDot && this.state.result != '0') {
                   const input = parseInt(this.state.result);
                   this.setState({
                       operations: '.'
                   });
                   this.setOneOperation((input + ".0").toString());
               }
           }

           negative() {
               let input = parseFloat(this.state.result);
               this.setOneOperation(-input);
           }

           pi() {
               this.clearOperation();
               if (this.state.isSecond) {
                   this.setState({
                       secondNumber: Math.PI.toString(),
                       result: Math.PI.toString(),
                       operations: 'π'
                   });
               } else {
                   this.setState({
                       firstNumber: Math.PI.toString(),
                       result: Math.PI.toString(),
                       operations: 'π'
                   });
               }
           }

           enterSecond() {
               this.setState({
                   isSecond: true,
                   secondNumber: '0'
               });
               this.setResult('0');
           }

           setResult(x) {
               this.setState({
                   result: x
               });
           }

           setOneOperation(x) {
               if(this.state.isSecond) {
                   this.setState({
                       result: x,
                       secondNumber: x
                   });
               } else {
                   this.setState({
                       result: x,
                       firstNumber: x
                   });
               }
           }

           changeOperation(stringOperation) {
               this.setState({
                   operations: stringOperation,
                   currentOperation: stringOperation
               });
           }

           calculate() {
               let toOperate = false;
               if(!this.state.currentOperation || this.state.currentOperation == '') {
                   if(this.state.lastOperation && this.state.lastOperation != '') {
                       toOperate = this.state.lastOperation;
                   }
               } else {
                   if(this.state.currentOperation && this.state.currentOperation != '') {
                       toOperate = this.state.currentOperation;
                   }
               }
               switch(toOperate) {
                   case '/': this.divide(); break;
                   case '*': this.multiply(); break;
                   case '-': this.substract(); break;
                   case '+': this.add(); break;
                   case '%': this.mod(); break;
               }
           }

           divide() {
               let inputFirstNumber = parseFloat(this.state.firstNumber);
               let inputSecondNumber = parseFloat(this.state.secondNumber);
               let divided = inputFirstNumber / inputSecondNumber;
               this.finishResult(divided);
           }

           multiply() {
               let inputFirstNumber = parseFloat(this.state.firstNumber);
               let inputSecondNumber = parseFloat(this.state.secondNumber);
               let multiplied = inputFirstNumber * inputSecondNumber;
               this.finishResult(multiplied);
           }

           substract() {
               let inputFirstNumber = parseFloat(this.state.firstNumber);
               let inputSecondNumber = parseFloat(this.state.secondNumber);
               let substracted = inputFirstNumber - inputSecondNumber;
               this.finishResult(substracted);
           }

           add() {
               let inputFirstNumber = parseFloat(this.state.firstNumber);
               let inputSecondNumber = parseFloat(this.state.secondNumber);
               let added = inputFirstNumber + inputSecondNumber;
               this.finishResult(added);
           }

           mod() {
               let inputFirstNumber = parseFloat(this.state.firstNumber);
               let inputSecondNumber = parseFloat(this.state.secondNumber);
               let mod = inputFirstNumber % inputSecondNumber;
               this.finishResult(mod);
           }

           finishResult(x) {
               if (this.state.currentOperation != '') {
                   this.setState({
                       lastOperation: this.state.currentOperation
                   });
               }
               this.setState({
                   currentOperation: '',
                   operations: '=',
                   isSecond: false
               });
               this.setState({
                   result: x,
                   firstNumber: x
               });
           }

           back() {
               let str = this.state.result;
               if (str.length == 1) {
                   str = '0';
               } else {
                   str = str.substring(0, str.length - 1);
                   if (str.slice(-1) == '.') {
                       str = str.substring(0, str.length - 1);
                   }
               }
               if (this.state.isSecond) {
                   this.setState({
                       secondNumber: str,
                       result: str
                   });
               } else {
                   this.setState({
                       firstNumber: str,
                       result: str
                   });
               }
           }

           getOrientation(){
             if (this.state.screen.width > this.state.screen.height) {
               this.btnWidth = Dimensions.get('window').width / 6;
               this.btnHeight = (Dimensions.get('window').height - 24) / 7;
               return 'LANDSCAPE';
             } else {
               this.btnWidth = Dimensions.get('window').width / 4;
               this.btnHeight = (Dimensions.get('window').height - 24) / 7;
               return 'PORTRAIT';
             }
           }

           getStyle(){
             if (this.getOrientation() === 'LANDSCAPE') {
               return StyleSheet.create({
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
                             width: this.btnWidth - 2,
                             height: this.btnHeight - 2,
                             textAlign: 'center',
                             fontSize: 30,
                             color: 'white',
                             marginBottom: 2,
                             marginRight: 2
                           },

                           twice: {
                             backgroundColor: 'lime',
                             backgroundColor: '#505050',
                             width: 2 * this.btnWidth - 2,
                             height: this.btnHeight - 2,
                             textAlign: 'center',
                             fontSize: 30,
                             color: 'white',
                             marginBottom: 2,
                             marginRight: 2
                           },

                           header: {
                             width: 6 * this.btnWidth,
                             textAlign: 'right',
                             paddingRight: 20,
                             backgroundColor: '#1C1C1C',
                             color: 'white',
                             fontWeight: 'bold',
                             height: this.btnHeight,
                             fontSize: 30,
                             paddingTop: 20
                           },

                           headerSecond: {
                             width: 6 * this.btnWidth - 2,
                             textAlign: 'right',
                             paddingRight: 40,
                             backgroundColor: '#1C1C1C',
                             color: 'white',
                             height: this.btnHeight - 2,
                           	fontSize: 18,
                           	marginBottom: 2,
                             marginRight: 2,
                             paddingTop: 20,
                             opacity: 0.3
                           },

                           operation: {
                             width: this.btnWidth - 2,
                             height: this.btnHeight - 2,
                             textAlign: 'center',
                             fontSize: 30,
                           	backgroundColor:'#FF9500',
                             color:'white',
                             marginBottom: 2,
                             marginRight: 2
                           },
                         });
             } else {
               return StyleSheet.create({
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
                               width: this.btnWidth - 2,
                               height: this.btnHeight - 2,
                               textAlign: 'center',
                               fontSize: 30,
                               color: 'white',
                               marginBottom: 2,
                               marginRight: 2
                             },

                             twice: {
                               backgroundColor: '#505050',
                               width: 2 * this.btnWidth - 2,
                               height: this.btnHeight - 2,
                               textAlign: 'center',
                               fontSize: 40,
                               color: 'white',
                               marginBottom: 2,
                               marginRight: 2
                             },

                             header: {
                               width: 4 * this.btnWidth,
                               textAlign: 'right',
                               paddingRight: 20,
                               backgroundColor: '#1C1C1C',
                               color: 'white',
                               fontWeight: 'bold',
                               height: this.btnHeight,
                               fontSize: 30,
                               paddingTop: 20
                             },

                             headerSecond: {
                               width: 4 * this.btnWidth - 2,
                               textAlign: 'right',
                               paddingRight: 40,
                               backgroundColor: '#1C1C1C',
                               color: 'white',
                               height: this.btnHeight - 2,
                               fontSize: 18,
                               marginBottom: 2,
                               marginRight: 2,
                               paddingTop: 20,
                               opacity: 0.3
                             },

                             operation: {
                               width: this.btnWidth - 2,
                               height: this.btnHeight - 2,
                               textAlign: 'center',
                               fontSize: 30,
                               backgroundColor:'#FF9500',
                               color:'white',
                               marginBottom: 2,
                               marginRight: 2
                             }
                         });
             }
           }

           onLayout(){
             this.setState({screen: Dimensions.get('window')});
           }

           getButtons() {
             if (this.getOrientation() === 'LANDSCAPE') {
               return this.buttons.map(button => {
                    return <Button button={button} styleArr={[this.getStyle()]} key={button.id} mode='landscape' />
               });
             } else {
               return this.buttons.map(button => {
                return <Button button={button} styleArr={[this.getStyle()]} key={button.id} mode='portrait' />
               });
             }
           }

        render() {
            let Splash_Screen = (  
                 <View style={styles.SplashScreen_RootView}>
                     <View style={styles.SplashScreen_ChildView}>
                        <Image source={require('./images/loader.png')}
                            style={{width:'100%', height: '100%', resizeMode: 'contain'}}
                        />
                    </View>  
                 </View> )  
             return(
                 <View onLayout={this.onLayout.bind(this)} style={this.getStyle().container}>
                 {
                      (this.state.isVisible === true) ? Splash_Screen : null  
                 }
                    <Text style={this.getStyle().header}>
                        {this.state.result}
                    </Text>
                    <Text style={this.getStyle().headerSecond}>
                        {this.state.operations}
                    </Text>
                        {this.getButtons()}
                </View>

                  );  
        }  
    }


const styles = StyleSheet.create({
        SplashScreen_RootView: {
            zIndex: 999,
            justifyContent: 'center',  
            flex:1,  
            margin: 10,  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
        },

        SplashScreen_ChildView: {
            justifyContent: 'center',  
            alignItems: 'center',  
            backgroundColor: '#00BCD4',  
            flex:1,  
        },  
});

