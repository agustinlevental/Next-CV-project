interface Interest {
    id: number;
    name: string;
  }
  
  interface State {
    interests: Interest[];
    nextId: number;
  }
  
  type Action =
    | { type: "addInterest"; interest: Omit<Interest, "id"> }
    | { type: "modifyInterest"; interest: Interest }
    | { type: "deleteInterest"; id: number };
  
  export const interestsReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "addInterest":
        const newInterest = { ...action.interest, id: state.nextId };
        return {
          ...state,
          interests: [...state.interests, newInterest],
          nextId: state.nextId + 1,
        };
  
      case "modifyInterest":
        return {
          ...state,
          interests: state.interests.map((interest) =>
            interest.id === action.interest.id ? action.interest : interest
          ),
        };
  
      case "deleteInterest":
        return {
          ...state,
          interests: state.interests.filter((interest) => interest.id !== action.id),
        };
  
      default:
        return state;
    }
  };
  