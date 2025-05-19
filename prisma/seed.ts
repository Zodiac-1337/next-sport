import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 44 | 46 | 48 | 50 | 52;
}) => {
  return {
    productId,
    price: randomDecimalNumber(1900, 67000),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@gmail.com",
        password: hashSync("111111", 10),
        varified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@gmail.com",
        password: hashSync("111111", 10),
        varified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const jacket = await prisma.product.create({
    data: {
      name: "Куртка утепленная Rossignol",
      imageUrl:
        "/assets/products/clothes/jacket.png",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });
  const jacket2 = await prisma.product.create({
    data: {
      name: "Пуховик Bask Taimyr V4",
      imageUrl:
        "/assets/products/clothes/jacket2.png",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });
  const jacket3 = await prisma.product.create({
    data: {
      name: "Толстовка Under Armour",
      imageUrl:
        "/assets/products/clothes/jacket3.png",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(1, 5),
      },
    },
  });
  const windbreaker = await prisma.product.create({
    data: {
      name: "Ветровка Kappa",
      imageUrl: "/assets/products/clothes/windbreaker.png",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 9),
      },
    },
  });
  const coilLuvias = await prisma.product.create({
    data: {
      name: "Катушкa DAIWA 20 Luvias",
      imageUrl: "/assets/products/fishing/coilLuvias.png",
      categoryId: 5,
    },
  });
  const racket = await prisma.product.create({
    data: {
      name: "Ракетка для настольного тенниса DONIC Original",
      imageUrl: "/assets/products/game/racket.png",
      categoryId: 7,
    },
  });
  const dumbbell = await prisma.product.create({
    data: {
      name: "Гантель гексагональная обрезиненная",
      imageUrl: "/assets/products/gym/dumbbell.png",
      categoryId: 6,
    },
  });

  await prisma.productItem.createMany({
    data: [
      // clothes
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 2,
        size: 44,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 2,
        size: 46,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 2,
        size: 48,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 1,
        size: 46,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 1,
        size: 48,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 1,
        size: 50,
      }),
      generateProductItem({
        productId: windbreaker.id,
        pizzaType: 1,
        size: 52,
      }),
      generateProductItem({ productId: jacket.id, pizzaType: 1, size: 44 }),
      generateProductItem({ productId: jacket.id, pizzaType: 1, size: 46 }),
      generateProductItem({ productId: jacket.id, pizzaType: 1, size: 48 }),
      generateProductItem({ productId: jacket.id, pizzaType: 1, size: 50 }),
      generateProductItem({ productId: jacket.id, pizzaType: 1, size: 52 }),
      generateProductItem({ productId: jacket.id, pizzaType: 2, size: 52 }),
      generateProductItem({ productId: jacket.id, pizzaType: 2, size: 50 }),

      generateProductItem({ productId: jacket2.id, pizzaType: 1, size: 44 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 1, size: 46 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 1, size: 48 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 1, size: 50 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 2, size: 46 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 2, size: 48 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 2, size: 50 }),
      generateProductItem({ productId: jacket2.id, pizzaType: 2, size: 52 }),

      generateProductItem({ productId: jacket3.id, pizzaType: 1, size: 46 }),
      generateProductItem({ productId: jacket3.id, pizzaType: 2, size: 48 }),
      generateProductItem({ productId: jacket3.id, pizzaType: 2, size: 50 }),

      // sneakers

      // fishing
      generateProductItem({ productId: coilLuvias.id }),

      // gym
      generateProductItem({ productId: dumbbell.id }),

      // game
      generateProductItem({ productId: racket.id }),

      // Остальные товары
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
      generateProductItem({ productId: 18 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          "/assets/products/stories/stories1.png",
      },
      {
        previewImageUrl:
          "/assets/products/stories/stories2.png",
      },
      {
        previewImageUrl:
          "/assets/products/stories/stories3.png",
      },
      {
        previewImageUrl:
          "/assets/products/stories/stories4.png",
      },
      {
        previewImageUrl:
          "/assets/products/stories/stories5.png",
      },
      {
        previewImageUrl:
          "/assets/products/stories/stories6.png",
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE",
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
