Étude Op. 10, No. 9
===================

# 目的 #
ボウリングゲームnode.js実装

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |7.3.0    |             |
| npm            |3.10.10  |             |
| yarn           |0.18.1   |             |
| vagrant        |1.8.7    |             |
| docker         |1.12.5    |             |
| docker-compose |1.8.0    |             |

# 構成 #
1. [構築](#構築)
1. [配置](#配置)
1. [開発](#開発)

## 構築
```bash
vagrant up
vagrant ssh
cd /vagrant
npm init -y
npm install babel-core babel-preset-es2015 babel-plugin-transform-flow-strip-types --save-dev
npm install mocha --save-dev
npm install power-assert babel-plugin-espower --save-dev
npm install gulp gulp-babel babel-plugin-transform-runtime babel-plugin-add-module-exports --save-dev
npm install gulp-mocha rimraf --save-dev
```
**[⬆ back to top](#構成)**

## 配置
```bash
npm install --save-dev publish
npm adduser
npm run build
npm publish
```
CircleCIに以下の環境変数を追加する　
+ NPM_USERNAME
+ NPM_EMAIL
+ NPM_PASSWORD

`circle.yml`を追加する

**[⬆ back to top](#構成)**

## 開発
**[⬆ back to top](#構成)**

# 参照 #
+ [アジャイルソフトウェア開発の奥義 第2版 オブジェクト指向開発の神髄と匠の技](https://www.amazon.co.jp/%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%E3%81%AE%E5%A5%A5%E7%BE%A9-%E7%AC%AC2%E7%89%88-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E9%96%8B%E7%99%BA%E3%81%AE%E7%A5%9E%E9%AB%84%E3%81%A8%E5%8C%A0%E3%81%AE%E6%8A%80-%E3%83%AD%E3%83%90%E3%83%BC%E3%83%88%E3%83%BBC%E3%83%BB%E3%83%9E%E3%83%BC%E3%83%81%E3%83%B3/dp/4797347783)
+ [3時間でできるnpmモジュール](http://qiita.com/cognitom/items/75736e27cc7de151a7d5#packagejson)
+ [get-package-readme](https://github.com/feross/get-package-readme)
+ [Automatically publish to NPM](https://glebbahmutov.com/blog/automatically-publish-to-npm/)
