import { SHOWING_LIST, WILL_SHOW_LIST } from '../constants/counter'

const INITIAL_STATE = {
  showingList: [],//正在上映
  willShowList: []//即将上映
}

export default function movieList (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOWING_LIST:
      return { 
        ...state, 
        showingList: action.showingList 
      }
    case WILL_SHOW_LIST:
      return { 
        ...state, 
        willShowList: action.willShowList
      }
     default:
       return state
  }
}
