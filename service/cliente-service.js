
//promisses com fetch
 const listaclientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    .then(resposta => { 
        if(resposta.ok) {
          return resposta.json()  
        }
        throw new Error ('Não foi possível listas os clientes')
    })
 
}   
/*promisses com XMLHttpreques
const listaclientes = () => {
    const promise = new Promise((resolve, reject) => {
       const http = new XMLHttpRequest();

        http.open('GET','http://localhost:3000/profile')
       
        http.onload = () => {
            if(http.status > 400) {
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
        http.send()
    })  
    console.log(promise)
    return promise
}   

listaclientes()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
}) */
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'content-Type' : 'application/json'
         },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })    
    .then( resposta=>{
        if(resposta.ok) {
            return resposta.body()  
          }
          throw new Error ('Não foi possível listas os clientes')
        }) 
}
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) 
    .then(resposta => { 
        return resposta.json()
    })
}

const atualizaCliente = (id,nome,email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method : 'PUT',
        headers : {
            'content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
    }) 
})
    .then( resposta=>{
        return resposta.json()    
    }) 
}
export const clienteService = {
    listaclientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}