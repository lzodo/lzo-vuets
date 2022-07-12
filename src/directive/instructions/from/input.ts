export default {
    mounted(el: any, option: any) {
        if(option.value){
            el.focus()
            el.value = "自定义指令"
        }

        console.log(el, option)
        // {
        //     "dir": {},
        //     "instance": {},
        //     "value": 3,
        //     "modifiers": {}
        // }

    }
}