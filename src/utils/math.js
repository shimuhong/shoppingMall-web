/*
 * @Author: chendongdong dongdong.chen@abite.com
 * @Date: 2022-10-15 18:03:19
 * @LastEditors: chendongdong dongdong.chen@abite.com
 * @LastEditTime: 2022-10-15 19:50:20
 * @FilePath: /cotti-partner-app-h5/src/utils/math.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as $math from 'mathjs';
console.log('=====$math:', $math);
/**
 * 使用方式
 *
 * import { math } from '@/utils/math';

    math.js使用
    math.add(a+b)//加
    math.subtract(a-b)//减
    math.multiply(a*b)//乘
    math.divide(a/b)//除
 *
 */

export const math = {
  add () {
    return comp('add', arguments);
  },
  subtract () {
    return comp('subtract', arguments);
  },
  multiply () {
    return comp('multiply', arguments);
  },
  divide () {
    return comp('divide', arguments);
  },
  // ti + t2
  addTwo (t1, t2) {
    return parseFloat($math.format($math.chain(t1 || 0).add($math.bignumber(t2 || 0)).done()));
  },
  // ti - t2
  subtractTwo (t1, t2) {
    return parseFloat($math.format($math.chain(t1 || 0).subtract($math.bignumber(t2 || 0)).done()));
  },
  // ti X t2
  multiplyTwo (t1, t2) {
    return parseFloat($math.format($math.chain(t1 || 0).multiply($math.bignumber(t2 || 0)).done()));
  }
};

function comp (_func, args) {
  let t = $math.chain($math.bignumber(args[0]));
  for (let i = 1; i < args.length; i++) {
    t = t[_func]($math.bignumber(args[i]));
  }
  // 防止超过6位使用科学计数法
  return parseFloat(t.done());
}

