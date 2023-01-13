import { Delete, Get, Get2, Post, Put } from "./https";

const BASE_URL = "https://todo-test.digitaltolk.com";

const USER_TOKEN = "Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK";

export const GetTasks = () => {
  let url = `${BASE_URL}/api/tasks`;

  return Get(USER_TOKEN, url);
};

export const GetCheckins = () => {
  let url = `${BASE_URL}/api/checkins`;

  return Get(USER_TOKEN, url);
};

export const GetLocationDetail = (lat, long) => {
  let url = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  url = url + `?latitude=${lat}&longitude=${long}&localityLanguage=en`;

  return Get2(url);
};

export const AddCheckin = (data) => {
  let url = `${BASE_URL}/api/checkins`;

  let formdata = new FormData();

  formdata.append("address", data?.address);
  formdata.append("latitude", data?.latitude);
  formdata.append("longitude", data?.longitude);

  return Post(USER_TOKEN, url, formdata);
};

export const AddTask = (data) => {
  let url = `${BASE_URL}/api/tasks`;

  let formdata = new FormData();

  formdata.append("title", data?.title);
  formdata.append("description", data?.description);
  formdata.append("status", "incomplete");
  formdata.append("due_at", data?.due_at);

  return Post(USER_TOKEN, url, formdata);
};

export const DeleteTask = (id) => {
  let url = `${BASE_URL}/api/tasks/ ${id}`;

  return Delete(USER_TOKEN, url);
};

export const UpdateTask = (id, data) => {
  let url = `${BASE_URL}/api/tasks/ ${id}`;

  let formdata = new FormData();

  formdata.append("title", data?.title);
  formdata.append("description", data?.description);
  formdata.append("status", "incomplete");
  formdata.append("due_at", data?.due_at);

  return Put(USER_TOKEN, url, formdata);
};

export const DeleteCheckin = (id) => {
  let url = `${BASE_URL}/api/checkins/ ${id}`;

  return Delete(USER_TOKEN, url);
};

export const UpdateCheckin = (id, data) => {
  let url = `${BASE_URL}/api/checkins/ ${id}`;

  let formdata = new FormData();

  formdata.append("address", data?.address);
  formdata.append("latitude", data?.latitude);
  formdata.append("longitude", data?.longitude);

  return Put(USER_TOKEN, url, formdata);
};
