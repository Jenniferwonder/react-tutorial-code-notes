---
Title: React Versions & Features
Topic:
  - React
Type: C
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-03-06
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 
Reviewed: 
Difficulty: 
status: 
Comment: 
aliases:
  - React Versions
---
# React Versions & Features
## React Versions
1）React 16.x的三大新特性 Time Slicing, Suspense，hooks

- 1. Time Slicing（解决CPU速度问题）使得在执行任务的期间可以随时暂停，跑去干别的事情，这个特性使得react能在性能极其差的机器跑时，仍然保持有良好的性能
- 2. Suspense （解决网络IO问题）和lazy配合，实现异步加载组件。 能暂停当前组件的渲染, 当完成某件事以后再继续渲染，解决从react出生到现在都存在的「异步副作用」的问题，而且解决得非
- 的优雅，使用的是「异步但是同步的写法」，我个人认为，这是最好的解决异步问题的方式
- 3. 此外，还提供了一个内置函数 componentDidCatch，当有错误发生时, 我们可以友好地展示 fallback 组件；可以捕捉到它的子元素（包括嵌套子元素）抛出的异常；可以复用错误组件。

2）React16.8

- 加入hooks，让React函数式组件更加灵活
- hooks之前，React存在很多问题
    - 1. 在组件间复用状态逻辑很难
    - 2. 复杂组件变得难以理解，高阶组件和函数组件的嵌套过深。
    - 3. class组件的this指向问题
    - 4. 难以记忆的生命周期
- hooks很好的解决了上述问题，hooks提供了很多方法
    - 1. useState 返回有状态值，以及更新这个状态值的函数
    - 2. useEffect 接受包含命令式，可能有副作用代码的函数。
    - 3. useContext 接受上下文对象（从React.createContext返回的值）并返回当前上下文值，
    - 4. useReducer useState的替代方案。接受类型为(state，action) => newState的reducer，并返回与dispatch方法配对的当前状态。
    - 5. useCallback 返回一个回忆的memoized版本，该版本仅在其中一个输入发生更改时才会更改。纯函数的输入输出确定性
    - 6. useMemo 纯的一个记忆函数
    - 7. useRef 返回一个可变的ref对象，其.current属性被初始化为传递的参数，返回的 ref 对象在组件的整个生命周期内保持不变。
    - 8. useImperativeMethods 自定义使用ref时公开给父组件的实例值
    - 9. useMutationEffect 更新兄弟组件之前，它在React执行其DOM改变的同一阶段同步触发
    - 10. useLayoutEffect DOM改变后同步触发。使用它来从DOM读取布局并同步重新渲染

3）React16.9

- 1. 重命名 Unsafe 的生命周期方法。新的 UNSAFE_ 前缀将有助于在代码 review 和 debug 期间，使这些有问题的字样更突出
- 2. 废弃 javascript: 形式的 URL。以 javascript: 开头的 URL 非常容易遭受攻击，造成安全漏洞。
- 3. 废弃 “Factory” 组件。 工厂组件会导致 React 变大且变慢。
- 4. act() 也支持异步函数，并且你可以在调用它时使用 await。
- 5. 使用 <React.Profiler> 进行性能评估。 在较大的应用中追踪性能回归可能会很方便

4）React16.13.0

- 1. 支持在渲染期间调用setState，但仅适用于同一组件
- 2. 可检测冲突的样式规则并记录警告
- 3. 废弃unstable_createPortal，使用createPortal
- 4. 将组件堆栈添加到其开发警告中，使开发人员能够隔离bug并调试其程序，这可以清楚地说明问题所在，并更快地定位和修复错误。

## Questions
### Version
#### [从旧版本的React升级到新版本的React有做过吗？有遇到过什么坑？](https://github.com/haizlin/fe-interview/issues/667)
#### [你用过React版本有哪些？](https://github.com/haizlin/fe-interview/issues/666)

### Feature
#### [说说你喜欢React的原因是什么？它有什么优缺点？](https://github.com/haizlin/fe-interview/issues/622)
#### [你最喜欢React的哪一个特性（说一个就好）？](https://github.com/haizlin/fe-interview/issues/873)
#### [你最不喜欢React的哪一个特性（说一个就好）？](https://github.com/haizlin/fe-interview/issues/871)
#### [经常用React，你知道React的核心思想是什么吗？](https://github.com/haizlin/fe-interview/issues/811)
#### [你觉得React上手快不快？它有哪些限制？](https://github.com/haizlin/fe-interview/issues/616)
#### [React与angular、vue有什么区别？](https://github.com/haizlin/fe-interview/issues/614)
#### [React是什么？它的主要特点是什么？](https://github.com/haizlin/fe-interview/issues/612)






