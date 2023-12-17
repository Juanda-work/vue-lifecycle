
const isAuthenticatdGuard = async (to, from, next)=>{
    return new Promise( () => {
        const rnd = Math.floor(Math.floor()*100);
        if (rnd > 50) {
            console.log("autenticado: ", rnd);
            next();
        }else{
            console.log("bloqueado por el isAuthenticatedGuard: ", rnd);
            next({name: "pokemon-home"})
        }
    })
}

export default isAuthenticatdGuard;