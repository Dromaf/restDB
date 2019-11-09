let state = {
  restaurDb: [
    {
      id: 1,
      image: 'https://gpoltava.com/assets/profiles_photo/d65f54ce48f015992b4a2cc888602569.jpg',
      title: 'Beer House-Прима Пицца',
      type: {
          pub: true,
          restaurant: false,
          cafe: false,
          teahouse: false, //чайная
          coffeehouse: false,//кофейня
          bar: false,
          hookah: false,
          steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Киевское шоссе, 60',
      district: {
          Shevchenkovskiy: true,
          Oktyabrksiy: false,
          Kievskiy: false,
      },
      telephone: [
          '(0532) 633-699',
          '(095) 58-555-58',
          '(098) 770-62-29'
      ],
      links: 'http://beer-house.net.ua',
      openTime: '9:00',
      closeTime: '23:00',
      cuisine:{
          ukrainian: true, 
          europinian: true,
          сaucasian: true,
          itlian: false,
          grill: true,
          seafood: false,
          japaneese: false,
          desserts: true,
          asian: false,
          chineese: false,
          mexican: false,
          american: false,

      },
      advantages:{
          kidsRoom: true, //Детские комнаты
          reservation: true,  // Бронь столов
          DressingRoom: false,//гардероб
          cardPayment: true, //Оплата картой
          parking: true, //Парковка
          delivery: true, //доставка
          wifi: true,
          takeaway:  true, //еда или напитки на вынос
          plaseForSmoking: true,
          iqosFriendly: false,
      },
  },

  {
      id: 2,
      image: 'https://gpoltava.com/assets/profiles_photo/259ee6ec8d2393160d67717d326ea59a.jpg',
      title: 'Valber Центр',
      type: {
          pub: true,
          restaurant: false,
          cafe: false,
          teahouse: false, //чайная
          coffeehouse: false,//кофейня
          bar: false,
          hookah: false,
          steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Октябрьская, 32',
      district: {
          Shevchenkovskiy: false,
          Oktyabrksiy: true,
          Kievskiy: false,
      },            
      telephone: [
          '(066) 313-30-19',
      ],
      links: 'https://vk.com/valberpub',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine:{
          ukrainian: false, 
          europinian: true,
          сaucasian: false,
          itlian: false,
          grill: false,
          seafood: true,
          japaneese: false,
          desserts: true,
          asian: false,
          chineese: false,
          mexican: false,
          american: false,

      },
      advantages:{
          kidsRoom: false, //Детские комнаты
          reservation: true,  // Бронь столов
          DressingRoom: false,//гардероб
          cardPayment: true, //Оплата картой
          parking: false, //Парковка
          delivery: true, //доставка
          wifi: true,
          takeaway:  true, //еда или напитки на вынос
          plaseForSmoking: true,
          iqosFriendly: false,
      },
  },

  {
      id: 3,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/a5/a5/81/melrose.jpg',
      title: 'Melrose',
      type: {
          pub: false,
          restaurant: true,
          cafe: false,
          teahouse: false, //чайная
          coffeehouse: false,//кофейня
          bar: false,
          hookah: false,
          steakhouse: true,//заведения с грилем
      },
      adress: 'Полтава, Ковпака, 26',
      district: {
          Shevchenkovskiy: false,
          Oktyabrksiy: false,
          Kievskiy: true,
      },
      telephone: [
          '096 676 0808', 
      ],
      links: 'https://www.instagram.com/melrose_sensuyaki/',
      openTime: '11:00',
      closeTime: '22:00',
      cuisine:{
          ukrainian: false, 
          europinian: true,
          сaucasian: false,
          itlian: true,
          grill: true,
          seafood: true,
          japaneese: true,
          desserts: true,
          asian: true,
          chineese: false,
          mexican: true,
          american: true,

      },
      advantages:{
          kidsRoom: false, //Детские комнаты
          reservation: true,  // Бронь столов
          DressingRoom: false,//гардероб
          cardPayment: true, //Оплата картой
          parking: false, //Парковка
          delivery: true, //доставка
          wifi: true,
          takeaway:  true, //еда или напитки на вынос
          plaseForSmoking: false,
          iqosFriendly: false,
      },
  },

  {
      id: 4,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/21105830_518472131878430_6001459166305190644_n.jpg?_nc_cat=107&_nc_oc=AQn4Hxr29OFO4tRTC3enJjcMM3BzPiE9y1amRmMw0KNPF7RitD0I1YeZ5qXIPw55HSA&_nc_ht=scontent.fhrk5-2.fna&oh=b6d28ea101a3e12279283c3f81de4ab3&oe=5E604128',
      title: 'Суржик Pub',
      type: {
          pub: true,
          restaurant: false,
          cafe: false,
          teahouse: false, //чайная
          coffeehouse: false,//кофейня
          bar: false,
          hookah: true,
          steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Кукоби 47',
      district: {
          Shevchenkovskiy: false,
          Oktyabrksiy: true,
          Kievskiy: false,
      },            
      telephone: [
          '050 352 2111', 
      ],
      links: 'https://www.instagram.com/pub.surzhik/',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine:{
          ukrainian: false, 
          europinian: true,
          сaucasian: false,
          itlian: false,
          grill: false,
          seafood: true,
          japaneese: false,
          desserts: true,
          asian: false,
          chineese: false,
          mexican: false,
          american: true,
      },
      advantages:{
          kidsRoom: false, //Детские комнаты
          reservation: true,  // Бронь столов
          DressingRoom: false,//гардероб
          cardPayment: true, //Оплата картой
          parking: true, //Парковка
          delivery: true, //доставка
          wifi: true,
          takeaway:  true, //еда или напитки на вынос
          plaseForSmoking: true,
          iqosFriendly: false,
      },
  },

  {
      id: 5,
      image: 'https://scontent-lga3-1.cdninstagram.com/vp/7d35a2e1dd952ac6950147c27cc9b347/5E33F899/t51.2885-19/s150x150/70600594_2154588508172203_2775781352736292864_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
      title: 'One Euro Pub',
      type: {
          pub: false,
          restaurant: false,
          cafe: true,
          teahouse: false, //чайная
          coffeehouse: false,//кофейня
          bar: false,
          hookah: true,
          steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Соборності, 32',
      district: {
          Shevchenkovskiy: true,
          Oktyabrksiy: false,
          Kievskiy: false,
      },                
      telephone: [
          '050 510 0550', 
      ],
      links: 'https://www.instagram.com/chichikov.plt/',
      openTime: '08:00',
      closeTime: '23:00',
      cuisine:{
          ukrainian: true, 
          europinian: true,
          сaucasian: false,
          itlian: false,
          grill: false,
          seafood: false,
          japaneese: false,
          desserts: false,
          asian: false,
          chineese: false,
          mexican: false,
          american: false,
      },
      advantages:{
          kidsRoom: false, //Детские комнаты
          reservation: true,  // Бронь столов
          DressingRoom: false,//гардероб
          cardPayment: true, //Оплата картой
          parking: false, //Парковка
          delivery: false, //доставка
          wifi: true,
          takeaway:  true, //еда или напитки на вынос
          plaseForSmoking: false,
          iqosFriendly: false,
      },
  },


  ]
}

export default state;