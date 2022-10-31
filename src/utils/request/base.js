export function delayIt(fn, { delay = 100 } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn());
      } catch (ex) {
        reject(ex);
      }
    }, delay);
  });
}

export const AppType = 2; // 渠道伙伴APP