import api from "./api.js";

/*
  api fucntion is expecting the following format
  argsDict = {methodType: 'get/post', apiUrl: 'https://google.com', successText: 'GET_API_SUCCESS', failText: 'GET_API_FAILED', postData: {name: 'fred'}(optional param)}
*/

export function getStarwarsData(urlAddress)
{
  let url ="https://swapi.co/api/" + urlAddress;

  return(api({methodType: 'get', apiUrl: url, successText: 'GET_STARWARS_SUCCESSS', failText: 'GET_STARWARS_FAILED'}));
}
