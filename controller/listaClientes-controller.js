import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCLiente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
            <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
        </td>  `
    linhaNovoCLiente.innerHTML = conteudo
    linhaNovoCLiente.dataset.id = id
    
return linhaNovoCLiente
}

const tabela = document.querySelector('[data-tabela]')
tabela.addEventListener('click', async(evento)=> {
    let ehbotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
        if(ehbotaoDeletar) {
            const linhaCliente = evento.target.closest('[data-id]')
            let id  = linhaCliente.dataset.id 
           await clienteService.removeCliente(id)
            .then(()=> {
                linhaCliente.remove()
            })
        }
})


const render = async () => {
    const listaclientes = await clienteService.listaclientes()
    
    listaclientes. forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email,elemento.id))
    })
}
render()