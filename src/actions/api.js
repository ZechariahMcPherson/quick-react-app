import axios from 'axios';

//todo api error handling


/*
  argsDict is a dictionary expecting the following format
  argsDict = {methodType: 'get/post', apiUrl: 'https://google.com', successText: 'GET_API_SUCCESS', failText: 'GET_API_FAILED', postData: {name: 'fred'}(optional param)}
*/

function callApi(argsDict)
{

  //enures that methodType is in lower case
  const methodTypeFormated = this.methodType.toLowerCase();

  let axiosSend =
  {
    method: _.isUndefined(argsDict['postData']) ? throw new Error('\'postData\' param is required') : argsDict['postData'],

    url: _.isUndefined(argsDict['apiUrl']) ? throw new Error('\'apiUrl\' param is required') : argsDict['apiUrl'],
  })

  if(!_.isUndefined(argsDict['postData']))
  {
    axiosSend['data'] = argsDict['postData'];
  }


  axios(axiosSend);

}
