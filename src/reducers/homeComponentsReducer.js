
/*
export default function homeComponent(state = [], action) {
  switch (action.type) {
    case 'GET_STARWARS_SUCCESSS':
      return({
          starwarsApiData: this.action.value
        });
    case 'GET_STARWARS_FAILED':
    return({
        starwarsApiData: null
      });

    default:
      return state
  }
}
*/

export default function homeComponent(state = 0, action) {
  switch (action.type) {
    case 'GET_STARWARS_SUCCESSS':
    return({
        starwarsApiData: this.action.value
      });
    case 'GET_STARWARS_FAILED':
    return({
        starwarsApiData: null
      });
    default:
      return state
  }
}
