# 使用ts开发第三方包的模板库

## 本地环境

- node版本建议大于10.0
- typescript版本建议大于3.7

注：**编辑器需要安装eslint、prettier等常用格式化工具**

## 命令

- 本地开发 `npm start`
- 打包 `npm run build`
- 测试 `npm run test`

## 发布

执行`npm publish`

## 说明

- 发布到npm时，默认没有上传src目录，只上传了dist目录，需要开启，在`package.json.files`里增加
- 详细配置请查看`package.json` `.npmignore`等文件
- 可以在`examples/`目录下进行库的测试

## 参考

脚手架

- <https://github.com/jaredpalmer/tsdx>
- <https://github.com/jsynowiec/node-typescript-boilerplate>
