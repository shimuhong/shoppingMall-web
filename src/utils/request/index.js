import axios from 'axios';
import { createApp } from 'vue';
import { ElMessage } from 'element-plus'
import { useOnline } from '@vueuse/core';

import _ from 'lodash';
import { iconUrl } from './base64';
const app = createApp();
app.use(ElMessage);
const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
instance.defaults.headers['Content-Type'] = 'application/json';



// 请求头信息获取及处理
const getParams = config => {
  const { url, method = 'POST', data = {}, operateBusy = false } = config;

  if (url && typeof url !== 'string') return false;
  const headers = { ...config.headers };

  try {
    let option = {
      url,
      method,
      headers,
      operateBusy,
    };
    if (method == 'GET') {
      option = { ...option, params: data };
    } else {
      option = { ...option, data };
    }
    const realConfig = {
      loading: config.loading,
      responseType: 'json',
      responseEncoding: 'utf8',
      timeout: 30000,
      ...option,
    };
    return Promise.resolve(realConfig);
  } catch (error) {
    return Promise.reject(error);
  }
};

// const showNetErrorElMessage = _.debounce(() => {
//   ElMessage({
//     message: '网络不给力',
//     icon: iconUrl
//   });
// }, 200);
// 添加请求拦截器
instance.interceptors.request.use(
  async function (config) {
    if (useOnline().value == false) {
      // showNetErrorElMessage();
      return Promise.reject();
    }

    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    // if (subjectShopListCount && subjectShopListCount > 0) {
    //   config.headers.shopMdCode = shopMdCode || 'all';
    // }

    // 由于有的接口有时候返回将近20秒 lodding自动显示取消延长到21秒
    if (config.loading) {
      console.log('加载中')
      // ElMessage.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   duration: 30000
      // });
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // console.log('response', response);
    // ElMessage.clear();
    if (response.status == 200) {
      const { code, message, data, status } = response.data || {};
      if (code == 200) {
        return Promise.resolve(response.data);
      } else if (code == 401) {
        console.log('401:session time out');
        return Promise.reject(response.data);
      } else if (status == 0) {
        return Promise.resolve(response.data);
      } else {
        if (!response.config.operateBusy) {
          ElMessage(message);
        }
        return Promise.reject(response.data);
      }
    } else {
      return Promise.reject(response.data || 'error');
    }
  },
  function (error) {
    // ElMessage.clear();
    console.log('response error', error);
    return Promise.reject(error);
  }
);

const http = async config => {
  const newConfig = await getParams(config);
  const request = instance.request(newConfig);
  return new Promise((resolve, reject) => {
    request
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default http;

