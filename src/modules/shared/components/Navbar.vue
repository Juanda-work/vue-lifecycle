<template>
    <div>
        <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {id: 85}}">Pokemon ID</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <custom-link v-for="link in links" 
                    :key="link.to"
                    :link="link">
        </custom-link>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    data(){
        return{
            links:[
                {to: 'pokemon-home',  name: 'Pokemons'},
                {to: 'pokemon-id',    name: 'Por ID', id: 151},
                {to: 'pokemon-about', name: 'About'},

                {to: 'dbz-characters',  name: 'DBZ Personajes'},
                {to: 'dbz-about',       name: 'DBZ About'},

                {to: 'https://google.es', name: 'Google'}
            ]
        }
    },
    components:{
        customLink : defineAsyncComponent( () => import('./CustomLink.vue') )
    },
}
</script>

<style scoped>
    div{
        padding: 0 30px;
    }
    div a{
        font-weight: bold;
        color: green;
        margin: 0 10px;
    }
    /* Clase que viene por defecto en vue cuando se selecciona un elemento */
    /* div .router-link-exact-active{
        color: #42b983;
    } */
</style>