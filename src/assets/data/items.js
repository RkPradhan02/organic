const items = [
  {
    "id": "1",
    "name": "Tomato",
    "price": 33,
    "discount": 14,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://pngfre.com/wp-content/uploads/Tomato-4-1-1024x790.png",
    "deal": false
  },
  {
    "id": "2",
    "name": "Potato",
    "price": 50,
    "discount": 4,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://t3.ftcdn.net/jpg/06/41/44/72/360_F_641447288_fdv334smXasb6Wc8m0RdeZpeQNMjkaDs.jpg",
    "deal": false
  },
  {
    "id": "3",
    "name": "Carrot",
    "price": 40,
    "discount": 4,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpurepng.com%2Fphoto%2F2684%2Fcarrots&psig=AOvVaw1mPLWA4aXZZG_DMz5e_03l&ust=1749305734073000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDame793I0DFQAAAAAdAAAAABAE",
    "deal": false
  },
  {
    "id": "4",
    "name": "Onion",
    "price": 54,
    "discount": 1,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.pngplay.com/wp-content/uploads/2/Onion-Transparent-Free-PNG-1.png",
    "deal": false
  },
  {
    "id": "5",
    "name": "Cabbage",
    "price": 51,
    "discount": 7,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://i.pinimg.com/736x/7f/68/5f/7f685f54733d5309c1c3918ffa8b824e.jpg",
    "deal": false
  },
  {
    "id": "6",
    "name": "Cauliflower",
    "price": 99,
    "discount": 8,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F29720262-cauliflower-png-transparent-background&psig=AOvVaw16vP7lMKCT5aPZ4TjKOvT2&ust=1749305839292000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjl4aL-3I0DFQAAAAAdAAAAABAT",
    "deal": false
  },
  {
    "id": "7",
    "name": "Spinach",
    "price": 99,
    "discount": 2,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Famirthamnaturals.in%2F%3Fproduct%3Dgreen-spinach-%25E0%25AE%25AA%25E0%25AE%259A%25E0%25AF%258D%25E0%25AE%259A%25E0%25AF%2588-%25E0%25AE%2595%25E0%25AF%2580%25E0%25AE%25B0%25E0%25AF%2588&psig=AOvVaw3ctLW7DAyPVSwHtuIZn4Q4&ust=1749305885636000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCv8LD-3I0DFQAAAAAdAAAAABAM",
    "deal": false
  },
  {
    "id": "8",
    "name": "Brinjal",
    "price": 70,
    "discount": 19,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpnghunter.com%2Fpng%2Feggplant-12%2F&psig=AOvVaw1rJXvv9v0IOSykHS3AKKjL&ust=1749305910951000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiO4b3-3I0DFQAAAAAdAAAAABAV",
    "deal": false
  },
  {
    "id": "9",
    "name": "Peas",
    "price": 33,
    "discount": 19,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20210912/original/pngtree-vegetable-peas-png-image_6729364.jpg",
    "deal": false
  },
  {
    "id": "10",
    "name": "Beans",
    "price": 40,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F56962&psig=AOvVaw2gR4-DIutylCH62V4o1f09&ust=1749305951887000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNj719D-3I0DFQAAAAAdAAAAABAE",
    "deal": false
  },
  {
    "id": "11",
    "name": "Radish",
    "price": 25,
    "discount": 5,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://purepng.com/public/uploads/large/purepng.com-radishvegetables-radish-fodder-radish-941524712345m1qre.png",
    "deal": false
  },
  {
    "id": "12",
    "name": "Bottle Gourd",
    "price": 30,
    "discount": 10,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/053/459/064/small/three-green-bottle-gourd-on-a-transparent-background-free-png.png",
    "deal": true
  },
  {
    "id": "13",
    "name": "Bitter Gourd",
    "price": 28,
    "discount": 8,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/010/987/484/small_2x/bitter-melon-bitter-gourd-on-white-background-with-clipping-path-png.png",
    "deal": false
  },
  {
    "id": "14",
    "name": "Drumstick",
    "price": 35,
    "discount": 7,
    "quantity": "500 g",
    "category": "vegetables",
    "image": "https://www.pngplay.com/wp-content/uploads/10/Drumstick-PNG-HD-Quality.png",
    "deal": false
  },
  {
    "id": "15",
    "name": "Yam",
    "price": 42,
    "discount": 6,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/046/011/730/small_2x/three-sweet-potatoeson-transparent-background-free-png.png",
    "deal": false
  },
  {
    "id": "16",
    "name": "Sweet Corn",
    "price": 60,
    "discount": 10,
    "quantity": "2 pcs",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-realistic-delicious-yellow-sweet-corn-png-image_10748086.png",
    "deal": true
  },
  {
    "id": "17",
    "name": "Pumpkin",
    "price": 18,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://purepng.com/public/uploads/large/purepng.com-pumpkinpumpkin-vegetables-halloween-squash-round-9415247038432osp5.png",
    "deal": false
  },
  {
    "id": "18",
    "name": "Cucumber",
    "price": 22,
    "discount": 4,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://freepngimg.com/save/2720-cucumber-png-image-picture-download/2022x1716",
    "deal": false
  },
  {
    "id": "19",
    "name": "Beetroot",
    "price": 26,
    "discount": 6,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/previews/049/954/519/non_2x/fresh-beets-with-vibrant-greens-from-the-garden-isolated-transparent-png.png",
    "deal": false
  },
  {
    "id": "20",
    "name": "Tinda",
    "price": 30,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://jaivikhaat.com/wp-content/uploads/2023/11/Untitled-design-74.png",
    "deal": false
  },
  {
    "id": "21",
    "name": "Raw Banana",
    "price": 32,
    "discount": 6,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/previews/013/793/179/non_2x/green-banana-raw-banana-transparent-background-png.png",
    "deal": true
  },
  {
    "id": "22",
    "name": "Snake Gourd",
    "price": 24,
    "discount": 7,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20240219/original/pngtree-snake-gourd-on-white-background-green-photo-png-image_14359155.png",
    "deal": false
  },
  {
    "id": "23",
    "name": "Ash Gourd",
    "price": 20,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.pngplay.com/wp-content/uploads/10/Ash-Gourd-Background-PNG-Image.png",
    "deal": false
  },
  {
    "id": "24",
    "name": "Zucchini",
    "price": 45,
    "discount": 9,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.volortofrutta.it/wp-content/uploads/2024/10/zucchine.png",
    "deal": false
  },
  {
    "id": "25",
    "name": "Celery",
    "price": 40,
    "discount": 6,
    "quantity": "500 g",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/previews/029/712/542/non_2x/celery-transparent-background-png.png",
    "deal": true
  },
  {
    "id": "26",
    "name": "Turnip",
    "price": 28,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/051/339/917/small_2x/turnip-vegetable-isolated-on-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "27",
    "name": "Parwal",
    "price": 36,
    "discount": 8,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.pngplay.com/wp-content/uploads/10/Pointed-Gourd-Free-PNG.png",
    "deal": false
  },
  {
    "id": "28",
    "name": "Lettuce",
    "price": 55,
    "discount": 12,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://gallery.yopriceville.com/downloadfullsize/send/5793",
    "deal": true
  },
  {
    "id": "29",
    "name": "Spring Onion",
    "price": 33,
    "discount": 7,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/previews/045/496/552/non_2x/spring-onions-isolated-on-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "30",
    "name": "Curry Leaves",
    "price": 15,
    "discount": 0,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://wallpapers.com/images/hd/fresh-curry-leaves-branch-xd2xwbeomn3ar70k-2.jpg",
    "deal": false
  },
  {
    "id": "31",
    "name": "Mint Leaves",
    "price": 20,
    "discount": 2,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20231017/original/pngtree-mint-leaf-peppermint-green-leaves-png-image_13325737.png",
    "deal": false
  },
  {
    "id": "32",
    "name": "Coriander",
    "price": 12,
    "discount": 1,
    "quantity": "1 bunch",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20241112/original/pngtree-top-view-of-fresh-coriander-leaves-on-white-background-png-image_16920671.png",
    "deal": false
  },
  {
    "id": "33",
    "name": "Broccoli",
    "price": 60,
    "discount": 10,
    "quantity": "1 piece",
    "category": "vegetables",
    "image": "https://gallery.yopriceville.com/downloadfullsize/send/5798",
    "deal": true
  },
  {
    "id": "34",
    "name": "Mushroom",
    "price": 70,
    "discount": 15,
    "quantity": "200 g",
    "category": "vegetables",
    "image": "https://pngimg.com/d/mushroom_PNG3212.png",
    "deal": true
  },
  {
    "id": "35",
    "name": "Capsicum",
    "price": 38,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://static.vecteezy.com/system/resources/previews/048/697/707/non_2x/green-capsicum-isolated-on-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "36",
    "name": "Red Cabbage",
    "price": 44,
    "discount": 6,
    "quantity": "1 piece",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-vector/20250102/ourmid/pngtree-vibrant-red-cabbage-png-image_14838748.png",
    "deal": false
  },
  {
    "id": "37",
    "name": "Kohlrabi",
    "price": 26,
    "discount": 4,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20240515/original/pngtree-kohlrabi-fresh-and-healthy-food-png-image_15097841.png",
    "deal": false
  },
  {
    "id": "38",
    "name": "Ivy Gourd",
    "price": 29,
    "discount": 5,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://www.pngplay.com/wp-content/uploads/10/Ivy-Gourd-PNG-HD-Quality.png",
    "deal": false
  },
  {
    "id": "39",
    "name": "Green Chilli",
    "price": 20,
    "discount": 2,
    "quantity": "250 g",
    "category": "vegetables",
    "image": "https://purepng.com/public/uploads/large/purepng.com-fresh-chilivegetableschilli-pepper-capsicum-green-chili-941524683705avjh9.png",
    "deal": false
  },
  {
    "id": "40",
    "name": "Ridge Gourd",
    "price": 30,
    "discount": 4,
    "quantity": "1 kg",
    "category": "vegetables",
    "image": "https://png.pngtree.com/png-clipart/20240210/original/pngtree-ridge-gourds-long-photo-png-image_14286381.png",
    "deal": false
  },
  {
    "id": "41",
    "name": "Apple",
    "price": 75,
    "discount": 12,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png",
    "deal": false
  },
  {
    "id": "42",
    "name": "Banana",
    "price": 97,
    "discount": 6,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
    "deal": false
  },
  {
    "id": "43",
    "name": "Orange",
    "price": 35,
    "discount": 4,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://pngimg.com/d/orange_PNG791.png",
    "deal": false
  },
  {
    "id": "44",
    "name": "Grapes",
    "price": 26,
    "discount": 1,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://png.pngtree.com/png-vector/20230329/ourmid/pngtree-grape-fruit-dark-purple-summer-photo-png-image_6671310.png",
    "deal": false
  },
  {
    "id": "45",
    "name": "Mango",
    "price": 124,
    "discount": 7,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-sweet-mango-fruit-png-png-image_11495826.png",
    "deal": false
  },
  {
    "id": "46",
    "name": "Pineapple",
    "price": 56,
    "discount": 7,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://purepng.com/public/uploads/large/purepng.com-pineapple-piecespineapplefruitfoodfreshhalvedpiecesfruitycutted-481521633174wn6aw.png",
    "deal": false
  },
  {
    "id": "47",
    "name": "Papaya",
    "price": 14,
    "discount": 16,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://pngimg.com/d/papaya_PNG25.png",
    "deal": false
  },
  {
    "id": "48",
    "name": "Strawberry",
    "price": 90,
    "discount": 12,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://www.freeiconspng.com/uploads/strawberry-png-30.png",
    "deal": false
  },
  {
    "id": "49",
    "name": "Watermelon",
    "price": 60,
    "discount": 5,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://static.vecteezy.com/system/resources/previews/029/200/216/non_2x/watermelon-transparent-background-free-png.png",
    "deal": false
  },
  {
    "id": "50",
    "name": "Guava",
    "price": 92,
    "discount": 17,
    "quantity": "1 kg",
    "category": "fruits",
    "image": "https://png.pngtree.com/png-vector/20241207/ourmid/pngtree-guava-image-png-image_14647069.png",
    "deal": false
  },
  {
    "id": "51",
    "name": "Rose",
    "price": 11,
    "discount": 8,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://static.vecteezy.com/system/resources/previews/047/428/248/non_2x/ultra-realistic-high-detail-top-view-photo-of-red-rose-free-png.png",
    "deal": false
  },
  {
    "id": "52",
    "name": "Jasmine",
    "price": 74,
    "discount": 3,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://static.vecteezy.com/system/resources/previews/046/829/080/non_2x/jasmine-top-view-isolated-on-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "53",
    "name": "Tulip",
    "price": 43,
    "discount": 13,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://pngimg.com/d/tulip_PNG8989.png",
    "deal": false
  },
  {
    "id": "54",
    "name": "Lily",
    "price": 18,
    "discount": 13,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://png.pngtree.com/png-vector/20250515/ourmid/pngtree-3d-lily-white-flower-petals-delicate-bloom-nature-elegant-png-image_16291567.png",
    "deal": false
  },
  {
    "id": "55",
    "name": "Marigold",
    "price": 98,
    "discount": 15,
    "quantity": "500gm",
    "category": "flowers",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/029/721/145/small_2x/marigold-flower-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "56",
    "name": "Sunflower",
    "price": 77,
    "discount": 19,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://cdn.pixabay.com/photo/2022/04/16/09/14/flower-7135969_1280.png",
    "deal": false
  },
  {
    "id": "57",
    "name": "Orchid",
    "price": 19,
    "discount": 19,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://purepng.com/public/uploads/large/orchid-tcr.png",
    "deal": false
  },
  {
    "id": "58",
    "name": "Daisy",
    "price": 13,
    "discount": 18,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://i.pinimg.com/originals/9e/54/41/9e544169efdf1b4c9ad257075e70d424.png",
    "deal": false
  },
  {
    "id": "59",
    "name": "Lavender",
    "price": 114,
    "discount": 4,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/044/812/136/small_2x/fragrant-lavender-flowers-on-transparent-background-png.png",
    "deal": false
  },
  {
    "id": "60",
    "name": "Carnation",
    "price": 136,
    "discount": 1,
    "quantity": "1 piece",
    "category": "flowers",
    "image": "https://wallpapers.com/images/hd/pink-carnation-flower-bloom-bsmrrl3rymkmk7mj.jpg",
    "deal": false
  }
];

export default items;