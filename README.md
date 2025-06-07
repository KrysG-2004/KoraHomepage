# Kora Homepage 

这是 Kora AI 的官方主页项目，在不改变原本风格的基础上，提供了更流畅的用户体验和精美的视觉效果。

## 主要更改
1. 解决了移动端适配问题，响应式设计，支持各种设备尺寸
2. 解决了第一页动画加载时的卡顿，和refresh时动画出现的延时
3. 3D 交互效果，增加了页面加载特效
4. 增加了滚动触发动画
5. 流畅的页面过渡动画
6. 每一个button都增加了悬浮特效
7. 平滑滚动体验

## 技术栈
- **前端框架**: React 19
- **开发语言**: TypeScript
- **构建工具**: Vite
- **样式解决方案**: TailwindCSS
- **3D 渲染**: Three.js (@react-three/fiber, @react-three/drei)
- **动画效果**: 
  - Framer Motion
  - GSAP
  - Locomotive Scroll (平滑滚动)

## 开发环境要求
- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

## 安装
1. 克隆项目到本地：
```bash
git clone [项目地址]
```

2. 安装依赖：
```bash
npm install
# 或
yarn install
```

## 开发命令
```bash
# 启动开发服务器
npm run dev
# 或
yarn dev

# 构建生产版本
npm run build
# 或
yarn build

# 预览生产构建
npm run preview
# 或
yarn preview
```

## 项目结构
```
kora-home/
├── src/           # 源代码目录
├── public/        # 静态资源
├── dist/          # 构建输出目录
└── ...配置文件
```

## 贡献指南
1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 联系方式
- Krys Gao : krysyyds@gmail.com
