import {api, apiGet} from "./api.js";

/*
  api fucntion is expecting the following format
  argsDict = {methodType: 'get/post', apiUrl: 'https://google.com', successText: 'GET_API_SUCCESS', failText: 'GET_API_FAILED', postData: {name: 'fred'}(optional param)}
*/

export function getStarWarsData2(urlAddress)
{
  console.log("called getStarWarsData")
  let url ="https://swapi.co/api/" + urlAddress;

  let request = api({methodType: 'get', apiUrl: url, successText: 'GET_STARWARS_SUCCESSS', failText: 'GET_STARWARS_FAILED'});

  return{
    type: 'GET_STARWARS_SUCCESSS',
    payload: request
  };
}


export function getStarWarsData(urlAddress) {
  let url ="https://swapi.co/api/" + urlAddress;
  let request = apiGet(url);

  return{
    type: 'GET_STARWARS_SUCCESSS',
    payload: request
  };

}
