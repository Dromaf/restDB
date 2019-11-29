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
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWGR4YGBgXGBgXGhcYGhgbGB0YGhoYHSgiGB0lHRgYIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0lICIwLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAE0QAAECAwQGCAEIBwUHBQEAAAEAAgMEEQUSITEiQVFhcfAGEzKBkaGxwSMHFDNCUnLR4SRigrKzwvElNFNzkjVDY2R0orQVVGWjpBb/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACsRAAICAgEDAwIGAwAAAAAAAAABAhEhMUEDEiIyUYFCYRNxkbHB8DOh0f/aAAwDAQACEQMRAD8A+NleEKQU2hTK1Yq4KwbQsqkdZT0p2Fp6D09nA6KhEyRG5d6G84JEVehcJuTzCXDcSmZPUU0tE4bGC2rTuSsMZplv1qb0tBOJSLktLaGbugEOY7P5IwJujigR8ksdjS0LQ09LtHclYDcyjSjzcccqZJ5E4AC2rhzsRI7MHU2heHt0R4sPQidyzYEsMBK+ynFfdaukGVPcj2pAFwGmvPig35UGKfZYiDoley5wpxPko3TQ0xUoLCK1CcRbR0IYpiNiO8c+SFBbjqRphpHj7JHspHQF8IVB4Ic2E5FbiNSVms0YsE1SFiaeKIx2KichxXkMYpyKPT2ivKL0HEr0BY1HmK8R6BctZu0EzIL1pXkucOCI1tSgxksAHt0u5MSrtGiDGFCjQ2kVoMCs9GjhhYZ9UtMMNTRHY5QmcCgtjzyj1kIg1I1c4KMqTXDOvgpwXkloIwPuoQxpEfrLe9i+zQ200vIMuQT3H1Cciy4uuxpQJayJOJEiNhw2uiPdUBrRUk11AeupKsplZWmg4GA71GXl3xSGQmOiPP1WNLjnsatgLDlJMfp0Qxo3/toDqXddIsUdk7hjxVbOdNJt3wpbq5SD/hwGhpI/WfS87XlTNaK9zTljCJyvyfzt29FEGXByMeK1nkKnyTDeicuGkRLTlGnXcvRKeiy74bi8ue6+52ZcSSeJdijg6JQlJGjB+5dHorKF1W2tK12OY9nnUpmJ0HmIjHdRFlZiowEGMC7/AEuAKx5ZVzRt/Aoj4QEN9NWPDHUmbWBYp5yNf+jTEu4tmIMSGdV5pAPB2R7ioWi+rQnej/Tadg0Z1xiQiaGHGAitcNmnUjuIV9NQrPnMMJCYOVSXSzzsxxhemOtCUfMPTl4GMlma+clzxokq1tSxY0o7q47C05tObXj7TXDBwVZHdg4Hd6peSirtsWlhijuNabfzQ5U5o7hiEZPIkFg6OQTwSM0nXjHik4yMAdTQvEGACnDb6KFcUZ5wA38+qoyCPITefBel2JTkIZpUipKWylUiNdxXLqFcsAXgPoVN8UjJLtKK5UaySTwdFeTQlWEHFoVeRgnpQ4UST0U6e8kGZok230Q41b1BtqiTJ7VNg9KJeR+GjpcAXeKGT8U8aossyrRzTxQ3wnOjBjGlz3ODWtGZJwAA3lFZbA8RTNPYdmxJh4gwmhz3DM9ljcKvcTkG81Ts3bUGSY6Vs81edGPN0o+IRm2F9iGMcRn5p224okpd0hBcDFcP0uK3WSK9Q0/ZaDjx3lYNuNe/0U4+NotLyp8DEu6pNTmSSTjjnilZioJOWPPom5ZuNOdyBNipG8rR2CfpJQHEnHYjwjgedai7PuqpQXYO51pZDxxgWjw9IDnWjw4Xwn1QZyJR7f6pvq/hO37eH9PBM9IWO2Vcu0BzBtd7p60hU9yUkW1fDO8eZCbtnB5TS9SEgvBsvrA6ShsIS02wx5RxOBxfBNKX4Ts20+zlj4qdK+j5lg2Ix4iy0bGDGH1x9l32XjGo3eFSzsDvV90Wt2GxjpSaq6Ujm6/KsF5yjN2EGldw3Y5ZM1WUZiG+mrUm4R7OaY6SWM6TjPgvoSKXXDJ7D2XjcR51SkH6vOr+iEgwBzbiBXn8kmIlQU9OZDyQmTIupovAs/UJgYk7FOuXFTDcDvQA2hATkXgs2GgJ3KvbMUOSbJ0CdXISFMUsUPOXsNfOj9nzXJOi5N2oTuYNoRwMFF7aFGpgmbFiiDxmmZTUUCmBRpF2ISS0Uh6hiK2jivI7PT0xRprtV4LyJippl5R2KwopGGqq2vRiXbKsjWm8VdD+DLAjAx3jF+8Maa+OtYqE4AHWammuuC2PyiuMESckMoEIPiAZGPF0neAwHEp1uyT9NGclIpMNzi4kkkuccSScSSdZrtS8LPv/ABTNmwgILuPqlGO0wp8st9MRmRYesLia4US8U9lOyrcecEOHIPiPbChMc95JDGtFSTw2b9SydsElUQkRlKHUQlIRxcN3jiCth/8AwcWH/e5uUlSfqRIt54w1tbgPFQh/J/HfV0rMSs3QE3YEUX8vsOpUcCj2M34ibRkJrSfmMPUUTstFLoMQnV+CUn5QsjGG9pa4E1a4FpBpWhByTkuaQYuOvLu5zQlpGhdsUkO2z7w9UW23C+eKhIDSZhr911qmriec6LfWBf4yQb8Md6XjD4YP63sUaGasHOtAmfowP1j6FGOwy9Pwa2E35/ZeljMSHZ2vlSQC0/cOPAb1lWjHPnBaHoDPiXmID39h7uqiDUWRNEg7qkHuVXb8gZWafL4nq4hbU626jxukJm7ES7RScGW4JVkPRrrqmZ53a3GniPxUSzRCCwjSVyAUS0XNPgUCROZTxZOawOM+h8vP+qSonXYQgNdR6FKN9AtE0+Dyo2LkLFcnJWHjtxCkBgvZrUVzBgUnBSsnMbmNy6TJqiwBpdyhLEjHfRZjJU0PzXsFANwG+qjENRVewnVA4091LgveSw6ISYjTsvCOuMyvAGp8gmenkyYs5FianRX0+6CWt/7QET5MR/a8tuc894gxHD0CrrbdWh2ud6lO8USi7TOs6nVxO5VzDR5T9njB/Ae6rnCjhzrSR2ysvSi2g1v0ANTQCmZJwFN+5ay3p42XBMpLuAnIgrNRm9pl4XhAhn6tARecNu/BP5PJZrp3rogBhysN0w7YSzsDiXEH9ncs5a006I58WIaue8ucdpJqfX0QjjIZ+WOELTEfMkUxqca1JzJOtBgRS0hwJDhiCDQg1rUEYhMvAI4q56E2RBLYs9NC9KyoBLP8aMexB4E4niNpTRViSbRs7OsiNbEvWahiHFYAJWcfoddXOE8ZxBscAde+tI7oZDDIsIWnJdYHEOa8vhhrwaFpc4YGuHFZ63ekszMTLJh7yHQ9KE1tQyDTstY3IZAbStJ0/hscWTbWhrZyCyO4bIhbdeONWjxRk1QIJ2/kzNs2HMSERojwyARVrwb0N+H1HjA8M6alUxXdadEXa7TVarodbzTds+cJfJzADRXEy8Q4Niwz9WhOIy17a0tp2ZElZmNLxBpQnltaYEZhw3FpB70WlsEW/SxSlBdOxezLRdZh9o49y8jY93PujTwoGcDq3BTvKLV4s8hwwYIB3rT/AChtvzMGYp/eJeFEJ/WoWO/dHisyw/Cbjjl5rVdLP7rZZ1mWcP8AS4U9Vk3kEkriYmbacePt+AXjY2jdFONVKeyJHOC4huo880TrRNryZEZBJOGB3lWBaLta6krKNvXhzmjF8iTVtInHfUDyQKYO51Iz8wK6ufRRP0ZKZAeWKUXI1N3ovExKgkfshewBUdyHfqymxFkxmleiiyz1naG8BQaNKm/n1RGHJReNPjT0QCNRzojH8kKWfjTfUceSpGLo0pTnJDgGnel4KbZoPk3mLtqyhNMYoaf2mvh/zJa3JcsLmnNkZ7DuuxHDFV8pMmDMNiNxLHB44tcHU8lr/lMgNbHfFZTq5gNmGEZERQHE111cXHvRk9Aisv8AIycKbuXhQmuFK0yKEyCXmuXnzkupV5GzHxH5+SNIg0SvGUMm3hmwsSJ1Vlz0UZxYsGXB3V6xw/01WQn+wRvIr5LSzhuWHDH+JPucf2JcM/HxWVniaA121plWgK1ZQbxIJBeLlymkBjz4LTW7D6myLOgDOO6JNvprNbjPBjqeKyURpGlXHFbS3h1tm2VHbkyHElnbnscCAdlQCUy02TeXFGS6urqjnILc9Lf9l2a11KmHF/03xRZezJCJGeITBV73BjeLiAPD2Wh+UWahmL1EM1ZKMbLNO0sGkf8AUXA8FO7Rftr/AGzFy7MGnXT3/NbTpZF+cSshPZuiQjAiu2xYBugne4EnuWMkqXBjzVaqwH9ZYkyw4mWmocQbmxm9X+8D4p92R12mUmYlHZbQfTuTdqdlp/V9/wCirZl4vu+97qxtgCja4aPqkayisXcZEIB+HQ7lqenAuts6DkYco1xH33E/yeazViSTo7ocBvaiOawU1XjSvdWvcrrp/aDYloxrnYhUgt3CEy7+8CilVgbvtMxM5Digx2AYb6r2fdg3fj6LpoCgxqaYp48E58iQTVnjFBcKBMSWYTS0TgvI9mBQncEGL2AN6LGOLu4eAQ5g4AbTz6oIMuSHWDeuUuq3DwXJxKIsAub1KRdpLyAcCEWDCAxxzSt7HitNEm503++ajEwd3ehUAcV7Majx8kKyG8EntJHOwIQNFZNYCzCm1VbNfehF2GSoZfi8cCtvGHzyxgc4sg7q3bTLuoWu4NOG6hKxLsxw9lqOidtiUidYW34RqyND+3CeKOFNuAI4BBuhlFtOighNwDhiaY+ilZMXRpv9Vd9J7AEo+jHX5eIOsgRcw+G41GO0ZHu2rP2SaHVn34JZaY0XlUXtk9MIkvCMuIMtGY2IYjTHhiKYbyA0ltTQZBX1t2q6dsaPHjw4IiQ5mHDhOhw2sIBaC8YZihPhuWAmmAPPf6rbdHJX59ZT5GFEY2ZhzHXBj3BnXMMMso0nNwJy3DaqRJz5MWXG6PujvFAVs/k6iCZgx7NeRWL8aXJ+rMQ25D7zajuO1UdvdFp2VYHR5d7GUpfwcytKUvNJA76JXo2InXweqr1nWNEMj7d4XfOiXSG21Rtei0P5lLzFoRG0ewugywdmY7qtcf2BXxcsQ6MeqeSakvqScyaYk69a+nfLQHfBILDCAiAXMhGv/GrvrTfnvXyeK8dU4bz7eCSqx7D91ru90XnQqwoczCjvjR+pgy7BEiPuGIaOdQUa3E5FXln/ADCWk56HAnxMfOGw2sh9TFhPDmRA+pvClAK47kp8n8s8Sdpve1wgmTeLzgQ0xL16G0EjE1rhvWUkWZd59VSVJMlBOTQB8KsSg2n1T9pwy6lKZcMuQoMFHE5Y9ytLPs+JMxWwYQvPeaAY4bScMABiVJydouopRZZfJ835uyYtF40ZUFkIfbmYgutA+6DXvB1LGtiG9UkkmtScak1qeNVsemtoQmsZIS7qwZU0c/D40wfpIm8VwHfuWOhuxrxVH7EV7kY7jfoRll4IVM+daNGHxdWR9FF2JTIV8gYmRO/n0Tdnw60SsQaIO9N2bqWlo0PUQcNI8T6lCjgVA4r2GceeKg81f4DxWSM3gN142LxT+btXIWhqASoFfJM3dE8UrKnHBOvaKHchPYOnoRccSjRRUimo18vyQTrTLaZbx+HumYErG5bEOG7hqoo9SNgO3ALyC14BDcj3okUihpq188VF7OmNNZFHdumOBT8R4uO7st2NSkYzviHDPH0T0XsuGtGXAsOS86GWvBiSzrPnXXYDnEwIuZlop172EnEbyqq0bEjSUw6DHbSuLXDFkRlMHsOtpw4a1V2c2jSTv58lrejHSRjoYk55hiy4Pw3j6aWNM4btbf1f6J5O7RKCapox9oN+Jnl+Kk2FVpB26+FKrQ9KuiEWDWZhObMSjuzHh5D9WK3OG4b8PRVTBWm/ahJ0kNFd0ma75NJ5xmBIxSTLzTXQXw3GrQbhLXAfVII8zuSnyVwbloExBX5qyNEPGE0j1Pkh9BD/AGpKD/jD0KseiLP7QtfdLz38UBNDKB1MS+CMnNOmbInmxDedAjw5gHZ1znNdTdUE/tJboo+HKWfHtF0JkWMIrYEuIgvMa8sa90Qt10a5GsSXIs21csYMLyjHNIT2FgwRlWeieUIfghDKsHVw2v7oRtbpZOzcK7MR3PaKEMAYxla4aLAAVWWfhWmz2QYTaNxpmB36loui3RqNNFwhNFG1vxHG7Dhja53DGmaWWSnTxkqYMq+LEZDY1znPcA1rQSSdgHf6rb2rMssqDEgQ3B09FaRGiNOEBhH0LD9s63avBc60peRBhWeesju0Ys4RS6NbIA+q3Dtf1GGtdx0ia6zU4mp1nfmgmrrkMk3Ft6FGQ6wgeTmliSKJhh+BXZ+CXgtOFVRckXwFiO0+5RBz3KbG1ca45e68i0xplWixqxZGYbRrRt590aC+607aFCmHYs3YomTCeA81noy2wMIc+SiG1cSecKeylCbXNT3860RUgvdz4rl5ed9nzXJClCjQA4jmiZhxgXEAjEeOCUnmEHiEoHHCir2KSsj39rodIxrvR2Or5U41QILq88ERva70rHiWECO1pOrDZ3+/khxTjUZHLghRRkpu7IO4d+r2U65LpvRCO3Tw2KcNxwqdXPmhxnULXH7I710PTd5b8KVR4EvLo6SdgW8T30KYku13ryHKBpzNeeC8koulSmfsUJO7oeC7assbG6QzEnMF8B9A7tscLzIjdj2/WG/PetTaNmy83AM9JM6p0IVmJatbgOHWw/8Ah4Go1dywUy34m40/HWtj8n0/1M5Lg9iKepiDUWRdChHEtPcs3aSBFZbQp0GdW1ZT/OHoVa9Ez/aNsj/l53+OwJHo9LdTbsKD/hzTmDg1zmjuwTHR59LQtw7Jac/8hipBeJLqvyQ3Y7gbOtMUH0DPKKqW1/8AYUt/1sX+HRW1g/3C098s0/8A2BI2hT/0OV3TcX+Gp9LEf1/cp18yf5r9hPozYcOJCiTc450OTgOFbvbjxKYQYddZ1nVXiRY210oiTLepY0QZVuDIDBRtNrz9c1xqcPVKfKL8CDISDToQoAjv/WjRy5xcd4GW51FSSMQ07sfCvPFHqKlgHRdyyPQH0GrWq21YejlzyUxIxqjLIU58UG0naIwzpXvUYKpHR1HcCvpSDztRJf6LgvJh3wQMMfxr7orodIQ27OecVZvHyc0Vn4FZbMgqda1+8aqBFDsNEeCAabOcUzAvYBNdoDYPf8lz4mhQVz9F7FOnwAp61Qpk4VRXArxZJp2I8uMuA90vCYcUU4AeKD9gx9x27vH+oLlXY7PVch2h7keT3ZbtxCnISwqCVCI2sK9r9kSzn1o1M/TgWKXerPGto455kLmNwqpv7dF5WgOxLY6WSc2cAUSugMd3n+aXj9keKlBdh5e6FYGvyITh0Wa8CPAqwI+j3itO7NLzMOrGmn2vMfknGtBYzaB+J90snhDwi+5knOAI8EjJGhyqUVla+PivLIlHxY7IUOl+I8MF7AVdhjhlmtFYo3UllMjaGDmEePjgrOyYlI8udkVv8RqPE6Lxn/OGC5ekr5jaWFGGhu4Y4nciydgROqlYrrpbMlwhUOIuvuG9hhjTas8RAncmvcvphoHSemybbT9pt4+qBZdPndvEZiXmh/8AoCqrL6FzL7QjS7Sy/LuvxHufRjW6tL9oatRQ+lfROPJlsSI6G9kckMdCffDi3Mccd6rZF01svLDbSStPV+iNP/f+SQtIVsGWH/NRv3E7bvQScbLOinqx1cLrHwus+KGAVJLKbBlVQlPk1mTDET5xKXKgV68XQ4itCaUBy3pIJqOik5Rc9ld8sI/tKI37LILRwEBh91QWKQGxK1wqc9xV9K9Ap6bgiYhNZddeuNfEDXxbta9WD2hhgaiqQsOyYjpabmMmS5a2IDUOHWOMMACmJBGOIojPMROnSnvRKSaBCyrXZsSFr9htNoVzadlxIEGBEeRcjsLmXTU0aaGuzMbVn7Tidnj7KME+46OpJdlAp8aMMZVFU7aDqQwN4HqfwSdpRKOYSMgjWhFBaG7wfI/iqPgkml3CJBJqiQSuiNNF0Egc70/BNbIt+kO78ES0m0u05yXkFlDxPP8AVStKt4DYPzW+ozXizyAzR8l5NOyHP5IkM0ApnVCju06c5ILYzxGj3S+yVyb+bH7C9W7gdojJ4w3NUZA6bKb/AHRLOGY5pyEOUwiD73umfIq+lk42DkVral3j7+6jabaP70SWz4jGuxI9WVXqohHFW+SHAyI318gjPGiUkw4EbUY5Qs8MtHN+E3ipS7qwhtB8qlRgGsB33h6odmvwIO/n1UmsP7F0/JfdEn4PHH3/ACVj0Hi0tGWG2Oz95V0btA/rDwqE/wBCR/ast/nt/eVIEuo2bqU+l6Qfcj/xEtAifoFh73P/APJFU1BBETpC44NDIorqq55oOOC8sCz3RYFgwgKn4zjua2Za5x7gD30TNXH++4idTX94LCGf07pBr+D/ACqpnNKRsbAU+fRARq/vFPNW0M/p3SD/ACf5VTzrwyQsck4CeeSTqAmc0fq+P5N9Hyv2LmYJNpWuTiRKxh3XG0CyFkCvR+L/ANe3+A1alpebVtpjm3QJWLQ0NSHNBB4GqycCsPo9HunET7KHjAYsouq/MDkrvjBoLViOZPdHmgkAQ4IoMKXnhrvEYFKTDLkr0iAFB85gkd825TtZ5M/0errhy57+tCJbQ/QukNP8eD/5bkXwhFm2uP8Aoh0xjVkLI/WgRD/3M/FYhsLraUwxPGgWt6baMjYzHYOEs9xBwIBcyh244+CytmOwHE696SarKK9OXckmTmoYvsFN/hio2qMAdZ/JDju+NllTbs/NRtR+LOdiRLKKNrtkRjtAb3AeKhBwx3qMyfBeQXChJ2Gn4qiWCTfkFgsvU24Y8aoU6KEBNyn1ThkO/nBLWp2xwQi/KgyXhZKvZQoTgX13/j+KdbAF04VoNtFWwBSp3IrNgkqoc+dDYfNcq2+vUe0X8Qbs/CIeec1GODfdhrXQH0icVKdFHkjWAfBbk30/JO0hU13L2WNQOB/BAiRi+gIAFKV4I8IXabPxrsStUqHi7laPYjqAjnJKvGzj3I82zKq8EJuokmm5GOECeXQzZzvhPG2lPEIMs+jjUHX3pmSfQEd/uvJioc078OGSnyytUov2Ik1dTWT6q46IsAtSV/z2+o/NU7e2K7deytOeCelZ8y83DjBocYURrw2tK3aYVzCywzSVxv7n1G37YiTsK2ZSJdAgB0SEWC6fhPyfTtZDNS6O2k2BZNmkD48YvgtdrbDMwTEpxowd6xY6Rua60IvVtrNw3AguOhfcXGhppU2GmSTs/pO4w5KD1YpJ3yDeJv34giYimjSlNabv8WI+nU0qNxDP6f0h/wAn+VUtty5i2XZcOv0k1FZX78e7/MqRnTZ3zmfidS0fP2iG4Xz8LVUG7p+SielDgyUl+qb+iRnRw68avLovWXSKaNDhWpTNruv7fyKk+yvv/B9MjdJokWbtOSozqYEo8NNKxKtYGm88nHGuHBfPnM/sCOP/AJBn8BiTh9MXMnpuY6lpM5DfDLb5pDv5kG7pHdQJKYt0tknyIhgtfGbHv1NQRDDLl2lMhWtUe7IvbhmutJtZ7o7h/uoHlEBKsZS2YkrCt6PCul7JiGBfbebpzL2GoOeDislY/wAoUWXgwIZl4EaLAaWy8eICXwQ4YgfaAyGWWtLwLbc2SnIJbeM26EXvJoQ6HE6ytKaV4k7FpSSo0INpof8AlUcZhlnzzsHzEtR7RW6HQ3fVB7IN84bljLNeK0rvVz0htx0eWlYJYGiVY5jSCSX3iDVwIwOj5qksvCI07vdaTuLDFdskiUWJ8V6HNuq5tdnuvIv0sT7x9SoxMYg7kEsmbdV9yU1l3oRiUqNgTUYUSswBnzrRiCeMj8ocBwSc6+sQJizG1ru3pScAvuOzYhFeQZvwQ/EiaB2FV8R1G8U1MmjWt3VSsXG6N60EbqMhdK5OfN+C5bvE/DYtAOkCm546TTtHqEpCwdRMTXYBGrn3Re0FelgQygFc6+yYitpTk6kCa7I52ph+LK69RQYY8nsUaI5wQpdgo3bVTpRrRx9F0pSnA+KGkO8yGJRukfu+n9EObiaTRsJTktBoCdxplw1c5qttGopx59EscyHniBKOKRKbCM9mFU1a7aOBw1FKTTKvqNdPRN2hBc6hGwa6c5ovaAr7ZByawn/d/HxSkrGDTU5Xdm0Jiz3VY+uobuB9VXwxVzN4rz4JYraDOWU0bWUlrDdccY09fFC6kNl29maV1VRokOwetr18/e2CGyixklWlRq9ijWhZ4Y6FEbGhxDEYXOYx1XQqEaMQanH2T3km1hZ2zUCBYN+vXz9f8thCJMy1hVNY8/lqhs2LM2jZ7WTDYYjwXhwaeshmrGX8w46i3XsQrblhDjRIYiMiBpoHwzVrxtadY3o3nRnHGzzpJBlxGAlHRHQrooYoAfXXUDVVeuJELjTn0Scw4FzPun8kdzgG1JOO7JLLNDwpWDmhVpULPdR/dqXkzMtLNGtfBFlodWtONcsO9bUcg3PAxORBUCueOeWBVZNRPi8KeAorGeh1iAHVhgNQVROnTdxR6aF6zHq3qbEtOZgBFlsgShx+0EVsE3cRqycL29JxG1ed5TlmGg4A8+qWgYvG935rLbZpemKC2odKg3BLQMXjcvZ59XE710sDeOzWil4iydzLJcq35/zVcl7GU/ERB40jTiivfoEHUUCIcju9FO7QEE1riqEfcAY1W0OrACnun4DqtVcIaflRond7LTqjdK7D3tHvQGAY1ORU4eRUKi8R3jnv8kiKvhlnBeCN+PrT0ASlpNBA4eyLZ8MaR2fih2gNEFTjiRWeYWeOwodydhm9SusBKObVreGGNEd7iGt20WltGjpg5F2i+nHzAQpcaPCvqp2YRcdXegyrtF434Jq2JevkLZb6inOSXL9MnuRrMwwG1QlD8RyPLBlqKCwhV/PJXTGLncQl2uo/cjX6k4oVka7VA5kYs52L2PFqwDHAngvZg6Y8vFeR2mlTvRXAr5E3Nw52BWkodGmGWxVsXKu9WUm3RcdgW6mgdJZIzESrm45NVXGFXHinoMLTIrq170qe0U0cCzz+pIxy2mAUetLng+i8iDHngvGHSTUhG3dFk0UDzSmjz6KvhRLpHBPRXUhnbl5Kvu6zlTDwSQKdTao9pexOGunmuNS129eltGlc11GngnJoRXKVFypZKg0bId/qjxdXD2XLlNlVyBg5Hh7puWyPBcuQmHpbPGZu51hR/wB4O9cuQ5GekWEjr4/ggWh2Bx91y5SXqLy/xhR2G8PxRpzss4fyhcuSv1DL0MSs7sPQJfsu4rlys9s51qPyMSOrivZL6V/OpcuSvkovpIDPvUW5nifZcuTC8hI3bHEfvhM2n9T9r2XLkvKG4ZXRuyOKsLMydw916uRn6QdL1C7e2eH4pGFmuXIxEnv5JxO0edaHCzK5cn4J/UWE39GUi/s87ly5JDRTqbOd2FE5FcuTkxZcuXJyZ//Z',
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
    

  ]
}

export default state;