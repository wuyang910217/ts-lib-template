import React from 'react';
import styles from './index.less';
import MyLib from '../../../dist/index.js';

window.MyLib = MyLib;

// 在下面编写你的lib测试
export default () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>用于lib包的测试</h1>
    </div>
  );
};
