// Get Api Request Structure
const getFetchSecuredGETClient = url => {
  let defaultHeader = {
    'content-type': 'application/json',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    Authorization: 'Bearer ' + global.accessToken,
  };
  console.log('defaultHeader >>', defaultHeader);
  return fetch(url, {method: 'GET', headers: defaultHeader})
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseJson]) =>
      Promise.resolve([response, responseJson]),
    )
    .catch(error => Promise.reject(error));
};

// Post Api Request Structure
const getFetchSecuredPOSTClient = (url, params) => {
  let defaultHeader = {
    'content-type': 'application/json',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    Authorization: 'Bearer ' + global.accessToken,
  };
  console.log('defaultHeader >>', defaultHeader);
  return fetch(url, {
    method: 'POST',
    headers: defaultHeader,
    body: JSON.stringify(params),
  })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseJson]) =>
      Promise.resolve([response, responseJson]),
    )
    .catch(error => Promise.reject(error));
};

// Put Api Request Structure
const getFetchSecuredPUTClient = (url, params, dataType) => {
  let defaultHeader = {
    'content-type':
      dataType === 'formData' ? 'multipart/form-data' : 'application/json',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    Authorization: 'Bearer ' + global.accessToken,
  };
  console.log('defaultHeader >>', defaultHeader);
  return fetch(url, {
    method: 'PUT',
    headers: defaultHeader,
    body: dataType === 'formData' ? params : JSON.stringify(params),
  })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseJson]) =>
      Promise.resolve([response, responseJson]),
    )
    .catch(error => Promise.reject(error));
};

// Export All Api Request Structure (GET, POST, PUT)
export default {
  getSecuredGET(url) {
    return getFetchSecuredGETClient(url)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getSecuredPOST(url, params) {
    return getFetchSecuredPOSTClient(url, params)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getSecuredPUT(url, params, dataType) {
    return getFetchSecuredPUTClient(url, params, dataType)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
};
