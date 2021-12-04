import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { IPlace } from '../../interfaces/IPlace';
import Categories from './Categories';
import Place from './Place';

interface PlacesProps {
    title: string;
}

const Places = (props: PlacesProps) => {

    const [places, setPlaces] = useState<IPlace[]>([]);
    
    useEffect(() => {

        getPlaces();

    }, []);

    const getPlaces = async () => {

        // const places = await axios.get('https://besp.westcentralus.cloudapp.azure.com/places');
        const myDatabase: IPlace[] = [{
            id: 1,
            name: "Bondinho Pão de Açúcar",
            site: "https://maps.app.goo.gl/pwfR54xgVyfgk8pR8",
            address: "Av. Pasteur, 520 - Urca",
            image: "bondinho_pao_acucar.jpg",
            ticket: "R$ 0,00",
            description: "Debruçado sobre a Baía de Guanabara, esse morro é alcançado por teleférico e oferece magnífica vista.",
            categoryId: [3],
        }, {
            id: 8,
            name: "Museu do Amanhã",
            site: "https://goo.gl/maps/NUmTthNt84ABgy7D7",
            address: "Praça Mauá, 1 - Centro",
            image: "museu_do_amanha.jpg",
            ticket: "R$ 0,00",
            description: "Museu de ciências aplicadas que explora as oportunidades e os desafios que a humanidade terá de enfrentar nas próximas décadas a partir das perspectivas da sustentabilidade e da convivência.",
            categoryId: [1],
        }, {
            id: 2,
            name: "Corcovado",
            site: "https://goo.gl/maps/YRYiN25wkiJtQqY56",
            address: "Praça Mauá, 1 - Centro",
            image: "corcovado.jpg",
            ticket: "R$ 0,00",
            description: "O Corcovado é um dos morros da cidade do Rio de Janeiro, célebre no Brasil e no mundo pela sua estátua do Cristo Redentor de 38 metros de altura.",
            categoryId: [3],
        }, {
            id: 11,
            name: "Praia de Copacabana",
            site: "https://goo.gl/maps/wXa1pNuGigGs9Tp26",
            address: "Praça Mauá, 1 - Centro",
            image: "praia_copacabana.jpg",
            ticket: "R$ 0,00",
            description: "Praia famosa de 3,5 km com extensa faixa de areia, calçadão movimentado, quiosques de comida e hotéis.",
            categoryId: [3],
        }, {
            id: 7,
            name: "Estádio do Maracanã",
            site: "https://goo.gl/maps/LtJNL71Bs4a1QCEc6",
            address: "Praça Mauá, 1 - Centro",
            image: "maracana.jpg",
            ticket: "R$ 0,00",
            description: "Estádio Jornalista Mário Filho, mais conhecido como Maracanã, ou carinhosamente como Maraca, é um estádio de futebol localizado na Zona Norte da cidade brasileira do Rio de Janeiro.",
            categoryId: [4],
        }, {
            id: 10,
            name: "Parque Lage",
            site: "https://goo.gl/maps/vn6qPBaitYwAygpT8",
            address: "Praça Mauá, 1 - Centro",
            image: "parque_lage.jpg",
            ticket: "R$ 0,00",
            description: "O Parque Henrique Lage é um parque público da cidade do Rio de Janeiro, localizado aos pés do morro do Corcovado, na rua Jardim Botânico.",
            categoryId: [2],
        }, {
            id: 6,
            name: "Galeria Ipanema",
            site: "https://goo.gl/maps/18uAAxCGDDsWoaXA9",
            address: "R. Aníbal de Mendonça, 27 - Ipanema",
            image: "galeria_ipanema.jpg",
            ticket: "R$ 0,00",
            description: "Desde o seu surgimento, há 55 anos, a Galeria de Arte Ipanema vem selando uma identidade própria no contexto da história da arte brasileira, ocupando assim um espaço de relevância fundamental para o despontar artístico no Brasil.",
            categoryId: [2],
        }, {
            id: 9,
            name: "Parque das Ruínas",
            site: "https://goo.gl/maps/ubcrmDGtPZQ579tt8",
            address: "R. Murtinho Nobre, 169 - Santa Teresa",
            image: "parque_das_ruinas.jpg",
            ticket: "R$ 0,00",
            description: "O Centro Cultural Municipal Parque das Ruínas é um parque público e centro cultural localizado no bairro de Santa Teresa, na cidade do Rio de Janeiro, no Brasil.",
            categoryId: [1],
        }, {
            id: 4,
            name: "Estádio Nilton Santos",
            site: "https://goo.gl/maps/2uReQyC41SMS54yAA",
            address: "R. José dos Reis, 425 - Engenho de Dentro",
            image: "estadio_nilton_santos.jpg",
            ticket: "R$ 0,00",
            description: "O Estádio Olímpico Nilton Santos, antes denominado Estádio Olímpico João Havelange e popularmente conhecido como Engenhão, é um estádio poliesportivo localizado no antigo terreno da Rede Ferroviária.",
            categoryId: [4],
        }, {
            id: 3,
            name: "Estádio das Laranjeiras",
            site: "https://goo.gl/maps/cnXLcs9aRe89nyK99",
            address: "R. Pinheiro Machado, 86-126 - Laranjeiras",
            image: "estadio_laranjeiras.jpeg",
            ticket: "R$ 0,00",
            description: "Estádio Manoel Schwartz é o estádio do Fluminense Football Club e fica situado no bairro de Laranjeiras, na Zona Sul da cidade do Rio de Janeiro, possuindo esse nome como homenagem ao ex-presidente do clube, Manoel Schwartz.",
            categoryId: [4],
        }, {
            id: 5,
            name: "Feira de São Cristóvão",
            site: "https://goo.gl/maps/4DtZcEZMUDkmAAJRA",
            address: "R. Campo de São Cristóvão - São Cristóvão",
            image: "feira_sao_cristovao.jpg",
            ticket: "R$ 0,00",
            description: `O Centro Luiz Gonzaga de Tradições Nordestinas, também conhecido como Feira de São Cristóvão, é um pavilhão que promove a cultura e o comércio de produtos nordestinos. Foi criado em homenagem a Luiz Gonzaga, o "Rei do Baião".`,
            categoryId: [5],
        }];

        setPlaces(myDatabase);

    }

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Categories />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}                
            >
                {places.map((item) => (
                    <Place place={item} />
                ))}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
    },
});

export default Places;