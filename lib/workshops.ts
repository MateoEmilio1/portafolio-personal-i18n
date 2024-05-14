
declare const window: any;

const workshops = [
    {
        "id" : "1",
        "img" : require("/public/images/charlaColegioAbogados.jpeg"),
        "muestra" : () => window.my_modal_colegioAbogados.showModal(),
    },
    {
        "id" : "2",
        "img" : require("/public/images/charlaBitconf.jpg"),
        "muestra" : () => window.my_modal_bitconf.showModal(),
    },
    {
        "id" : "3",
        "img" : require("/public/images/charla5.jpg"),
        "muestra" : () => window.my_modal_globant.showModal(),
    },
    {
        "id" : "4",
        "img" : require("/public/images/charla3.png"),
        "muestra" : () => window.my_modal_aurora_sc.showModal(),
    },
    {
        "id" : "5",
        "img" : require("/public/images/charla2.png"),
        "muestra" : () => window.my_modal_aurora_near.showModal(),
    },
    {
        "id" : "6",
        "img" : require("/public/images/charla1.png"),
        "muestra" : () => window.my_modal_rosario.showModal(),
    },


]

export default workshops;