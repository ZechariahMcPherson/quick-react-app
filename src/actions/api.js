import axios from 'axios';
import _ from 'underscore';


/*
  argsDict is a dictionary expecting the following format
  argsDict = {methodType: 'get/post', apiUrl: 'https://google.com', successText: 'GET_API_SUCCESS', failText: 'GET_API_FAILED', postData: {name: 'fred'}(optional param)}
*/

/*
  todo rewrite for handling missing or incorrect param
  currently only handles happy path
*/
export function api(argsDict)
{

  console.log('axios api called');

  //enures that methodType is in lower case
  const methodTypeFormated = argsDict['methodType'].toLowerCase();

  var axiosSend =
  ({
    method: methodTypeFormated,

    url: argsDict['apiUrl']
  });

  //if it is a post api data field is reqiured
  if(!_.isUndefined(argsDict['postData']))
  {
    axiosSend['data'] = argsDict['postData'];
  }


  //beginning of error handling doesn't currently work
  /*

  //enures that methodType is in lower case
  const methodTypeFormated = this.methodType.toLowerCase();

  let axiosSend =
  {
    method: _.isUndefined(argsDict['postData']) ? throw ('\'postData\' param is required') : argsDict['postData'],

    url: _.isUndefined(argsDict['apiUrl']) ? throw ('\'apiUrl\' param is required') : argsDict['apiUrl']
  })

  if(!_.isUndefined(argsDict['postData']))
  {
    axiosSend['data'] = argsDict['postData'];
  }

  */


  return axios(axiosSend).then(result => console.log('Inside result:', result))

    //impliment later
    //.catch(error => console.error('(2) Inside error:', error))

}

export function apiGet(url)
{
  return axios.get(url).then(result => console.log('Inside result:', result))

    //impliment later
    //.catch(error => console.error('(2) Inside error:', error))

}
