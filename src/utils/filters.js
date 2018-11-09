import dayjs from 'dayjs';

export default {
  install(Vue) {
    /**
     * @param {number} date 时间戳
     * @return {string} 2018-10-10 10:10:08
     */
    Vue.filter('date', date => {
      return dayjs(date).format('YY-MM-DD HH:mm:ss');
    });
  }
};
