<template>
    <div class="lzo-test">
        <input type="text" v-focus="true" />
    </div>
</template>

<script lang="ts">
import { h, defineComponent, useCssModule } from "vue";

export default defineComponent({
    emits: ["check"],
    expose: ['increment'], // increment 将被暴露
    data(){
        return{
            count:0
        }
    },
    created() {
        this.$emit("check");
    },
    methods:{
        increment(){
            this.count++
        }
    },
    inject: ['forre'], // 接收父组件的 provide
    setup(a:any,b:any) {
        console.log(a,22222222222);
        console.log(b,1111111);
        // const style = useCssModule();
        // console.log(style.success);
        // console.log(style.bb);
        // console.log(style.aa);
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
