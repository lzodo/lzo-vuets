

const install = function (app: any) {
    
    app.mixin({
        created() {
        //    console.log("mixinxxxxxxx")
        }

    })
}
export default install

/**
 * 不建议在应用代码中使用
 * 全局 main 引入，局部 mixins:[xxx]
 * mixin 合并策略，，，一旦注册，它们就可以在当前的应用中任何组件模板内使用它
 * 项目中每个组件都会载入这些
 * 插件作者 可以使用此方法将自定义行为注入组件。
 */