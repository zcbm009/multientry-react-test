# 主要内容

### 练习目的

测试关于多入口项目应用的创建，即存在多个页面，多个入口，而不是单页面应用

### 练习说明

创建多个html页面，分为主页、帮助页面、个人信息页面，测试一下多页面应用的使用。实现多个页面的单独渲染以及页面跳转。

### 遇到的问题

1. 进行react多页面入口的创建思路与过程
   1. [参考内容一](https://blog.csdn.net/qq_38036198/article/details/111251416)
   2. [参考内容二](https://blog.csdn.net/zhengjie0722/article/details/108475854)

        创建应用➜暴露出webpack配置并重新安装安装依赖➜修改入口文件配置以及html模板（HtmlWebpackPlugin）配置➜`npm run build`进行调试直至打包内容出现➜优化并运行`npm run start`命令测试
2. 多入口配置后，build项目时出现`Cannot read property ‘filter’ of undefined`问题
   1. [参考解决方案](https://blog.csdn.net/q1519187064/article/details/105842481)
      
      主要是在webpack.config.js文件中，存在一个`WebpackManifestPlugin`的配置，其中关于generate的代码存在问题，由于原来是单页面应用，后来改成了多页面应用，入口列表就变化了，所以出现了此问题，解决方式是将generate注释掉使用默认的内容，或者自己去处理逻辑。


### 修改要点

1. 项目在eject之后需要重新运行`npm run install`安装依赖
2. 主要修改内容有入口配置以及htmlWebPackPlugin插件列表的配置
3. 项目入口及相关路径配置在`paths`文件下
4. 添加了`multiEntry.js`文件来处理新的入口，如果要添加入口则需要在pageList上添加入口名称
5. 关于`index`模块的内容没有做多大的改变，只是改变了一下路径，该模块与其他模块单独处理，不放到`multiEntry`中处理




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


