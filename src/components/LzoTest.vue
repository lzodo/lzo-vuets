<template>
    <div class="lzo-test" id="lzo">
        <input type="text" v-focus="true" />
        {{ num }}
        {{ object.foo }}

        <table>
            <!--自己的组件不适合这里，通过is 正常应用进来-->
            <tr is="vue:my-row-component"></tr>
        </table>
    </div>
</template>

<script lang="ts">
import { h, defineComponent, useCssModule, ref, reactive } from "vue";

export default defineComponent({
    emits: ["check"],
    expose: ["increment"], // increment 将被暴露
    data() {
        return {
            count: 0,
            aa:"bb"
        };
    },
    created() {
        this.$emit("check");

        // property
        console.log(this.$data,"$data")
        console.log(this.$parent,"$parent")
        console.log(this.$el,"$el")
        console.log(this.$root,"$root");

        // 实力方法
        setTimeout(()=>{
            // 迫使组件重新渲染
            this.$forceUpdate
        },8000)
        
    },
    methods: {
        increment() {
            this.count++;
        },
    },
    inject: ["forre"], // 接收父组件的 provide
    setup(props: any, context: any) {
        let num = ref(0);
        const object = reactive({ foo: "bar" });
        console.log(props);
        console.log(context);
        console.log(num.value);
        console.log(object.foo);

        // const style = useCssModule();
        // console.log(style.success);
        // console.log(style.bb);
        // console.log(style.aa);

        return {
            num,
            object,
        };
        // return () =>
        //     h(
        //         "div",
        //         {
        //             class: style.success,
        //         },
        //         "Task complete!"
        //     );
    },
});
</script>

<style module>
.success {
    color: #090;
}
.aa {
    color: #f00;
}
.bb {
    color: #0ff;
}
</style>
