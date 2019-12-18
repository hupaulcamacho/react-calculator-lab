import React from 'react'

const Calculator = (props) => {
    let { displayValue, handleButtonClick, getResult, clearInput, handlePercentClick, handlePeriodClick, handlePosNegClick, operation } = props
    return(
        <div className="calculator">
              <div className="row">
                  <input className="col-12 inputview" placeholder='0' value={displayValue}/>
                  {(operation ===  null) ? 
                        <button className="button col-3" value="AC" onClick={clearInput}>AC</button> :
                        <button className="button col-3" value="C" onClick={clearInput}>C</button>
                    }
                  
                  <button className="button col-3" value="%" onClick={handlePercentClick}>%</button>
                  <button className="button col-3" value="±" onClick={handlePosNegClick}>±</button>
                  <button className="button col-3 orange" value="/" onClick={handleButtonClick}>÷</button>
                  <button className="button col-3" value="7" onClick={handleButtonClick}>7</button>
                  <button className="button col-3" value="8" onClick={handleButtonClick}>8</button>
                  <button className="button col-3" value="9" onClick={handleButtonClick}>9</button>
                  <button className="button col-3 orange"  value="*" onClick={handleButtonClick}>X</button>
                  <button className="button col-3" value="4" onClick={handleButtonClick}>4</button>
                  <button className="button col-3" value="5" onClick={handleButtonClick}>5</button>
                  <button className="button col-3" value="6" onClick={handleButtonClick}>6</button>
                  <button className="button col-3 orange" value="-"onClick={handleButtonClick}>-</button>
                  <button className="button col-3" value="1" onClick={handleButtonClick}>1</button>
                  <button className="button col-3" value="2" onClick={handleButtonClick}>2</button>
                  <button className="button col-3" value="3" onClick={handleButtonClick}>3</button>
                  <button className="button col-3 orange" value="+" onClick={handleButtonClick}>+</button>
                  <button className="button col-6" value="0" onClick={handleButtonClick}>0</button>
                  <button className="button col-3" value="." onClick={handlePeriodClick}>.</button>
                  <button className="button col-3 orange" value="=" onClick={getResult}>=</button>
                  </div>
          </div>
    )
}

export default Calculator