const initialState = {
     selectedItems: [],
     itemsCounter: 0,
     total: 0,
     checkOut: false
}

const cartReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'ADD_ITEM':
               if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                    state.selectedItems.push({
                         ...action.payload,
                         quantity: 1,
                    })
               }
               return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    itemsCounter: state.itemsCounter + 1,
                    total: state.total + action.payload.price,
                    checkOut: false
               }

          case 'REMOVE_ITEM':
               const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
               return {
                    ...state,
                    selectedItems: newSelectedItems,
                    itemsCounter: state.itemsCounter - 1,
                    total: state.total - action.payload.price,
                    checkOut: false
               }

          case 'INCREASE':
               const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
               state.selectedItems[indexI].quantity++;
               return {
                    ...state,
                    itemsCounter: state.itemsCounter + 1,
                    total: state.total + action.payload.price
               }

          case 'DECREASE':
               const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
               state.selectedItems[indexD].quantity--;
               return {
                    ...state,
                    itemsCounter: state.itemsCounter - 1,
                    total: state.total - action.payload.price
               }

          case 'CHECKOUT':
               return {
                    ...initialState,
                    checkOut: true
               }

          case 'CLEAR':
               return initialState

          default: return state
     }
}

export default cartReducer