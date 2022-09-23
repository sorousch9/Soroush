export const reducer = (state, action) => {
 
    if (action.type === "CLOSE_SIDEBAR") {
      return { ...state, showAside1: false };
    }
    if (action.type === "OPEN_SIDEBAR") {
      return { ...state, showAside1: true };
    }
 
  
    throw new Error("The functionality is invalid");
  };
  