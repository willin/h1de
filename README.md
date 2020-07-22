# h1de

优雅的方式隐藏你的敏感/隐私信息。 Hide your privacy elegantly.

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/h1de.svg)](https://npmjs.org/package/h1de) [![npm](https://img.shields.io/npm/dm/h1de.svg)](https://npmjs.org/package/h1de) [![npm](https://img.shields.io/npm/dt/h1de.svg)](https://npmjs.org/package/h1de) [![Maintainability](https://api.codeclimate.com/v1/badges/1ccaced4f791dc036d82/maintainability)](https://codeclimate.com/github/willin/h1de/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/1ccaced4f791dc036d82/test_coverage)](https://codeclimate.com/github/willin/h1de/test_coverage) [![Build Status](https://travis-ci.org/willin/h1de.svg?branch=master)](https://travis-ci.org/willin/h1de)

> 你的`关注`是我最大的动力。 Your `Star` is the best gift.

## 安装使用 Useage

### 命令行使用 In CLI

安装 Installation:

```bash
yarn add --global h1de
# or
npm install -g h1de
```

一次性使用：

```bash
npx h1de [command] [...params]
```

### 代码使用 In codes

```bash
yarn add h1de
# or
npm install --save h1de
```

Demo:

```js
const h1de = require('h1de');

h1de.tr('willin@willin.org', 'oO_~@#.+=');
// echo Oo__o#aOo__o#@+.~ | tr O.+#_o~a@ wronlig@.

hide.base64('willin@willin.org');
// echo d2lsbGluQHdpbGxpbi5vcmc= | base64 -d
```

## 文档 API Document

### tr(str[, mask_chars])

Params:

- str: 必填 Required
- mask_chars: 可选 Optional
  - 默认值 Default: `abcdefhijkmnprstwxyz2345678`
  - 重复字符会被过滤。 Ignore duplicate character.
  - 以下字符会被过滤： Ignore characters:
  - > #'`-

JS Demo:

```js
const h1de = require('h1de');

h1de.tr('willin@willin.org');
// echo hkzzkjrhkzzkjf3em | tr he3jzkmrf wronlig@.

h1de.tr('willin@willin.org', 'oO_~@#.+=');
// echo ~@OO@+.~@OO@+=o#_ | tr ~#o+O@_.= wronlig@.
```

CLI Demo:

```bash
h1de tr willin@willin.org
# echo Oo__o#aOo__o#@+.~ | tr O.+#_o~a@ wronlig@.
```

### base64(str)

Params:

- str: 必填 Required

JS Demo:

```js
const h1de = require('h1de');

h1de.base64('willin@willin.org');
// echo d2lsbGluQHdpbGxpbi5vcmc= | base64 -d
```

CLI Demo:

```bash
h1de base64 willin@willin.org
# echo d2lsbGluQHdpbGxpbi5vcmc= | base64 -d
```

## License

Apache 2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
