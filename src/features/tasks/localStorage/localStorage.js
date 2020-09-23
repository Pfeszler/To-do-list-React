
export const saveToLocalStorage = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state))
}

export const getFromLocalStorage = (key, initialState) =>  JSON.parse(localStorage.getItem(key)) || initialState

