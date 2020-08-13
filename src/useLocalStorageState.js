import {useState, useEffect} from "react"

export const useLocalStorageState = (keyState, initialValue) => {
    const getInintialState = () => {
    const localStorageState = localStorage.getItem(keyState);
    return localStorageState ? JSON.parse(localStorageState) : initialValue
    
}
const [state, setState] = useState(getInintialState)

useEffect(() => {
    localStorage.setItem(keyState, JSON.stringify(state))
}, [state]);

return [state, setState] 
};