# parcel-vue3jsx-template

## 启动

1. `yarn` or `npm i` or `pnpm i` 安装依赖
2. `yarn dev` or `npm run dev` 运行

## 说明

- 要启用 parcel 的自定义插件配置、中间件配置等，需要将`.parcelrc.json`改为`.parcelrc`，然后为其配置插件
- 代理：通过`.proxyrc.json`文件配置代理，可自行更改
- babel：通过`babel.config.json`配置 babel 插件
- 全局样式：`src/style.scss`为全局样式文件

# Pinia 状态管理

- 像使用 Mobx 一样使用 Pinia

1. 在 `store/modules` 下新建模块
2. 在 `store/index` 中注册模块
3. 使用
