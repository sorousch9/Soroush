export const reducer = (state, action) => {
 
    if (action.type === "CLOSE_SIDEBAR") {
      return { ...state, showAside1: false };
    }
    if (action.type === "OPEN_SIDEBAR") {
      return { ...state, showAside1: true };
    }
    if (action.type === "OPEN_NAVBAR") {
      return { ...state, openCloseNav1: true };
    }
    if (action.type === "CLOSE_NAVBAR") {
      return { ...state, openCloseNav1: false };
    }
  
    throw new Error("The functionality is invalid");
  };
  