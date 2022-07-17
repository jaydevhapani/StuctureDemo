import client from '../api';
import * as ApiConstants from '../common/apiconstants';

const TAG = 'APIHelper := ';

//Api Call Function
const makeApiCall = (onSuccess, onFailure, url, method, data, dataType) => {
  console.log('makeApiCall url:>>', url);
  console.log('makeApiCall data:>>', data);
  if (method === 'GET') {
    client
      .getSecuredGET(url)
      .then(response => onSuccess(response))
      .catch(error => onFailure(error));
  } else if (method === 'POST') {
    client
      .getSecuredPOST(url, data)
      .then(response => onSuccess(response))
      .catch(error => onFailure(error));
  } else if (method === 'PUT') {
    client
      .getSecuredPUT(url, data, dataType)
      .then(response => onSuccess(response))
      .catch(error => onFailure(error));
  }
};

//All Api Calls
export default {
  // doLogin(params, onSuccess, onFailure) {
  //   console.log(TAG, 'doLogin');
  //   let url = ApiConstants.LOGIN;
  //   makeApiCall(
  //     successResponse => onSuccess(successResponse),
  //     error => onFailure(error),
  //     url,
  //     'POST',
  //     params,
  //   );
  // },
};
