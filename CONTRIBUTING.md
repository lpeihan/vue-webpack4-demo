# 项目格式规范

## 源代码格式

- 缩进 2 个空格
- 文件末尾保留一个空行

## JavaScript 代码规范

[Standard JavaScript Style Guide](https://standardjs.com/rules.html)

## 命名规范

### 资源

小写加横杠分隔

- 文件名、文件夹名

```
foo-bar/foo-bar.js
```

- URL

```
http://foobar.com/foo-bar/1
```

- HTML 标签名、属性、ID、Class

```html
<foo-bar id="foo-bar" class="foo foo-bar" foo-bar="text"></foo-bar>
```

### 变量

驼峰命名

- 类名、数据模型名

大写开头驼峰命名

```js
const FooBar = require("foo-bar.js");

const fooBar = new FooBar();
```

- 变量名、方法名

小写开头驼峰命名

```js
function fooBar1() {}

const fooBar2 = {
  fooBar3: 0,
  fooBar4() {
    const fooBar5 = 1;
  }
};
```

### 数据结构

小写加下划线

- 数据模型字段

```js
{
	foo_bar: { type: String, default: '' }
}
```

- API 变量字段

```
http://foobar.com/foo-bar/:foo_bar_id
```

## GIT 提交规范

https://blog.csdn.net/ligang2585116/article/details/80284819

| title    | 说明                                                  |
| -------- | ----------------------------------------------------- |
| feat     | 新增功能                                              |
| fix      | 修复 bug                                              |
| docs     | 修改文档                                              |
| refactor | 代码重构，未新增任何功能和修复任何 bug                |
| build    | 改变构建流程，新增依赖库、工具等（例如 webpack 修改） |
| style    | 仅仅修改了空格、缩进等，不改变代码逻辑                |
| perf     | 改善性能和体现的修改                                  |
| chore    | 非 src 和 test 的修改                                 |
| test     | 测试用例的修改                                        |
| Ci       | 自动化流程配置修改                                    |
