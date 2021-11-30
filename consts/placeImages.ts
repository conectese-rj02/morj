import { ImageSourcePropType } from "react-native";

interface ImageProps {
    id: string;
    image: ImageSourcePropType;
}

const placeImages: ImageProps[] = [
    {
        id: "10ba5402-2ca0-48d4-8463-14623424c312",
        image: require('../assets/images/gallery/president-erick-jacquin.jpg')
    }, {
        id: "18a31bdd-bcc8-41ce-baa3-be2e6faad99f",
        image: require('../assets/images/gallery/theatro-municipal.jpg')
    }, {
        id: "2638fb5f-391f-4e82-810a-9b6f63e4f363",
        image: require('../assets/images/gallery/beco-batman.jpg')
    }, {
        id: "38354141-5446-4ed1-ab56-995f193bb351",
        image: require('../assets/images/gallery/mercado-municipal.jpg')
    }, {
        id: "3a05b041-2cb5-4e2e-af71-78acdef42854",
        image: require('../assets/images/gallery/museu-do-futebol.jpg')
    }, {
        id: "5b1c91c2-24e0-4b9f-9468-76631155fc44",
        image: require('../assets/images/gallery/pinacoteca.jpg')
    }, {
        id: "78043c06-86b7-4aac-9f39-00cc97598157",
        image: require('../assets/images/gallery/masp.jpg')
    }, {
        id: "81c213c2-2aed-4021-95e2-f2c1bc83c0e3",
        image: require('../assets/images/gallery/museu-do-ipiranga.jpg')
    }, {
        id: "a227c507-387a-43c7-b4e8-0a82e86704da",
        image: require('../assets/images/gallery/autodromo-interlagos.jpg')
    }, {
        id: "aedcd62d-0168-4f9c-abba-3d2b0d12f478",
        image: require('../assets/images/gallery/museu-videogame.jpg')
    }, {
        id: "d4a7e335-899f-4e3d-b9f6-bca5f69609cc",
        image: require('../assets/images/gallery/parque-ibirapuera.jpg')
    }, {
        id: "fed883a8-f300-4049-bc4e-33a8b67153a3",
        image: require('../assets/images/gallery/aquario.jpg')
    }, {
        id: "6c3b5c10-1264-4401-8844-4428c04c8cb4",
        image: require('../assets/images/gallery/avenida-paulista.jpg'),
    },
];

export default placeImages;