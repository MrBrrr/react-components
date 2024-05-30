// import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import { useCounter } from "../hooks/use-counter";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const HANDLE_SUBMIT = "handle-submit";

const reducer = (state, action) => {
    // console.log(action, state);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        case HANDLE_SUBMIT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        default:
            throw new Error(`Unsupported action type: ${action.type}`);
            // or return state;
        }
}

function CounterPage({ initialCount }) {
    // const { count, increment } = useCounter(initialCount);

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        // setCount(count + 1);
        dispatch({type: INCREMENT})
    }
    const decrement = () => {
        // setCount(count - 1);
        dispatch({type: DECREMENT})
    }
    
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // this is a string so have to be transformated into number -> parseInt
        // "" would resolve in NaN -> || 0

        // setValueToAdd(value);
        dispatch({type: SET_VALUE_TO_ADD, payload: value})
    }

    const handleSubmit = (event) => {
        // prevent default autosubmitting of a form by the browser 
        //  while rerendering - updating the valueToAdd by typing into input
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({type: HANDLE_SUBMIT})
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    value={state.valueToAdd || ""} 
                    // if valueToAdd is 0, it will be displayed as empty string
                    type="number"
                    onChange={handleChange} 
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
