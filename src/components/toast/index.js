import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast').default);

let id = 0;

ToastConstructor.prototype.close = function() {
  this.show = false;

  this.$el.addEventListener('transitionend', () => {
    this.$destroy();
    this.$el.parentNode.removeChild(this.$el);
  });
};

const Toast = ({ message = '', duration = 3000 }) => {
  const instance = new ToastConstructor({
    propsData: {
      message
    }
  }).$mount();

  instance.id = `toast_${id++}`;
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.$el.style['z-index'] = id + 1000;
    instance.show = true;

    setTimeout(() => {
      instance.close();
    }, duration);
  });

  return instance;
};

export default Toast;
