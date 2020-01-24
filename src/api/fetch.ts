const getData = (uri: string) => {
  return fetch(uri).then(data => data.json())
};

const postData = (uri: string, data: {} = {}) => {
  return fetch(uri).then(data => data.json());
};

export { getData, postData };