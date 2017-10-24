import * as Nav from "../actions/constants/NavigationConstants"

const initialState = {
  location: null,
  openedItem: null,
}

export default function hub(state = initialState, action) {

  switch (action.type) {

    case Nav.CHANGE_LOCATION:
      return { ...state, location: action.location, openedItem: action.openedItem }

    case Nav.SET_OPENED_ITEM: {
      return { ...state, openedItem: action.openedItem }
    }

    default:
      return state
  }

}
