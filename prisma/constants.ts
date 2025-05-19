export const categories = [
  {
    name: "Одежда",
  },
  {
    name: "Обувь",
  },
  {
    name: "Велоспорт",
  },
  {
    name: "Единоборства",
  },
  {
    name: "Рыбалка",
  },
  {
    name: "Тренажеры",
  },
  {
    name: "Игры",
  },
];

export const ingredients = [
  {
    name: "Мюсли «Вишня»",
    price: 59,
    imageUrl:
      "/assets/products/other/muesli.png",
  },
  {
    name: "Батончик протеиновый «Шоколад»",
    price: 79,
    imageUrl:
      "/assets/products/other/bar.png",
  },
  {
    name: "Батончик протеиновый «Гуарана»",
    price: 129,
    imageUrl:
      "/assets/products/other/bar2.png",
  },
  {
    name: "Аминокислоты BCAA «Малина»",
    price: 1999,
    imageUrl:
      "/assets/products/other/amino-acids.png",
  },
  {
    name: "Аминокислоты BCAA «Апельсин»",
    price: 1800,
    imageUrl:
      "/assets/products/other/amino-acids2.png",
  },
  {
    name: "Аминокислоты BCAA++ «Грейпфрут»",
    price: 850,
    imageUrl:
      "/assets/products/other/amino_acids3.png",
  },
  {
    name: "Стик от мозолей и потертостей",
    price: 599,
    imageUrl:
      "/assets/products/other/stick.png",
  },
  {
    name: "Магнезия",
    price: 399,
    imageUrl:
      "/assets/products/other/magnesia.png",
  },
  {
    name: "Жиросжигатель",
    price: 2299,
    imageUrl:
      "/assets/products/other/fat-burner.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Кроссовки PUMA Skyrocket",
    imageUrl:
      "/assets/products/sneakers/sneakers1.png",
    categoryId: 2,
  },
  {
    name: "Кроссовки PUMA Milenio Tech",
    imageUrl:
      "/assets/products/sneakers/sneakers2.png",
    categoryId: 2,
  },
  {
    name: "Кроссовки PUMA Reflect Lite Trail",
    imageUrl:
      "/assets/products/sneakers/sneakers3.png",
    categoryId: 2,
  },
  {
    name: "Велосипед подростковый Stark Madness BMX Race",
    imageUrl:
      "/assets/products/cycling/bike1.png",
    categoryId: 3,
  },
  {
    name: "Велосипед BMX Stern Ranger 20",
    imageUrl:
      "/assets/products/cycling/bike2.png",
    categoryId: 3,
  },
  {
    name: "Велосипед горный Stern Motion X",
    imageUrl:
      "/assets/products/cycling/bike3.png",
    categoryId: 3,
  },
  {
    name: "Велосипед горный Trek",
    imageUrl:
      "/assets/products/cycling/bike4.png",
    categoryId: 3,
  },
  {
    name: "Велосипед горный Stern Energy",
    imageUrl:
      "/assets/products/cycling/bike5.png",
    categoryId: 3,
  },
  {
    name: "Боксерки Lonsdale Heskin",
    imageUrl:
      "/assets/products/martial_arts/boxers.png",
    categoryId: 4,
  },
  {
    name: "Боксерки Nike Hyperko 2",
    imageUrl:
      "/assets/products/martial_arts/boxers2.png",
    categoryId: 4,
  },
  {
    name: "Снарядные перчатки ULTIMATUM BOXING",
    imageUrl:
      "/assets/products/martial_arts/gloves1.png",
    categoryId: 4,
  },
  {
    name: "Перчатки Venum Challenger",
    imageUrl:
      "/assets/products/martial_arts/gloves2.png",
    categoryId: 4,
  },
  {
    name: "Макивара Twins KPL14",
    imageUrl:
      "/assets/products/martial_arts/gloves3.png",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 5,
  },
];
