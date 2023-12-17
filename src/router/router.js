import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatdGuard from "./Auth-guard";

const routes = [
    //Lazy Load: se cargan independientemente los modulos bajo demanda, segun se vayan necesitando.
    //Viene acompañado de la función de vue "defyneAsincComponent"
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout"*/ "./../modules/pokemon/layouts/PokemonLayout"),
        children:[
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage"*/ "./../modules/pokemon/pages/ListPage")
            },
            {
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage"*/ "./../modules/pokemon/pages/AboutPage")
            },
            {
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PkmPage"*/ "./../modules/pokemon/pages//PokemonPage"),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? {id: 1} : {id}
                },
            },
            {
                path: '',
                name: "pokemon-default",
                redirect: { name: 'pokemon-about' }
            },
        ]
    },
    // DBZ Layout
    {
        path: '/dbz',
        name: 'dbz',
        // Aqui se ponen los GUARDS.
        beforeEnter: [ isAuthenticatdGuard ],
        component: () => import("./../modules/dbz/layouts/DragonBallLayout"),
        children:[
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import("./../modules/dbz/pages/Characters")
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import("./../modules/dbz/pages/About")
            },
            {
                path: '',
                name: "dbz-default",
                redirect: { name: 'dbz-characters' }
            },
        ]
    },
    {
        // pathMatch viene por defecto.
        path: '/:pathMatch(.*)*',   
        name: 'not-found',
        component: () => import(/* webpackChunkName: "NoPageFound"*/ "./../modules/shared/pages/NoPageFound")
    }, 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


//? GUARD GLOBAL SÍNCRONO.
// router.beforeEach( (to, from, next) =>{
//     // console.log("to: ",to);
//     // console.log("from: ",from);
//     // console.log("next: ",next);

//     const random = Math.floor(Math.random() * 100);
//     console.log(random);

//     if (random > 50) {
//         console.log("autenticado");
//         next();
//     }else{
//         console.log("bloqueado por el beforeEach Guard");
//         next({ name: "pokemon-home" })
//     }
// });

//? GUARD GLOBAL ASÍNCRONO.
// const canAccess = () => {
//     return new Promise( (resolve) =>{
//         const random = Math.floor(Math.random() * 100);
//         if (random > 50) {
//             console.log("autenticado Guard. ",random);
//             resolve(true);
//         }else{
//             console.log("bloqueado por el beforeEach Guard ", random);
//             resolve(false);
//         }
//     })
// }
// router.beforeEach( async (to, from, next) => {
//     const authorized = await canAccess();
//     authorized ? next() : next({name: "not-found"})
// });

//? GUARD ESPECÍFICO PARA RUTAS.
// Se ve en el fichero Auth-guard.js


export default router;