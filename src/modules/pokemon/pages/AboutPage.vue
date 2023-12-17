<template>
    <h1>
       About Page 
       <hr>
       <h2>{{ name }}</h2>
       <button @click="onChangeName">Cambiar nombre</button>
    </h1>
</template>

<script>
export default{
    data(){
        return {
            name: "juanda"
        }
    },
    methods:{
        onChangeName(){
            this.name = "Irene";
        }
    },

    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    activated(){
        console.log("activated");
    },
    deactivated(){
        console.log("deactivated");
    },
    beforeUnmount(){
        console.log("beforeUnmount");
    },
    unmounted(){
        console.log("unmounted");
    },
    errorCaptured(){
        console.log("errorCaptured");
    },
    renderTracked(){
        console.log("renderTracked");
    },
    renderTriggered(){
        console.log("renderTriggered");
    },
}
</script>