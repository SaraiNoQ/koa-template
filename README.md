# 基于Koa2.js的简单web服务器框架

## 安装

> 本项目使用[pnpm](https://www.pnpm.cn/)安装，如果您使用的是NPM或Yarn，请使用如下命令：
```bash
npm install -g pnpm
```

```bash
pnpm install && node index.js
```

## 目录结构

├─src
│  ├─app # 应用代码
│  │      error.js
│  │      index.js
│  │
│  ├─config # 配置文件
│  │      config.default.js
│  │      config.development.js
│  │      config.production.js
│  │
│  ├─constants # 常量文件
│  │      err.type.js
│  │
│  ├─controller # 控制器
│  │      test.controller.js
│  │
│  ├─db # 数据库目录
│  │      seq.js
│  │
│  ├─middleware # 中间件
│  │      index.middleware.js
│  │      test.middleware.js
│  │
│  ├─model # 数据模型层
│  ├─router # 路由
│  │      index.js
│  │      test.router.js
│  │
│  └─service # 业务逻辑层
├─static
|   └─images # 图片文件夹
└─.vscode
    └─extension.json # 插件配置文件
