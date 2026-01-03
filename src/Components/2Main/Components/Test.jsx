import React, { useState } from 'react';

// Top-level custom hook
function useCounter(initial) {
  const [counterValue, setCounterValue] = useState(initial);

  // function to control state updates
  const controlCounterValue = (controlCounterValueFunctionality) => {
    switch (controlCounterValueFunctionality) {
      case "increment":
        setCounterValue(prev => ({
          ...prev,
          value: prev.value + 1 <= 2 ? prev.value + 1 : prev.value,
          stepValue: prev.stepValue + 1 <= 2 ? prev.stepValue + 1 : prev.stepValue ,
        }));
        break;
      case "reset":
        setCounterValue(initial);
        break;

      case "decrement":
        setCounterValue(prev => ({
          ...prev,
          value: prev.value > 0 ? prev.value - 1 : 0,
          stepValue: prev.stepValue - 1 > 1 ? prev.stepValue - 1 : 1 ,
        }));
        break;
        
      default:
        break;
    }
  };

  return { counterValue, controlCounterValue };
}


const Test = () => {
  const { counterValue, controlCounterValue } = useCounter({value: 0, stepValue: 1, maxValue: 2});
  
  return (
    <nav className="relative p-4 border-b text-white w-screen h-screen bg-black">
      <p>Count: {counterValue.value} stepValue: {counterValue.stepValue} maxValue: {counterValue.maxValue}</p>
      <button onClick={() => controlCounterValue("decrement")}>decrement</button>
      <br></br>
      <button onClick={() => controlCounterValue("increment")}>increment</button>
      <br></br>
      <button onClick={() => controlCounterValue("reset")}>Reset</button>
    </nav>
  );
};

export default Test;


/*Steps
1 create btns with concantation (const {x , concanctation})
2 declare the current value, a step value, and a max limit.(display)
3 top level func with switch
result: 2btn,displays  current value, a step value, and a max limit
*/

/*
Task:

Create a React component with a top-level custom hook that manages a counter with the following features:

The counter has a current value, a step value, and a max limit.

The hook should provide:

count → current value

increment → increases by the step but never exceeds max

reset → resets to initial value

The component should have:

A button to increment

A button to reset

Display the current count and step

The step value should be configurable when calling the hook

This adds conditional logic, multiple returned functions, and configurable parameters, making it harder than a simple on/off toggle.
*/