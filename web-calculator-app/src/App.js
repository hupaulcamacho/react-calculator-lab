import React, { Component } from 'react';
import { create, all } from 'mathjs'
import './App.css';
import Calculator from './Components/Calculator'

const config = {
  number: 'number'
}
const math = create(all, config)

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      isResult: false
    }
  }

  handleButtonClick = (event) => {
    let input = event.target.value
    if(isNaN(parseInt(input))){
      this.handleOperationClick(input)
    } else {
      this.handleNumberClick(input)
    }
  }

  handleNumberClick = (input) => {
    const waiting = this.state.waitingForNewValue
    const { displayValue, operation, isResult } = this.state
    if (waiting) {
      this.setState({
        previousValue: displayValue,
        displayValue: input,
        waitingForNewValue: false
      })
    } else if (operation === '=') {
      this.setState({
        displayValue: input
      })
    } else {
      let newNum = displayValue + input
      this.setState({
        displayValue: newNum
      })
    } 
  }

  handlePeriodClick = (event) => {
    let { displayValue } = this.state
    this.setState({
      displayValue: displayValue + '.'
    })
  }

  handleOperationClick = (input) => {
    this.setState({
      operation: input,
      waitingForNewValue: true
    })
  }

  handlePercentClick = () => {
    const { displayValue } = this.state
    let result = math.evaluate(displayValue / 100)
    this.setState({
      displayValue: result
    })
  }
  handlePosNegClick = () => {
    const { displayValue } = this.state
    let result = math.evaluate(0 - displayValue)
    this.setState({
      displayValue: result
    })
  }

  getResult = () => {
    const { displayValue, previousValue, operation } = this.state
    let result = math.evaluate(previousValue + operation + displayValue)

    if (operation === null || operation === '=') {
      alert('Dont do that..')
      return
    }
    this.setState({
      displayValue: result,
      previousValue: null,
      operation: '=',
      isResult: true
    })
  }

  clearInput = (event) => {
    let clearMethod = event.target.value
    console.log(clearMethod)
    const { previousValue } = this.state
    if (clearMethod === "C" ) {
      this.setState({
        displayValue: previousValue,
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })
    } else {
      this.setState({
        displayValue:'',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })
    }
    
  }

  render() {
    const { displayValue, operation } = this.state
    return (
      <div className="App">
        <Calculator 
        handleButtonClick={this.handleButtonClick}
        handlePercentClick={this.handlePercentClick}
        handlePeriodClick={this.handlePeriodClick}
        handlePosNegClick={this.handlePosNegClick}
        displayValue={displayValue}
        getResult={this.getResult}
        clearInput={this.clearInput}
        operation={operation}
        />
      </div>
    )
  }
}

export default App;
