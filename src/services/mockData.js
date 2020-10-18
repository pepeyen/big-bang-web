import {timeConverter, calcDateDiff} from '../services/timeHandles';

export const API = [
    {
        type: 'banner',
        media: {
            bannerURL: require('../assets/images/post/bg-post1.jpg')
        },
        info: {
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet"
        },
        ID: 552
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/product1.jpg')
        },
        info: {
            title: 'Livro Acenda a Sua Luz',
            description: "Carol Rache",
            price: 54.00
        },
        ID: 39
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/product2.jpg')
        },
        info: {
            title: "Camiseta Solidária",
            description: "Tamanho único",
            price: 149.00
        },
        ID: 62
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/product3.jpg')
        },
        info: {
            title: "Tapete Viagem Pássaro",
            description: "",
            price: 237.00
        },
        ID: 72
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/bg-product1.jpg')
        }, 
        info: {
            title: "Condicionador Namah",
            description: "300 ml",
            price: 120.00
        },
        ID: 404
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/bg-product2.jpg')
        }, 
        info: {
            title: "Ovo de pascoa de Paçoca",
            description: "Lorem ipsum dolor",
            price: 65.00
        },
        ID: 405
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/bg-product3.jpg')
        }, 
        info: {
            title: "Chantighee com Wasabi 300g",
            description: "Lorem ipsum dolor",
            price: 32.00
        },
        ID: 406
    },
    {
        type: 'product',
        media: {
            bannerURL: require('../assets/images/product/bg-product4.jpg')
        },
        info: {
            title: "Shampoo Sólido Namah",
            description: "Lorem ipsum dolor",
            price: 49.00
        },
        ID: 407
    },
    {
        type: 'podcast',
        media: { 
            bannerURL: require('../assets/images/post/bg-post3.jpg'),
            audioURL: require('../assets/podcasts/podcast-theme.mp3')
        },
        info: {
            title: "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
            name: "Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...",
            description: "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor",
            onwership: {
                username: "Namahcast", 
                userID: "122"
            }
        },
        ID: 11
    },
    {
        type: 'podcast',
        media: { 
            bannerURL: require('../assets/images/card/bg-card2.jpg'),
            audioURL: require('../assets/podcasts/podcast-theme.mp3')
        },
        info: {
            title: "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
            name: "Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...",
            description: "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor",
            onwership: {
                username: "Namahcast", 
                userID: "123"
            }
        },
        ID: 12223
    },
    {
        type: 'podcast',
        media: { 
            bannerURL: require('../assets/images/card/bg-card3.jpg'),
            audioURL: require('../assets/podcasts/podcast-theme.mp3')
        },
        info: {
            title: "Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore",
            name: "Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...",
            description: "Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor",
            onwership: {
                username: "Namahcast", 
                userID: "121"
            }
        },
        ID: 13554
    },
    {
        type: 'course',
        media: {
            bannerURL: require('../assets/images/post/bg-post4.jpg')
        },
        info: {
            type: "CURSO",
            title: "Imersão Vinyasa Flow",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eveniet cum itaque dolorem neque dolor esse, modi expedita deleniti eaque fugit voluptate temporibus aliquam nostrum reprehenderit reiciendis dolore officiis nesciunt?",
            date: {
                startDate: timeConverter({
                    day: 4,
                    month: 4,
                    year: 2020
                }),
                endDate: timeConverter({
                    day: 5,
                    month: 4,
                    year: 2020
                }),
                dateDifference: calcDateDiff(timeConverter({day: 4, month: 4, year: 2020}), timeConverter({day: 6,month: 4,year: 2020}))
            }
        },
        ID: 12023452
    },
    {
        type: 'post',
        media: {
            bannerURL: require('../assets/images/post/bg-post2.jpg')
        },
        info: {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            type: "VIAGEM",
            onwership: {
                username: "Fulano de Tal"
            }
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
        type: 'post',
        media: {
            bannerURL: require('../assets/images/post/bg-post5.jpg')
        },
        info: {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            type: "DESENVOLVIMENTO PESSOAL",
            onwership: {
                username: "Fulano de Tal"
            }
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
        ID: 682
    },
    {
        type: 'post',
        media: {
            bannerURL: require('../assets/images/post/bg-post5.jpg')
        },
        info: {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            type: "VIAGEM",
            onwership: {
                username: "Fulano de Tal"
            }
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
            }
        ],
        ID: 683
    },
    {
        type: 'post',
        media: {
            bannerURL: require('../assets/images/post/bg-post6.jpg')
        },
        info: {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            type: "VIAGEM",
            onwership: {
                username: "Fulano de Tal"
            }
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
                type: 'title',
                text: 'Ipsum'
            },
            {
                type: 'text',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus qui commodi architecto in ipsum voluptates sint. Rerum ducimus nihil, explicabo facere quisquam animi enim placeat temporibus rem, eaque nostrum!"
            }
        ],
        ID: 684
    }
];