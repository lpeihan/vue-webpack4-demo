import Vue from 'vue';

const DialogConstructor = Vue.extend(require('./dialog').default);

let id = 0;

const Dialog = (propsData) => {
  const instance = new DialogConstructor({
    propsData
  }).$mount();

  instance.id = `dialog_${id++}`;
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.open();
  });

  return new Promise((resolve, reject) => {
    instance.$on('confirm', resolve);
    instance.$on('cancel', reject);
  });
};

export default Dialog;
