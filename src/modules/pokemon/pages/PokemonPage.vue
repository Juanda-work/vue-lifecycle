<template>
    <h1>
       Pokemon: #{{ id }}
       <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" alt="pokemon.name">
       </div>
    </h1>
</template>

<script>
export default{
    props:{
        id:{
            type: Number,
            required: true,
        }
    },
    data(){
        return{
            // id: null
            pokemon : null,
        }
    },
    created(){
        // let {id} = this.$route.params;
        // console.log("STTRS: ", this.$attrs);
        // this.id = id;
        this.getPokemon();
    },
    methods:{
        async getPokemon(){
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                    .then( r => r.json() )
                console.log("POKEMON: ",pokemon);
                this.pokemon = pokemon;
            } catch (error) {
                console.log("El error de pokeapi cuando numero erroneo: ",error);
                this.$router.push('/');
                console.log("no hay nada que hacer aqui");
            }
        }
    },
    watch: {
        id(){
            this.getPokemon();
        }
    }
}
</script>
<style scoped>
    img{
        width: 200px;
        transition: 1000ms ease-in;
    }

</style>