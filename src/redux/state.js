let state = {
  restaurDb: [
    {
      id: 1,
      image: 'https://gpoltava.com/assets/profiles_photo/d65f54ce48f015992b4a2cc888602569.jpg',
      title: 'Beer House',
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
        ' (0532) 633-699',
        ' (095) 58-555-58',
        ' (098) 770-62-29'
      ],
      links: 'http://beer-house.net.ua',
      openTime: '9:00',
      closeTime: '23:00',
      cuisine: {
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
      advantages: {
        kidsRoom: true, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 2,
      image: 'https://gpoltava.com/assets/profiles_photo/259ee6ec8d2393160d67717d326ea59a.jpg',
      title: 'Valber (Центр)',
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
      adress: 'Полтава, ул. Соборная площадь, 32',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (050)  402 89 86',
      ],
      links: 'https://vk.com/valberpub',
      openTime: '10:00',
      closeTime: '24:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
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
        ' (096) 676 0808'
      ],
      links: 'https://www.instagram.com/melrose_sensuyaki/',
      openTime: '11:00',
      closeTime: '22:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
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
        ' (050) 352 2111'
      ],
      links: 'https://www.instagram.com/pub.surzhik/',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 5,
      image: 'https://instagram.frix8-1.fna.fbcdn.net/vp/ffa047ce281ec59bd4e5ab994978d136/5E4980E1/t51.2885-19/s150x150/70625963_2259143607545638_8639082662977339392_n.jpg?_nc_ht=instagram.frix8-1.fna.fbcdn.net',
      title: 'Чичиков',
      type: {
        pub: false,
        restaurant: false,
        cafe: true,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Соборності, 32',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: true,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 510 0550'
      ],
      links: 'https://www.instagram.com/chichikov.plt/',
      openTime: '08:00',
      closeTime: '23:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 6,
      image: 'https://scontent-lga3-1.cdninstagram.com/vp/7d35a2e1dd952ac6950147c27cc9b347/5E33F899/t51.2885-19/s150x150/70600594_2154588508172203_2775781352736292864_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
      title: '1europub',
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
      adress: 'Полтава, Соборності, 26',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: true,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 927 0553'
      ],
      links: 'https://www.instagram.com/1europub.plt/',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: false,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,
      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 7,
      image: 'https://scontent.fhrk5-1.fna.fbcdn.net/v/t1.0-9/53207645_2312685252300686_5016660537761595392_n.jpg?_nc_cat=109&_nc_oc=AQkTzhNQ2k1WbRdejjmok-MN5lO3ps4EJkOSYdUYTEmqfDXSLnAqyTNfTiDzHOeE5rs&_nc_ht=scontent.fhrk5-1.fna&oh=80bbfe395364462bd1641e81bf40dde3&oe=5E5C4FD3',
      title: 'Ц-бар',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: true,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Котляревского, 14',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (099) 677 6333'
      ],
      links: 'https://www.instagram.com/tse.bar.plt/',
      openTime: '18:00',
      closeTime: '02:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,
      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: true,
      },
    },

    {
      id: 8,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/19366403_762155873950904_1929906432735335472_n.jpg?_nc_cat=106&_nc_oc=AQlZBPS0F3VbOCCCBpMOM6AFra4YdsJ593WMZIxa2lYNxSZRTrwqMjgGWglf-EstNeI&_nc_ht=scontent.fhrk5-2.fna&oh=11e15f36091c67e66ee520e100109268&oe=5E5A0C7A',
      title: 'TAU',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Октябрьская , 44',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (099) 358 78 88'
      ],
      links: 'https://www.instagram.com/tau.poltava/',
      openTime: '10:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: true,
        seafood: true,
        japaneese: true,
        desserts: true,
        asian: true,
        chineese: true,
        mexican: false,
        american: false,
      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 9,
      image: 'data:image/jpeg;base64,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',
      title: 'Кипяток',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: true, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: true,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Гагарина, 1а',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      }, telephone: [
        ' (066) 223 01 56'
      ],
      links: 'https://www.instagram.com/kipyatok_poltava',
      openTime: '10:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: true,
        chineese: false,
        mexican: false,
        american: false,
      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 10,
      image: 'https://gpoltava.com/assets/profiles_photo/54d76927c37be10ea04ebc5eb8fae128.jpg',
      title: 'CheeseCake',
      type: {
        pub: false,
        restaurant: false,
        cafe: true,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: true,//заведения с грилем
      },
      adress: 'Полтава, Гоголя, 22',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (095) 326 77 77'
      ],
      links: 'https://www.instagram.com/the.cheese.cake/',
      openTime: '12:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,
      },
      advantages: {
        kidsRoom: true, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: true,
      },
    },
    {
      id: 11,
      image: 'https://pechers.com.ua/wp-content/uploads/2019/08/cropped-photo_2019-05-07_21-01-47.jpg',
      title: 'PECHER’S COFFEE&TEA',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: true, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Небесной Сотни, 14/18',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 582 69 20'
      ],
      links: 'https://pechers.com.ua/',
      openTime: '9:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: true,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 12,
      image: 'https://lh3.googleusercontent.com/toErxWv_CHPdSN00YPTstF3FcQV7hQA8gvZqHYBXY-W1Nls9XEMoZonEM4wjlbnHKGNdVbtgsf_PCYNa=w768-h768-n-o-v1',
      title: 'Тот самый Барашек',
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
      adress: 'Полтава, ул. Соборности, 29/15',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 500 52 52'
      ],
      links: 'https://barashek.com.ua/',
      openTime: '12:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: true,
      },
    },
    {
      id: 13,
      image: 'https://eda.ua/images/222317-195-195-logo__scorini.png',
      title: 'Кав’ярня-піцерія “Scorini”',
      type: {
        pub: false,
        restaurant: false,
        cafe: true,
        teahouse: false, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Соборности, 60',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: false,
        Kievskiy: true,
      },
      telephone: [
        ' (053) 222 99 55'
      ],
      links: 'https://www.instagram.com/scorinipoltava',
      openTime: '10:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: false,
        seafood: false,
        japaneese: true,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 14,
      image: 'data:image/jpeg;base64,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',
      title: 'Лилея',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Соборная площадь, 2',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (0532) 56 00 03',
        ' (050) 806 46 86'

      ],
      links: 'https://www.instagram.com/lileya__restaurant',
      openTime: '12:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },
    {
      id: 15,
      image: 'https://assets.misteram.com.ua/misteram-public/9a3f4d3f0bfc6980f945c31d25677833-400x0.png',
      title: 'Шалена шкварка',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Соборная площадь, 24',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (0532) 61 26 97',
        ' (095) 390 19 99'

      ],
      links: 'https://www.instagram.com/shalena.shkvarka.poltava',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: true,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: true,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },
    {
      id: 16,
      image: 'https://scontent-waw1-1.cdninstagram.com/vp/d7d5ed3b04fcf047d494bbb0f796e49a/5E7A0B3A/t51.2885-19/s150x150/69396377_2353689211557899_6121737665764130816_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com',
      title: 'Тєсно Говоря',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Соборная площадь, 20',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 900 78 78'

      ],
      links: 'https://www.instagram.com/tesno.govorya',
      openTime: '8:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: true,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 17,
      image: 'https://poltava.mixfood.ua/upload/catalog_categories/images/s_logo_tele_pizza1538565490.jpg',
      title: 'Теле-пицца',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Соборная площадь, 44',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (095) 817 22 02'

      ],
      links: 'https://sob.pizza.poltava.ua/',
      openTime: '8:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 18,
      image: 'https://gpoltava.com/assets/profiles_photo/03567960c132f72b9d94dc137ad71344.jpg',
      title: 'G-coffe (Стретенская, 28)',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Стретенская, 28',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (050) 721 18 18'

      ],
      links: 'https://www.instagram.com/g_coffee_ua/',
      openTime: '10:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 19,
      image: 'https://gpoltava.com/assets/profiles_photo/03567960c132f72b9d94dc137ad71344.jpg',
      title: 'G-coffe (Пушкина , 27)',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Пушкина , 27',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (095) 472 34 34'

      ],
      links: 'https://www.instagram.com/g_coffee_ua/',
      openTime: '9:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 20,
      image: 'https://scontent-waw1-1.cdninstagram.com/vp/2c2df17ac95377f3e10dcc9055a6f337/5E65C171/t51.2885-19/s150x150/46411723_519451585208624_395033048728469504_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com',
      title: 'Buns Brew Bar',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Пушкина , 27',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (066) 782 89 21'

      ],
      links: 'https://www.instagram.com/buns_brew_bar',
      openTime: '7:30',
      closeTime: '20:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 21,
      image: 'https://scontent-waw1-1.cdninstagram.com/vp/b84a8f63203be5d20116fad2858bcfab/5E8C2A57/t51.2885-19/s150x150/64231070_2535506556462039_5648425432156995584_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com',
      title: 'Kioto Rich',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, ул. Европейская, 8',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' (097) 755 83 83',
        ' (066) 773 58 08'

      ],
      links: 'https://kiotorich.com',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: true,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },
    {
      id: 22,
      image: 'https://gpoltava.com/assets/profiles_photo/259ee6ec8d2393160d67717d326ea59a.jpg',
      title: 'Valber (ЖБИ)',
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
      adress: 'Полтава, ул. Маршала Бирюзова, 50/1',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: false,
        Kievskiy: true,
      },
      telephone: [
        ' (050)  402 89 85',
      ],
      links: 'https://vk.com/valberpub',
      openTime: '11:00',
      closeTime: '24:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },
    {
      id: 23,
      image: 'https://gpoltava.com/assets/profiles_photo/259ee6ec8d2393160d67717d326ea59a.jpg',
      title: 'Valber (Подол)',
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
      adress: 'Полтава, ул. Небесной Сотни, 61',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: true,
        Kievskiy: false,
      },
      telephone: [
        ' (050)  402 89 88',
      ],
      links: 'https://vk.com/valberpub',
      openTime: '11:00',
      closeTime: '24:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },


    {
      id: 24,
      image: 'https://scontent.fhrk5-1.fna.fbcdn.net/v/t1.0-9/22688613_1432755060110843_8999882159332909568_n.jpg?_nc_cat=108&_nc_ohc=9Z05oOskGwIAQl1OheOA6UHWJ7laNnCgy1XPnqQXEiHFBeP_VcOo-WJZA&_nc_ht=scontent.fhrk5-1.fna&oh=fcfa6d3e9cfec39da4c8c920114d1de9&oe=5E831327',
      title: 'Corizza',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Европейская, 60а',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' 066 545 2744',
      ],
      links: 'https://www.instagram.com/corizza.plt',
      openTime: '09:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: false, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 25,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/28168804_1748614275190241_2212704777493111314_n.jpg?_nc_cat=107&_nc_ohc=0Bh_WyuDl_0AQkHbeOe4lnt6r7TPpxW6f22zOTVyoy6ZlAjPDvpYasF8A&_nc_ht=scontent.fhrk5-2.fna&oh=572954da96d290a2f5826f6feabc5c98&oe=5E3EB8C2',
      title: 'Scorini',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Соборності, 50',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: false,
        Kievskiy: true,
      },
      telephone: [
        ' 099 479 7989',
      ],
      links: 'https://www.facebook.com/pg/scorinipizza',
      openTime: '09:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 26,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t31.0-8/p960x960/12045340_513181865525207_8762474319426748429_o.jpg?_nc_cat=104&_nc_ohc=hF5MgOM55L8AQkJEROJNbWT3iNZD37zLwDQLiqqLDNsQdNZNTaGRGsekw&_nc_ht=scontent.fhrk5-2.fna&oh=f79da314aebe99681f5501673a03c02c&oe=5E81783C',
      title: 'Panorama',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Соборності, 43',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: false,
        Kievskiy: true,
      },
      telephone: [
        '+380504051331',
        '+380674051330'
      ],
      links: 'https://www.facebook.com/pg/restarauntpanorama',
      openTime: '09:00',
      closeTime: '02:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: true,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 27,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/48411147_1863556203770769_5614747661581156352_n.jpg?_nc_cat=104&_nc_ohc=Oh4XgV_yG64AQlvjJnMjyaGk-cJZ8sfAtz_E1TxQS_bt0tddJf-9n216A&_nc_ht=scontent.fhrk5-2.fna&oh=b2a404a98d64df458f78a1b5a61381da&oe=5E4A68C7',
      title: 'Кавун',
      type: {
        pub: false,
        restaurant: false,
        cafe: false,
        teahouse: true, //чайная
        coffeehouse: true,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Стрітенська, 34 ',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: true,
        Kievskiy: false,
      },
      telephone: [
        ' 067 528 8675',
      ],
      links: 'https://www.instagram.com/kavun_plt',
      openTime: '11:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: false,
        сaucasian: false,
        itlian: false,
        grill: false,
        seafood: false,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: false,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: false, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 28,
      image: 'data:image/jpeg;base64,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yNLXt65DQGmVg1eARbr5QSNr87741w5azET2WmaSlKKrwN1g/p479jg8jzLQSuv08DLVHpvDsdK2FvsZaYTchzXZwTsbkkm+nauukViPlaxrXRJq6RAQEBAQEBAQEBAQEBAQEBAQEBAQfCEGqSIFBxT0IPYoEbPhI10Gu6jSNKtU8JvMuW14X5rntb1Tb429FjOP5tq66o2swiaKAsfH+1hN2PtpI1pDm2Phdtt1E1mK/ZGlmwvhSKYxVMZtG8Bzoy1r45GuF7lp912u42N9CpriiZi0Jisd1woKFkDcsbQ1v4QA0egW8RpfTqUggICAgICAgICAgICAgICAgICAgICAg+EIMTGgwMIQaqihbILEeBUaGyjpWxMEbAA0Xs0bC5ubeZKRGhvUggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/9k=',
      title: 'Viva Olive',
      type: {
        pub: false,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: false,//заведения с грилем
      },
      adress: 'Полтава, Гоголя, 19',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        ' 099 033 3599',
      ],
      links: 'https://www.facebook.com/pages/Viva-Olive',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: false,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: false,
        iqosFriendly: false,
      },
    },

    {
      id: 29,
      image: 'https://gpoltava.com/assets/profiles_photo/259ee6ec8d2393160d67717d326ea59a.jpg',
      title: 'Valber ЖБИ',
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
        ' (066) 313-30-19',
      ],
      links: 'https://vk.com/valberpub',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
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
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 30,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/44703471_2384125268269725_7104330843404894208_n.jpg?_nc_cat=102&_nc_ohc=Ea-F8GzpVoMAQkSBvVVFm1pEpnJVCDfSUojEFvX2Oqd0w-4VZYVbVq9sA&_nc_ht=scontent.fhrk5-2.fna&oh=c1276448be1aebf98b127a4e4d403efa&oe=5E822449',
      title: 'Del Resto',
      type: {
        pub: false,
        restaurant: true,
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
        '  095 524 8284',
      ],
      links: 'https://www.facebook.com/pg/delrestoo',
      openTime: '11:00',
      closeTime: '22:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: false,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 31,
      image: 'https://scontent.fhrk5-1.fna.fbcdn.net/v/t1.0-9/54417758_519959541862498_3663309140131840000_n.jpg?_nc_cat=103&_nc_ohc=NnsfnUcR440AQk__IBv0MLe0R4eGbmMGNSNXpYqPz86G7uiqR_4eGE1Ig&_nc_ht=scontent.fhrk5-1.fna&oh=a7ef787c8883ca200733e2422dccef26&oe=5E80920B',
      title: 'Chopper Grill',
      type: {
        pub: true,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: true,//заведения с грилем
      },
      adress: 'Полтава, Небесної сотні 14/18',
      district: {
        Shevchenkovskiy: true,
        Oktyabrksiy: false,
        Kievskiy: false,
      },
      telephone: [
        '050-500-46-11',
        '068-500-46-11'
      ],
      links: 'https://www.instagram.com/chopper_grill',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: false,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: true,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: false, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

    {
      id: 32,
      image: 'https://scontent.fhrk5-2.fna.fbcdn.net/v/t1.0-9/p960x960/40684411_732536653751674_6643164601217187840_o.png?_nc_cat=101&_nc_ohc=8V0qa_OIX54AQm-M7ZKXQEyCDqcnhpYjYf5QiQwMyla96Ru0Zo5KxH4FA&_nc_ht=scontent.fhrk5-2.fna&oh=6196d0e91cf927e151f1f88aaf400b14&oe=5E447F82',
      title: 'В мясо',
      type: {
        pub: true,
        restaurant: true,
        cafe: false,
        teahouse: false, //чайная
        coffeehouse: false,//кофейня
        bar: false,
        hookah: false,
        steakhouse: true,//заведения с грилем
      },
      adress: 'Полтава, Соборності, 72',
      district: {
        Shevchenkovskiy: false,
        Oktyabrksiy: false,
        Kievskiy: true,
      },
      telephone: [
        ' 068 555 2575',
      ],
      links: 'https://www.instagram.com/v.myaso_',
      openTime: '11:00',
      closeTime: '23:00',
      cuisine: {
        ukrainian: true,
        europinian: true,
        сaucasian: false,
        itlian: true,
        grill: true,
        seafood: true,
        japaneese: false,
        desserts: true,
        asian: false,
        chineese: false,
        mexican: false,
        american: true,

      },
      advantages: {
        kidsRoom: false, //Детские комнаты
        reservation: true,  // Бронь столов
        DressingRoom: false,//гардероб
        cardPayment: true, //Оплата картой
        parking: true, //Парковка
        delivery: true, //доставка
        wifi: true,
        takeaway: true, //еда или напитки на вынос
        plaseForSmoking: true,
        iqosFriendly: false,
      },
    },

  ]
}

export default state;