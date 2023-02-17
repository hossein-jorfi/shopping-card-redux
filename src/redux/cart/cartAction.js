const addItem = product => {
     return {
          type: 'ADD_ITEM',
          payload: product
     }
}

const increase = product => {
     return {
          type: 'INCREASE',
          payload: product
     }
}

const decrease = product => {
     return {
          type: 'DECREASE',
          payload: product
     }
}

const removeItem = product => {
     return {
          type: 'REMOVE_ITEM',
          payload: product
     }
}

const checkOut = () => {
     return {
          type: 'CHECKOUT'
     }
}

const clear = () => {
     return {
          type: 'CLEAR'
     }
} 

export { addItem, increase, decrease, removeItem, checkOut, clear }