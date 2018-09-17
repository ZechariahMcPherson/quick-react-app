
//todo deal with failed apis

export default function homeComponentReducer(state = [], action) {
  switch (action.type) {
    case 'GET_STARWARS_SUCCESSS':
    return(
        {
          starWarsApiData: null
        }
      );
    case 'GET_STARWARS_FAILED':
    return({
        starWarsApiData: null
      });
    default:
      return state
  }
}
