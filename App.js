import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'

class App extends Component {
    constructor(props) {
      super(props);
      // STYLES:
      this.btnWidth = Dimensions.get('window').width / 4;
      this.btnHeight = (Dimensions.get('window').height - 24) / 7;

      this.state = {
        screen: Dimensions.get('window'),
        operations: '',
        result: '0',
        isDot: false,
        firstNumber: '0',
        isSecond: false,
        secondNumber: '0',
        lastOperation: ''
      };
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
                {this.getButtons()}
        </View>
        );
    }


}
export default App;