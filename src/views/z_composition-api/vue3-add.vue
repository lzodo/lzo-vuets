<template>
    <div>--------------vue3-add.vue start----------------</div>
    <div>{{ version }}</div>
    <div>--------------vue3-add.vue end----------------</div>
</template>

<script lang="ts">
import { defineComponent, version } from "vue";

export default defineComponent({
    setup() {
        //定义一个基类
        class Person {
            //定义属性
            name: string;
            age: number;
            gender: string; //性别
            sum: any;
            //定义构造函数
            constructor(name: string, age: number, gender: string) {
                //更新属性
                this.name = name;
                this.age = age;
                this.gender = gender;
                this.sum = (str:string) => { // 构造函数中的实例方法，每new一次都会创建
                    console.log(str);
                };
            }
            //定义实例方法  prototype 的方法
            sayHi(str: string) {
                console.log(`我是${this.name}`, str);
            }

            // 静态方法
            static staticTest(str: string) {
                console.log("金泰" + str);
            }
        }

        //定义一个子类
        class Student extends Person {
            //定义构造函数
            constructor(name: string, age: number, gender: string) {
                //使用super调用父级的构造函数
                super(name, age, gender);
            }

            sayHi() {
                console.log(`我是子类重写sayHi`);
                super.sayHi("我在调用父类的sayHi方法");
            }
        }
        let per = new Person("lzo", 20, "n");
        let per2 = new Person("lzo", 20, "n");
        // per.sayHi("word");
        // per.sum();
        // Person.staticTest("Student");
        // console.log(per.name);

        let stu = new Student("xun", 18, "g");
        // stu.sayHi();
        // Person.staticTest("Student");
        return {
            version,
        };
    },
});
</script>
