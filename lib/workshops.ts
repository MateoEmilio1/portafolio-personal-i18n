
declare const window: any;

const workshops = [
    {
        "id" : "1",
        "img" : require("/public/images/quehacemos/bibliotecaL2.jpg"),
        "muestra" : () => window.my_modal_bibliotecaL2.showModal(),
        "titulo": "Biblioteca L2",
        "descripcion" : "Descripción breve de la biblioteca.",
    },
    {
        "id" : "2",
        "img" : require("/public/images/quehacemos/workshops.jpg"),
        "muestra" : () => window.my_modal_bibliotecaL2.showModal(),
        "titulo": "Workshops",
        "descripcion" : "Descripción breve de los workshops",
    },
    {
        "id" : "3",
        "img" : require("/public/images/quehacemos/articulos.jpg"),
        "muestra" : () => window.my_modal_bibliotecaL2.showModal(),
        "titulo": "Artículos",
        "descripcion" : "Descripción breve de Mirror L2",
    },
    {
        "id" : "4",
        "img" : require("/public/images/quehacemos/nodoETH.jpg"),
        "muestra" : () => window.my_modal_bibliotecaL2.showModal(),
        "titulo": "Nodo Ethereum",
        "descripcion" : "Descripción breve de los Nodo.",
    },


]

export default workshops;