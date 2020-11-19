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
                     this.clear()
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
                isDot: false,
                expression: '0',
                operation: '',
                currentPart: '',
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
                const currState = this.state.currentPart.toString();
               if(currState && currState != '0') {
                   if (currState.indexOf(".") != -1) {
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
                        {this.state.expression}
                    </Text>
                    <Text style={this.getStyle().headerSecond}>
                        {this.state.operation}
                    </Text>
                        {this.getButtons()}
                </View>

                  );  
        }

        setNumber(stringNumber) {
            if (this.state.expression == '0') {
                this.setState({
                    expression: stringNumber,
                    operation: stringNumber,
                    currentPart: stringNumber
                });
             } else if (this.state.currentPart == '0') {
                this.setState({
                    expression: this.state.expression.slice(0, -1) + stringNumber,
                    operation: stringNumber,
                    currentPart: this.state.currentPart.slice(0, -1) + stringNumber
                });
             } else {
                this.setState({
                    expression: this.state.expression + stringNumber,
                    operation: stringNumber,
                    currentPart: this.state.currentPart + stringNumber
                });
             }
        }

        changeOperation(stringOperation) {
            if (!this.state.currentPart == '0') {
                this.setState({
                     expression: this.state.expression + ' ' + stringOperation + ' ',
                     operation: stringOperation,
                     currentPart: '',
                     isDot: false
                });
            }
        }

        calculate() {
            if (this.state.currentPart != '' && !this.isSingleNumber()) {
                 const result = eval(this.state.expression).toString();
                 this.setState({
                    expression: result,
                    operation: '=',
                    currentPart: result
                 });
                 this.searchDot();
            }
        }

        clear() {
            this.setState({
                expression: '0',
                operation: 'AC',
                currentPart: '0',
                isDot: false
            });
        }

        addDot() {
            if (!this.state.isDot) {
                this.setState({
                    expression: this.state.expression + '.0',
                    operation: '.',
                    currentPart: this.state.currentPart + '.0',
                    isDot: true
                });
            }
        }

        back() {
            if (this.state.expression != '0') {
                if (this.state.expression.length > 1) {
                    const oneCharPrevLast = this.state.expression.slice(-2, -1);
                    let resultExpression;
                    let resultCurrentPart;
                    if (oneCharPrevLast == '.') {
                       resultExpression = this.state.expression.slice(0, -2);
                       resultCurrentPart = this.state.currentPart.slice(0, -2);
                       this.setState({
                            isDot: false
                       });
                    } else if (oneCharPrevLast == ' ') {
                        resultExpression = this.state.expression.slice(0, -1);
                        resultCurrentPart = this.findTheLastPart(resultExpression);
                    } else {
                        resultExpression = this.state.expression.slice(0, -1);
                        resultCurrentPart = this.state.currentPart.slice(0, -1);
                    }

                    this.setState({
                        expression: resultExpression,
                        operation: 'del',
                        currentPart: resultCurrentPart
                    });
                } else if (this.state.expression.length == 1) {
                    this.setState({
                        expression: '0',
                        operation: 'del',
                        currentPart: '0',
                        isDot: false
                    });
                }
            } else {
                this.setState({
                    operation: ''
                });
            }
        }

        findTheLastPart(expression) {
            const indexOfFirst = expression.lastIndexOf(" ");

            if (indexOfFirst < 0) {
                return expression;
            }
            return expression.slice(indexOfFirst, expression.length);
        }

        countFactorial() {
            const expression = parseInt(eval(this.state.expression));
            const result = this.factorial(expression);
            this.setState({
                expression: result,
                operation: expression + '!',
                currentPart: result,
                isDot: false
            });
        }

        factorial(n) {
              if ((n == 0) || (n == 1)) {
                 return 1
              }

              return (n * this.factorial(n-1));
         }

           log() {
                const input = parseInt(eval(this.state.expression));
                const result = Math.log10(input).toString();

                this.setState({
                    expression: result,
                    operation: 'log(' + input + ')',
                    currentPart: result
                });

                this.searchDot();
           }

           ln() {
                const input = parseInt(eval(this.state.expression));
                const result = Math.log(input).toString();

                this.setState({
                    expression: result,
                    operation: 'ln(' + input + ')',
                    currentPart: result
                });

                this.searchDot();
           }

           pow10() {
                const input = parseInt(eval(this.state.expression));
                const result = Math.pow(10, input).toString();

                this.setState({
                    expression: result,
                    operation: '10^' + input + '',
                    currentPart: result
                });

                this.searchDot();
           }

           sqrt() {
                const input = parseInt(eval(this.state.expression));
                const result = Math.sqrt(input).toString();

                this.setState({
                    expression: result,
                    operation: '√',
                    currentPart: result
                });

                this.searchDot();
           }

           square() {
                const input = parseInt(eval(this.state.expression));
                const result = (input * input).toString();

                this.setState({
                    expression: result,
                    operation: input + ' * ' + input,
                    currentPart: result
                });

                this.searchDot();
           }

           cube() {
                const input = parseInt(eval(this.state.expression));
                const result = (input * input * input).toString();

                this.setState({
                    expression: result,
                    operation: input + ' * ' + input + ' * ' + input,
                    currentPart: result
                });

                this.searchDot();
           }

           exponential() {
                const input = eval(this.state.expression);
                const result = Math.exp(input).toString();

                this.setState({
                    expression: result,
                    operation: 'exp(' + input + ')',
                    currentPart: result
                });

                this.searchDot();
           }

            pi() {
                const PI = Math.PI.toString();
                const resultExpression = this.changeExpresionCurrentPart(PI);
                const resultCurrentPart = PI;

                this.setState({
                    expression: resultExpression,
                    operation: 'π',
                    currentPart: resultCurrentPart,
                    isDot: true
                });
           }

           changeExpresionCurrentPart(stringNewPart) {
                let expression = this.state.expression;
                const indexOfLast = expression.lastIndexOf(" ");

                if (indexOfLast < 0) {
                    return stringNewPart;
                }
                return expression.slice(0, indexOfLast).trim() + " " + stringNewPart;
           }

           negative() {
                const input = this.state.expression;
                const result = eval("- (" + input + ")").toString();

                this.setState({
                    expression: result,
                    operation: '- / +',
                    currentPart: result
                });
           }


            isSingleNumber() {
                const indexOfFirst = this.state.expression.lastIndexOf(" ");

                if (indexOfFirst >= 0) {
                    return false;
                }
                return true;
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

