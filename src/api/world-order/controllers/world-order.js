"use strict";
const { sendEmail } = require("../../../helpers/sendEmail.js");

/**
 * world-order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::world-order.world-order", () => ({
  // some custom logic for POST request
  async create(ctx) {
    const { data } = await super.create(ctx);
    const { name, number, email, country, city, address, index, order_info } =
      data.attributes;

    const order = order_info
      .map(
        ({ name, size, price }) => `
            <p>Назва товару: ${name}</p>
            <p>Розмір: ${size}</p>
            <p>Ціна: ${price}</p>
          <hr />
          `
      )
      .join("");

    const emailTemplate = {
      from: "rio.de.corset@ukr.net",
      to: "rio.de.corset@ukr.net",
      subject: "Замовлення по світу",
      html: `<h3>Інформація про клієнта</h3>
               <p>Ім'я: ${name}</p>
               <p>Номер телефону: ${number}</p>
               <p>Пошта: ${email}</p>
               <h3>Адреса доставки</h3>
               <p>Країна: ${country}</p>
               <p>Місто: ${city}</p>
               <p>Адреса: ${address}</p>
               <p>Індекс: ${index}</p>
               <h3>Замовленні товари</h3>
               ${order}
               `,
    };

    sendEmail(emailTemplate);
    return true;
  },
}));
