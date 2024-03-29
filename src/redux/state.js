let state = {
  restaurDb: [
    {
      id: 1,
      image: 'https://i.imgur.com/iAvAhdK.jpg',
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
      image: 'https://i.imgur.com/ToNFCKl.png',
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
      image: 'https://i.imgur.com/U3ISMS7.png',
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
      image: 'https://i.imgur.com/6RbpSsd.jpg',
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
      image: 'https://i.imgur.com/4PQRNaM.png',
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
      image: 'https://i.imgur.com/Umv207x.jpg',
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
      image: 'https://i.imgur.com/DbhHIQ9.png',
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
      image: 'https://i.imgur.com/uXjpaZG.png',
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
      image: 'https://i.imgur.com/VOZg1xH.png',
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
      image: 'https://i.imgur.com/NvwpCrh.png',
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
      image: 'https://i.imgur.com/9qPC4rf.png',
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
      image: 'https://i.imgur.com/PKoNJi0.png',
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
      image: 'https://i.imgur.com/8E8eqLv.png',
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
      image: 'https://i.imgur.com/dyZW9w2.png',
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
      image: 'https://i.imgur.com/xysLIcM.png',
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
      image: 'https://i.imgur.com/To24UEP.png',
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
      image: 'https://i.imgur.com/kyRl3bR.png',
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
      image: 'https://i.imgur.com/tqWSSLo.png',
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
      image: 'https://i.imgur.com/tqWSSLo.png',
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
      image: 'https://i.imgur.com/WpBn7NT.png',
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
      image: 'https://i.imgur.com/niYqf68.png',
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
      image: 'https://i.imgur.com/ToNFCKl.png',
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
      image: 'https://i.imgur.com/ToNFCKl.png',
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
      image: 'https://i.imgur.com/bEORUPM.png',
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
      image: 'https://i.imgur.com/bIhG7b6.png',
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
      image: 'https://i.imgur.com/qjQqneS.png',
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
      image: 'https://i.imgur.com/kKxpOt4.png',
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
      image: 'https://i.imgur.com/EYmmKEq.png',
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
      image: 'https://i.imgur.com/ToNFCKl.png',
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
      image: 'https://i.imgur.com/RIRqelk.png',
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
      image: 'https://i.imgur.com/rTKe0YS.png',
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
      image: 'https://i.imgur.com/xHeSf95.png',
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