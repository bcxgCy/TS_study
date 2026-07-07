# 配置介绍

## include
 编译哪些文件

## exclude
  排除哪些文件

## module
  指定模块化规范,如何翻译import/export

### commonjs
  node环境使用，翻译为require/module.exports

### ES/ESNext
  适用Vite，vue，react等webpack常规项目

## lib
  注入哪些全局类型声明

## allowJs
  允许引入js文件

## checkJs
  是否检查JS文件

## declaration
  自动生成.d.ts文件

## declarationDir
  .d.ts文件输出路径，该文件是为了方式打包后类型丢失

## declarationMap
  生成映射文件，.d.ts.map文件是为了能够找到对应源码文件

## sourceMap
  生成源码映射文件，可调试对应源码

## noImplicitAny
  不允许隐式any

## strictNullChecks
  null检查, const a: CustomWindow = null; 会报错

## 
  