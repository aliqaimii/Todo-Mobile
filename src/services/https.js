import axios from "axios";

export const Get = (token, url) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const Get2 = (url) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const Post = (token, url, body, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, body, {
        params: params,
        headers: {
          "Content-Type": "application/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const Delete = (token, url, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .delete(url, {
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const Put = (token, url, body, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .put(url, body, {
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
