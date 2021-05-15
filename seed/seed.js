const dbConnection = require("../config/mongoConnection");
const data = require("../data/index");
const products = data.products;
const comments = data.comments;
const users = data.users;
const productType = data.productType;
const admin = data.admin;

const { ObjectId } = require("mongodb");

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

  // const product1 = await products.addProduct(
  //   "Water Lilly",
  //   "It is one of the most majestic plants to have in a water garden. It is by far the most exotic of all pond plants.Best grown in moist, acidic, humusy soils in part shade to full shade. Plants may be grown from seed, but will not flower for 4-5 years. Quicker and better results are obtained from planting corms which are sold by many bulb suppliers and nurseries.In addition, offsets from mature plants may be harvested and planted.",
  //   "https://cdn3.volusion.com/zmypa.bvvnu/v/vspfiles/photos/WA27539PL-2.jpg",
  //   "seed.js",
  //   34,
  //   [
  //     { property: "product_type", value: "plant" },
  //     { property: "color", value: "green" },
  //     { property: "weight", value: 55 },
  //   ],
  //   67.5
  // );

  // const product2 = await products.addProduct(
  //   "China seeds",
  //   "seeds are from china",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   9,
  //   [
  //     { property: "product_type", value: "seed" },
  //     { property: "color", value: "brown" },
  //     { property: "number of seeds", value: 70 },
  //   ],
  //   45.5
  // );

  // const product3 = await products.addProduct(
  //   "China seeds 2",
  //   "seeds are from china mainland",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   10,
  //   [
  //     { property: "product_type", value: "seed" },
  //     { property: "color", value: "white" },
  //     { property: "weight of each seed", value: 2 },
  //     { property: "number of packets ", value: 5 },
  //   ],
  //   10.5
  // );

  // const product4 = await products.addProduct(
  //   "french fertilizer",
  //   "seeds are from french",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   43,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "color", value: "pink" },
  //     { property: "Imported from", value: "china" },
  //   ],
  //   3.9
  // );

  // const product49 = await products.addProduct(
  //   "french fertilizer",
  //   "fertilizer from french",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   23,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "color", value: "pink" },
  //     { property: "weather", value: "summer" },
  //   ],
  //   3.6
  // );

  // const product5 = await products.addProduct(
  //   "Indian Yellow Plants",
  //   "Plants from Indian Subcontinent",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   3,
  //   [
  //     { property: "product_type", value: "plant" },
  //     { property: "suitable_weather", value: "sunny" },
  //     { property: "lifetime (in Years)", value: 20 },
  //   ],
  //   3.67
  // );

  // const product6 = await products.addProduct(
  //   "Plant 4",
  //   "Plants with yellow flowers",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   25,
  //   [
  //     { property: "product_type", value: "plant" },
  //     { property: "color", value: "yellow" },
  //     { property: "lifetime (in Years)", value: 40 },
  //   ],
  //   45
  // );

  // const product7 = await products.addProduct(
  //   "seeds 5",
  //   "chilli seeds",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   44,
  //   [
  //     { property: "product_type", value: "seed" },
  //     { property: "color", value: "blue" },
  //     { property: "suitable_weather", value: "summer" },
  //   ],
  //   25
  // );

  // const product8 = await products.addProduct(
  //   "fertilizer 3",
  //   "good rated fertilizers",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   3,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "Imported from", value: "india" },
  //     { property: "weight", value: "Medium" },
  //   ],
  //   32.45
  // );

  // const product9 = await products.addProduct(
  //   "Indian Yellow Plants",
  //   "Plants from Indian Subcontinent",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   10,
  //   [
  //     { property: "product_type", value: "plant" },
  //     { property: "suitable_weather", value: "cold" },
  //     { property: "lifetime (in Years)", value: 20 },
  //   ],
  //   25
  // );

  // const product11 = await products.addProduct(
  //   "Indian Yellow Plants",
  //   "Plants from Indian Subcontinent",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   1,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "suitable_weather", value: "rainy" },
  //     { property: "weight", value: "Medium sized" },
  //     { property: "height", value: 20 },
  //     { property: "height", value: 40 },
  //   ],
  //   34
  // );

  // const product99 = await products.addProduct(
  //   "Indian Yellow Plants",
  //   "Plants from Indian Subcontinent",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   1,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "suitable_weather", value: "sunny" },
  //     { property: "weight", value: "Medium sized" },
  //   ],
  //   33
  // );

  // const product10 = await products.addProduct(
  //   "Indian Yellow Plants",
  //   "Plants from Indian Subcontinent",
  //   "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
  //   "seed.js",
  //   1,
  //   [
  //     { property: "product_type", value: "fertilizer" },
  //     { property: "weight int", value: 20 },
  //     { property: "number of packets", value: 43 },
  //   ],
  //   3
  // );

  const product1 = await products.addProduct(
    "Water Lilly",
    "It is one of the most majestic plants to have in a water garden. It is by far the most exotic of all pond plants.Best grown in moist, acidic, humusy soils in part shade to full shade. Plants may be grown from seed, but will not flower for 4-5 years. Quicker and better results are obtained from planting corms which are sold by many bulb suppliers and nurseries.In addition, offsets from mature plants may be harvested and planted.",
    "https://cdn3.volusion.com/zmypa.bvvnu/v/vspfiles/photos/WA27539PL-2.jpg",
    "seed.js",
    34,
    [
      { property: "product_type", value: "plant" },
      { property: "color", value: "green" },
      { property: "weight", value: 55 },
    ],
    67
  );

  const product2 = await products.addProduct(
    "Damascus Rose, Scented Rose",
    "Damascus roses are known for its distinct fragrance. Enjoy the real and oldest scent of rose.The Damascus rose is a deciduous shrub growing up to 2.5 meters tall, the stems densely armed with stout, curved prickles and stiff bristles. The leaves are pinnate shape, with five or rarely seven leaflets. The roses are a light to moderate pink colored. The relatively small flowers bloom in groups.It is considered an important type of Old Rose.",
    "https://wp-media.patheos.com/blogs/sites/289/2015/12/Rosa_damascena_002.jpg",
    "seed.js",
    10,
    [
      { property: "product_type", value: "plant" },
      { property: "color", value: "pink" },
      { property: "suitable_weather", value: "Spring" },
    ],
    50
  );

  const product3 = await products.addProduct(
    "Portulaca Oleracea",
    "Portulaca Oleracea, 10 O Clock is an annual succulent in the family Portulacaceae.oleracea is mostly annual, but it may be perennial in the tropics. Stems are purplish-red to green, forming mats. The leaves are fleshy. Flowers come in a group at the end of the stem. There are notched 4/5/6 petals.",
    "http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-portulaca-oleracea-10-o-clock-yellow-plant.jpg?v=1610699971",
    "seed.js",
    20,
    [
      { property: "product_type", value: "plant" },
      { property: "color", value: "yellow" },
      { property: "lifetime (in Years)", value: 20 },
    ],
    75
  );

  const product4 = await products.addProduct(
    "Coriander",
    "Coriander is a fast-growing, aromatic herb that grows in the cooler weather of spring and fall. Coriander seed is technically a fruit containing two seeds in it.",
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-coriander-panipat-desi-vegetable-seeds-16968795979916_600x600.jpg?v=1601348492",
    "seed.js",
    70,
    [
      { property: "product_type", value: "seed" },
      { property: "Imported from", value: "india" },
      { property: "weight", value: "Medium" },
      { property: "suitable_weather", value: "Spring and fall Season" },
    ],
    10
  );

  const product5 = await products.addProduct(
    "Tomato Pusa Ruby",
    "The most popular garden vegetable crop, tomatoes come in a wide range of sizes, shapes and colors. Choose determinate varieties for early harvest or cool conditions. Compact varieties are also good choices for containers and planting in flower beds.Tomatoes are an incredibly versatile food.",
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-pusa-ruby-desi-vegetable-seeds-16969383903372_600x600.jpg?v=1601346695",
    "seed.js",
    60,
    [
      { property: "product_type", value: "seed" },
      { property: "color", value: "Yellow" },
      { property: "weight", value: "Medium" },
      { property: "suitable_weather", value: "Year round" },
      { property: "lifetime (in Years)", value: 45 },
    ],
    80
  );

  const product6 = await products.addProduct(
    "Radish Red Round",
    "The radish (Raphanus sativus) is an edible root vegetable. Roots flesh is crispy with mild pungency.Roots are pure white in color. The shape is long, cylindrical. It is grown as a summer and monsoon crop from April September.Root length is 30 to 35 cm.",
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-radish-red-round-desi-vegetable-seeds-16969238020236_600x600.jpg?v=1601350426",
    "seed.js",
    60,
    [
      { property: "product_type", value: "seed" },
      { property: "color", value: "white" },
      { property: "suitable_weather", value: "Spring and the fall" },
    ],
    80
  );

  const product7 = await products.addProduct(
    "Perlite - 500 g",
    "Expanded Perlite is a unique inorganic addition to amend the heavy soils to make them light weight while still retaining moisture and nutrients.This high quality product is widely loved by gardeners for its benefits.",
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-perlite-500-g-16969176842380_1080x1080.jpg?v=1601350471",
    "seed.js",
    15,
    [
      { property: "product_type", value: "fertilizer" },
      { property: "color", value: "white" },
      { property: "suitable_weather", value: "Spring and the fall" },
    ],
    35
  );

  const product8 = await products.addProduct(
    "Hydrangea macrophylla",
    "Hydrangea macrophylla is a perennial shrub that has the unique ability to re-bloom throughout the spring and summer months.",
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-hydrangea-macrophylla-blue-plant_600x600.jpg?v=1609585178",
    "seed.js",
    70,
    [
      { property: "product_type", value: "plant" },
      { property: "color", value: "purple" },
      { property: "suitable_weather", value: "Spring and the fall" },
    ],
    25
  );

  const product9 = await products.addProduct(
    "Plant O Boost",
    "Plant O Boost overall growth booster is the best in class product for the growth of the plant. It is easy to use and very effective.",
    "https://n1.sdlcdn.com/imgs/e/i/3/Parle-Agro-Bio-fertilizer-1-SDL405073368-1-5a5a5.jpg",
    "seed.js",
    10,
    [
      { property: "product_type", value: "fertilizer" },
      { property: "color", value: "brown" },
      { property: "weight of each seed", value: 5 },
      { property: "number of packets ", value: 7 },
    ],
    10
  );

  const product10 = await products.addProduct(
    "french fertilizer",
    "These are from france",
    "https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_product_image/public/asset_images/products/Miracle-Gro/US-Miracle-Gro-Water-Soluble-Bloom-Booster-Flower-Food-1001921-Main-Xlg.png?itok=Cur7OyGj",
    "seed.js",
    43,
    [
      { property: "product_type", value: "fertilizer" },
      { property: "color", value: "pink" },
      { property: "Imported from", value: "china" },
    ],
    3
  );

  const user1 = await users.addUser(
    "Hanish",
    "Pallapothu",
    "9293258425",
    "hanishrohit@gmail.com",
    "hanishPassword",
    {
      Line1: "332 Webster Ave",
      Line2: "Apt #2L",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07307,
    }
  );
  const user2 = await users.addUser(
    "Dhruv",
    "D",
    "9293258420",
    "Dhriv@gmail.com",
    "DhruvDhruv",
    {
      Line1: "332 Webster Ave",
      Line2: "Apt #2R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07307,
    }
  );

  const user3 = await users.addUser(
    "Devika",
    "M",
    "9293258470",
    "devika@gmail.com",
    "devika123",
    {
      Line1: "11 Bryant Ave",
      Line2: "Apt #11R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07306,
    }
  );

  // //608359c8aa00751b1ebd7546
  const c1 = await comments.addComment(
    user1._id,
    product1,
    "This plant is so good. Looks pretty."
  );
  const c2 = await comments.addComment(
    user2._id,
    product1,
    "This plant is so nice."
  );
  const c3 = await comments.addComment(
    user1._id,
    product2,
    "This plant is not good."
  );
  const c4 = await comments.addComment(user2._id, product4, "so good.");

  const c1Info = await comments.getComment(c1);

  // const commentsList = await products.getProductComments(product2);
  // console.log(commentsList);

  // console.log("Done seeding database");

  await products.addLike(product2, user1._id);

  await users.userPurchasesAProduct(user1._id, product2);
  await users.userViewsAProduct(user1._id, product8);
  await users.userLikesAProduct(user2._id, product2);

  const prop_ = {
    product_type: "plant",
  };

  const admin1 = await admin.addAdmin(
    "Hanish",
    "Rohit",
    "hanishPassword",
    "hanish@stevens.edu"
  );

  await admin.adminAddsAProduct(product1, admin1);
  await admin.adminAddsAProduct(product2, admin1);
  await admin.adminAddsAProduct(product3, admin1);
  await admin.adminAddsAProduct(product4, admin1);
  await admin.adminAddsAProduct(product5, admin1);
  await admin.adminAddsAProduct(product6, admin1);
  await admin.adminAddsAProduct(product7, admin1);
  await admin.adminAddsAProduct(product8, admin1);
  await admin.adminAddsAProduct(product9, admin1);
  await admin.adminAddsAProduct(product10, admin1);

  //   await products.deleteProduct(product1, 34);
  //   await products.deleteProduct(product6, 24);
  await db.serverConfig.close();
}

main();
