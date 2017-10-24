import * as Nav from "./constants/NavigationConstants"

export function changeLocation(location, openedItem) {
  return (dispatch) => dispatch({ type: Nav.CHANGE_LOCATION, location, openedItem })
}

export function setOpenedItem(openedItem) {
  return (dispatch) => dispatch({ type: Nav.SET_OPENED_ITEM, openedItem })
}
