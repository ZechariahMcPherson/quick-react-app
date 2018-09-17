const homeComponent = (state = [], action) => {
  switch (action.type) {
    case 'GET_STARWARS_SUCCESSS'
      return [
        ...state,
        {
          starwarsApiData: this.action.value;
        }
      ]

    case 'GET_STARWARS_FAILED'
    return[

        starwarsApiData: ;

      ]

    default:
      return state
  }
};
​
export default homeComponent;
