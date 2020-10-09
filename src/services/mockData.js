import {filterByID} from '../services/filters';

export const banners = [
    {
        bannerURL: require('../assets/images/post/bg-post1.jpg'),
        title: "Lorem ipsum dolor sit amet",
        info: "Lorem ipsum dolor sit amet"
    }
];
export const products = [
    {
        bannerURL: require('../assets/images/product/product1.jpg'),
        title: 'Livro Acenda a Sua Luz',
        info: 'Carol Rache',
        price: 54.00,
        ID: 39
    },
    {
        bannerURL: require('../assets/images/product/product2.jpg'),
        title: 'Camiseta Solidária',
        info: 'Tamanho único',
        price: 149.00,
        ID: 62
    },
    {
        bannerURL: require('../assets/images/product/product3.jpg'),
        title: 'Tapete Viagem Pássaro',
        info: '',
        price: 237.00,
        ID: 72
    },
    {
        bannerURL: require('../assets/images/product/bg-product1.jpg'), 
        title: "Condicionador Namah",
        info: '300 ml',
        price: 120.00,
        ID: 404
    }
];
export const posts = [
    {
        type: 'podcast',
        bannerURL: require('../assets/images/post/bg-post3.jpg'),
        audioURL: require('../assets/podcasts/podcast-theme.mp3'),
        title: "Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...",
        info: {
            userNickname: "Namahcast", 
            userId: "122"
        },
        ID: 11
    },
    {
        type: 'post',
        bannerURL: require('../assets/images/post/bg-post2.jpg'),
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        info: {
            type: "VIAGEM",
            onwerShip: "Fulano de Tal"
        },
        article: [
            {
                type: 'title',
                text: 'Lorem'
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eveniet cum itaque dolorem neque dolor esse, modi expedita deleniti eaque fugit voluptate temporibus aliquam nostrum reprehenderit reiciendis dolore officiis nesciunt?"
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!"
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!"
            },
            {
                type: 'title',
                text: 'Ipsum'
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!"
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!"
            }
        ],
        ID: 681
    },
    {
        type: 'product',
        bannerURL: products[filterByID(404,products)].bannerURL,
        title: products[filterByID(404,products)].title,
        ID: 404
    },
    {
        type: 'course',
        bannerURL: require('../assets/images/post/bg-post4.jpg'),
        title: "Imersão Vinyasa Flow",
        info: {
            type: "CURSO",
            date: {
                day: "04",
                month: "ABR"
            }
        },
        ID: 12023452
    }
];