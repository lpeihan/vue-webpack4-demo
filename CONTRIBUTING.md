# 项目规范

## 项目命名规范

### 资源

小写加横杠

- 文件夹、文件夹名

```
foo-bar/foo-bar.js;
```

- URL

```
http://foobar.com/foo-bar/id
```

变量字段

```
http://foobar.com/foo-bar/:foo_bar_id
```

- HTML 标签名、属性、ID、Class

```html
<foo-bar id="foo-bar" class="foo foo-bar" foo-bar="text"></foo-bar>
```

- Vue 文件命名

```
todo.vue; // 这个为入口文件
todo-list.vue;
todo-item.vue;
todo-header.vue;
todo-footer.vue;
```

## 变量

驼峰命名

- 构造函数、类名

```js
function Foo() {}
class Foo() {}

cosnt Foo = require('foo');
```

- 变量名、方法名

```js
const foo = 1;
const fooBar = 2;
```

- 常量

```js
const FOO_BAR = "FOO_BAR";
```

## GIT 提交规范

[**Angular 规范**](https://blog.csdn.net/ligang2585116/article/details/80284819)
