let state = {
  restaurDb: [
    {
      id: 1,
      image: 'https://gpoltava.com/assets/profiles_photo/d65f54ce48f015992b4a2cc888602569.jpg',
      title: 'Beer House-Прима Пицца - 1',
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 2,
      image: 'https://image.freepik.com/free-vector/chef_20448-9.jpg',
      title: 'Beer House-Прима Пицца - 2',
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 3,
      image: 'https://previews.123rf.com/images/imogi/imogi1901/imogi190100101/116383392-vintage-monochrome-chef-skull-with-crossbones-isolated-vector-illustration.jpg',
      title: 'Beer House-Прима Пицца - 3',
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 4,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/97/d8/21/caption.jpg',
      title: 'Beer House-Прима Пицца - 4',
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 5,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 6,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 7,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 8,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 9,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 10,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 11,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },
    {
      id: 12,
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
      description: 'Текст рыба Текст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыбаТекст рыба',
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
      map: 'https://maps.google.com/maps?output=embed&amp;q=Полтава, Киевское шоссе, 60&amp;sll=49.563314,34.504631&amp;z=17',
    },


  ]
}

export default state;