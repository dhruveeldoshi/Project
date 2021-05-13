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
    ]
  );

  const product2 = await products.addProduct(
    "China seeds",
    "seeds are from china",
    "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
    "seed.js",
    10,
    [
      { property: "product_type", value: "plant" },
      { property: "color", value: "Yellow" },
      { property: "weight", value: 70 },
    ]
  );

  const product3 = await products.addProduct(
    "China seeds",
    "seeds are from china",
    "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
    "seed.js",
    10,
    [
      { property: "product_type", value: "seed" },
      { property: "color", value: "brown" },
      { property: "number_of_seeds", value: 45 },
    ]
  );

  const product4 = await products.addProduct(
    "french seeds",
    "seeds are from french",
    "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
    "seed.js",
    67,
    [
      { property: "product_type", value: "fertilizer" },
      { property: "color", value: "yellow" },
      { property: "number_of_fertilizers", value: 30 },
    ]
  );

  const product5 = await products.addProduct(
    "Indian Plants",
    "Plants  from asia",
    "https://i.pinimg.com/originals/da/33/bf/da33bf18c254ea101672892c612679fb.jpg",
    "seed.js",
    1,
    [
      { property: "product_type", value: "plant" },
      { property: "suitable_weather", value: "sunny" },
      { property: "lifetime (in Years)", value: 20 },
    ]
  );

  console.log(await products.getProductById(product4));

  // //firstName, lastName, phoneNumber, emailId, password, address
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

  // //608359c8aa00751b1ebd7546
  const c1 = await comments.addComment(
    user1._id,
    product1,
    "This plant is so good."
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
  const c4 = await comments.addComment(
    user2._id,
    product2,
    "I wont recommend."
  );

  const c1Info = await comments.getComment(c1);
  console.log(c1Info);

  console.log("+");

  // const commentsList = await products.getProductComments(product2);
  // console.log(commentsList);

  // console.log("Done seeding database");

  await products.addLike(product2, user1._id);

  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.updateStockOfProduct(product1);
  // await products.deleteProduct(product1, 27);
  // console.log(await products.searchProduct("plant"));

  // const prop = [
  //   { property: "color", value: "brown" },
  //   { property: "number_of_seeds", value: 45 },
  // ];
  // console.log(await products.filterProducts(prop));

  await users.userPurchasesAProduct(user1._id, product2);

  console.log(await users.getUserBoughtProducts(user1._id));
  console.log("hello");

  await users.userViewsAProduct(user2._id, product1);
  console.log(await users.getUser(user2._id));
  console.log(await users.getUserViewedProdcuts(user2._id));

  console.log("ujkj");

  const admin1 = await admin.addAdmin(
    "Patrick",
    "Hill",
    "IamPatrick",
    "phill@stevens.edu"
  );

  const adminIn = await admin.getAdmin(admin1);

  await admin.adminAddsAProduct(product1, admin1);
  await admin.adminAddsAProduct(product2, admin1);
  await admin.adminDeletesAProduct(product2, admin1);
  //await productType.addNewProductType("plant", prop);

  console.log(await productType.getProductTypes());

  // await productType.deleteProductType("plant");
  console.log("efdscrfsdcxfrdscefwdscxzbhrbdfjnscmx,rhfejnsd");

  await products.deleteProduct(product5);

  console.log(await productType.getProductTypes());

  console.log(await users.getUserLikedProducts(user1._id));
  console.log(await users.getUser(user1._id));
  console.log(await users.getAllUsers());
  console.log(await products.sortProducts("stock", 0));
  // below code is for testing database functions.

  //   const productsInfp = await products.getAllProducts();
  const userData = await users.getUser(user1._id);
  const produtInf = await products.getProductById(product1);

  //   const productsList1 = await products.searchProduct("harvested");

  const prop = { color: "green", product_type: "plant" };

  const productsList1 = await products.filterProducts(prop);

  console.log(productsList1);
  console.log("ghbjn");

  const properties = [
    { property: "plant_height", value: 30 },
    { property: "plant_color", value: "green" },
  ];

  const itemType1 = await productType.addNewProductType(
    "plant",
    properties,
    20
  );

  // const itemType2 = await productType.addNewProductType("seed", properties, 20);
  // const itemType3 = await productType.addNewProductType(
  //   "fertilizer",
  //   properties,
  //   20
  // );

  // const doesExist = await productType.doesProductTypeExist("plant");

  const add_property = {
    name: "plant_weight",
    type: "number",
  };

  console.log("efd");

  const help = await productType.updatePropertiesOfProduct(
    "plant",
    add_property,
    30
  );
  console.log("efd");

  const doesExist = await productType.doesPropertyOfProductTypeExist(
    "plant",
    add_property
  );
  console.log("efd");

  const update1 = await admin.adminAddsAProduct(product2, admin1);
  console.log(":f");
  const update2 = await admin.adminDeletesAProduct(product1, admin1);

  console.log(admin1);

  console.log(doesExist);

  console.log(doesExist);

  console.log(itemType1);

  const productsList = await users.getUserLikedProducts(user1._id);
  console.log(productsList);

  console.log(userData);

  const commentsOfprp = await products.getProductComments(product1);
  console.log("Ddd");
  console.log(commentsOfprp);
  const commentsOfuser = await users.getUserComments(user1._id);

  console.log(produtInf);

  await db.serverConfig.close();
}

main();
