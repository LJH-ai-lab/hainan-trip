# 🌴 2026 海南自驾旅行计划

和朋友一起规划的互动式海南10天自驾旅行网站。不是死板的攻略，而是可以讨论、投票、调整的旅行计划。

## 功能特色

- 🗺️ **三种旅行方案**：Plan A（经典自驾）、Plan B（雨天备选）、Plan C（加三亚）
- 📋 **互动行程**：展开/收起每天详情，查看景点、美食、住宿、驾车信息
- 🗳️ **朋友投票**：想去/一般/跳过，一起讨论决定行程
- ❤️ **收藏功能**：收藏想去的地点、美食、住宿
- 🌤️ **天气提醒**：高温、海边暴晒、下雨应对、五指山特殊天气
- 🗺️ **路线地图**：海南方位图，路线连线动画，点击查看城市详情
- 🍜 **美食地图**：按城市整理，海口/万宁/五指山/三亚美食全收录
- 🏨 **住宿推荐**：各区域住宿对比，自驾停车指南
- 📱 **手机优先**：iPhone、微信内置浏览器完美适配
- 🎨 **海岛度假风**：海浪动画、卡片悬浮、滚动动效

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 Vercel

### 方法一：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 方法二：GitHub + Vercel

1. 将项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. Vercel 会自动识别 Vite 项目
4. 无需额外配置，直接部署

### 部署配置

项目使用 Vite 构建，Vercel 会自动：
- 构建命令：`npm run build`
- 输出目录：`dist`
- 安装命令：`npm install`

## 项目结构

```
hainan-trip/
├── index.html              # 入口 HTML
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
├── .gitignore
├── README.md
├── public/                 # 静态资源
└── src/
    ├── main.jsx            # 应用入口
    ├── App.jsx             # 主应用（路由、状态管理）
    ├── index.css           # 全局样式 & 动画
    ├── components/         # 组件
    │   ├── Header.jsx      # 顶部导航栏
    │   ├── Hero.jsx        # Hero 区域（海浪动画）
    │   ├── WeatherAlert.jsx # 天气提醒模块
    │   ├── PlanSwitcher.jsx # 方案切换器
    │   ├── DayCard.jsx     # 每日行程卡片
    │   ├── VotingPanel.jsx # 投票面板
    │   ├── MapView.jsx     # 地图组件
    │   ├── FoodCard.jsx    # 美食卡片
    │   ├── AccommodationCard.jsx # 住宿卡片
    │   ├── PlaceDetail.jsx # 地点详情弹窗
    │   ├── FavoritesList.jsx # 收藏列表
    │   ├── Footer.jsx      # 页脚
    │   └── ScrollReveal.jsx # 滚动显示动画
    ├── pages/              # 页面
    │   ├── HomePage.jsx    # 首页
    │   ├── ItineraryPage.jsx # 行程页
    │   ├── MapPage.jsx     # 路线地图页
    │   ├── FoodPage.jsx    # 美食页
    │   └── StayPage.jsx    # 住宿页
    └── data/               # 数据层
        ├── itinerary.js    # 行程方案数据
        ├── food.js         # 美食数据
        ├── stays.js        # 住宿数据
        └── weather.js      # 天气数据
```

## 技术栈

- React 18 + Vite
- 纯 CSS（无框架依赖）
- CSS 自定义属性（设计令牌）
- Hash 路由
- localStorage 数据持久化
- 移动端优先响应式设计

## 后续扩展预留

- 🤖 AI 聊天助手（FAB 按钮已就位）
- 🌤️ 天气 API 接口（数据层已结构化为 mockWeather）
- 🗺️ 地图 API 接口（可替换为高德/百度地图）
- 💬 用户评论区域
- 🔐 用户登录/分享协作

## 浏览器支持

- iOS Safari（iPhone）
- 微信内置浏览器
- Chrome / Edge / Firefox 最新版
- Android Chrome
