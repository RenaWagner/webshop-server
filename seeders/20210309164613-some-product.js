"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Acer Swift 3",
          description: "Premium laptop",
          imgUrl:
            "https://image.shutterstock.com/image-photo/uzhgorod-ukraine-february-22-2020-600w-1658881378.jpg",
          price: "1500",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jelly Comb 1080P HD Webcam",
          description: "HD webcam for your WFH",
          imgUrl:
            "https://image.shutterstock.com/image-vector/security-technology-concept-webcam-vector-600w-729548854.jpg",
          price: "32.99",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Logitech R400 Presenter",
          description: "Logitech clicker for presentation",
          imgUrl:
            "https://image.shutterstock.com/image-photo/gray-modern-presentation-remote-clicker-600w-1541696234.jpg",
          price: "17.95",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jabra Elite",
          description: "Noise cancelling earphone for your WFH",
          imgUrl:
            "https://image.shutterstock.com/image-photo/bangkok-thailand-jabra-launch-new-600w-1649024437.jpg",
          price: "150.95",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acer KG241",
          description: "Full-HD monitor. Size 36cm (ultra wide)",
          imgUrl:
            "https://image.shutterstock.com/image-photo/shenzhen-china-14-november-2020-600w-1853888635.jpg",
          price: "320.83",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung S21 Ultra 5G",
          description: "The newest Samsung smartphone.",
          imgUrl:
            "https://image.shutterstock.com/image-photo/new-york-united-state-america-600w-1153357897.jpg",
          price: "1129",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo Yoga Slim",
          description: "Stylish and slim notebook",
          imgUrl:
            "https://image.shutterstock.com/image-photo/jakarta-indonesia-january-11-2019-600w-1281152425.jpg",
          price: "1098",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo IdeaPad Gaming 3i Laptop",
          description: "Laptop for gaming",
          imgUrl:
            "https://image.shutterstock.com/image-photo/belgrade-serbia-may-05-2018-600w-1130929592.jpg",
          price: "1149.00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
