import camisa1 from "../img/camiseta-1.jpg"
import camisa2 from "../img/camiseta-2.jpg"
import camisa3 from "../img/camiseta-3.jpg"
import camisa4 from "../img/camiseta-4.jpg"
import camisa5 from "../img/camiseta-5.jpg"
import camisa6 from "../img/camiseta-6.jpg"

export const produtos = [
    {
      id: 1,
      imagem: camisa1,
      descricao: "Camisa de manga curta com desenho de um astrounauta segurando balões de planetas",
      nome: "Camisa AstroBaloes",
      preco: 79.90        
    },
    {
      id: 2,
      imagem: camisa2,
      descricao: "Camisa de manga curta com desenho de um astrounauta segurando balões de planetas",
      nome: "Camisa AstroBaloes 2",
      preco: 79.90
    },
    {
      id: 3,
      imagem: camisa3,
      descricao: "Camisa Via Láctea",
      nome: "Camisa Via Láctea",
      preco: 79.90        
    },
    {
      id: 4,
      imagem: camisa4,
      descricao: "Camisa infantil do sistema solar",
      nome: "Camisa Sistema Solar",
      preco: 79.90        
    },
    {
      id: 5,
      imagem: camisa5,
      descricao: "Camisa de manga curta I NEED MORE SPACE",
      nome: "Camisa NASA",
      preco: 79.90        
    },
    {
      id: 6,
      imagem: camisa6,
      descricao: "Camisa de manga curta com desenho de um astronauta segurando balões de planetas",
      nome: "Camisa Astronauta",
      preco: 79.90        
    },
]

export const carrinho = produtos.map(produto => {
    return{
        nome: produto.nome,
        id: produto.id,
        preco: produto.preco,
        quantidade:0
    }
})