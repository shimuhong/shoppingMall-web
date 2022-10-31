
import moment from 'moment';
import { usePermission } from '../store/modules/permission';
import { useRouter } from 'vue-router';
export const getDateByDays = (num, time) => {
  var date = new Date();
  date = new Date(date.setDate(date.getDate() + num));
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var nowData = year + '-' + month + '-' + day + time;
  return nowData;
};
/*
 * @Description: 获取付款截止时间
 * @Author:  石木洪
 * @Date: 2022-09-13 19:55:25
 * @LastEditTime: 2022-09-13 19:55:25
 * @LastEditors:
 */
export const getRemainTime = (deadline, offsetMinutes = 0, options = {}) => {
  // deadline = '2022-04-22 16:00:12'
  if (!deadline) return false;
  const endDate = moment(deadline).add(offsetMinutes, 'minutes');
  const now = moment();
  const duration = moment.duration(endDate.diff(now));
  if (now.valueOf() > endDate.valueOf()) {
    return false;
  }
  if (duration.minutes() <= 0) {
    return `${duration.seconds()}秒`;
  }
  if (options.onlyMinutes && duration.minutes() > 0 /* 大于1分钟只显示分钟不显示秒 */) {
    return `${duration.minutes()}分`;
  }
  return `${duration.minutes()}分${duration.seconds()}秒`;
};

/**
 *  防抖 debounce
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @returns {Function}
 */

export const debounce = (excute, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      excute.apply(this, args);
    }, delay);
  };
};


/**
 *  节流 throttle
 * @param {Function} func
 * @param {Number} wait
 * @returns {Function}
 */
export const throttle = (func, wait = 200) => {
  let timeout = true;
  return function () {
    const context = this;
    if (!timeout) {
      return;
    }
    timeout = false;
    setTimeout(() => {
      func.apply(context, arguments);
      timeout = true;
    }, wait);
  };
};

// 合并数组
export const $mergeBy = function (list1 = [], list2, key, map = (i, j) => ({ ...i, ...j })) {
  if (!key) return Error('need key for mergeBy');
  if (!list1?.length) return list2;
  const list = [...list1];
  list2.forEach(i => {
    const index = list.findIndex((j) => j[key] == i[key]);
    if (index > -1) {
      list[index] = map(list[index], i);
    } else {
      list.push(i);
    }
  });
  return list;
};

export const routerBackRouter = (routerName, router) => {
  const permissionStore = usePermission();
  const routers = router || useRouter();
  permissionStore.toHome = routerName;
  routers.go(-1);
};

/**
    * 千分位函数处理
    * @param {*} num
    * utilFlag  是否加入单位
    * symbolFlag 是否加入符号
    *
    */
export const toThousands = (num, utilFlag = false, symbolFlag = false) => {
  if (num == 0) return (symbolFlag ? num >= 0 ? '+ ' : '- ' : '') + (utilFlag ? '¥ ' : '') + '0.00';
  if (num == undefined || num == null || num == '' || num == '--' || num == '-') return '--';
  return (symbolFlag ? num >= 0 ? '+ ' : '- ' : '') + (utilFlag ? '¥ ' : '') + (symbolFlag ? (parseFloat(Math.abs(num))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : parseFloat(num * 1).toFixed(2)).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

export const treeAddAll = (treeList, name, value) => {
  if (!treeList || treeList.length <= 0) return null;
  const newList = JSON.parse(JSON.stringify(treeList));

  newList.unshift({
    [name]: '全部',
    [value]: ''
  });
  return newList.map(item => {
    return {
      ...item,
      children: item.children && item.children.length > 0 ? treeAddAll(item.children, name, value) : undefined
    };
  });

};

export const specTotal = (list, mpuUseConver = 'mpuUseConver') => {
  if (!list || list.length <= 0) return '';
  let num = 0;
  list.map((item) => {
    num += item[mpuUseConver] && item.inventoryNum ? parseInt(item[mpuUseConver] * item.inventoryNum, 10) : 0;
  });

  return num;
};
