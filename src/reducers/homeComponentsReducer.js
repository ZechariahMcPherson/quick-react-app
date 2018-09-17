
//todo deal with failed apis

export default function homeComponent(state = 0, action) {
  switch (action.type) {
    case 'GET_STARWARS_SUCCESSS':
    return({
        starwarsApiData: this.action.name
      });
    case 'GET_STARWARS_FAILED':
    return({
        starwarsApiData: null
      });
    default:
      return state
  }
}
