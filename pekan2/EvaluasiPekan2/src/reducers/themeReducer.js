export const themeReducer = (state, action) => {
   switch (action.type) {
      case "CHANGE_THEME":
         return state === "light" ? "dark" : "light";

         default:
            return state;
   } 

}