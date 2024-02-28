"use strict";
const { sendEmail } = require("../../../helpers/sendEmail");

/**
 * ukraine-order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ukraine-order.ukraine-order",
  () => ({
    // some custom logic for POST request
    async create(ctx) {
      const { data } = await super.create(ctx);
      const {
        name,
        number,
        email,
        city,
        delivery_method,
        department_number,
        order_info,
        total_price,
      } = data.attributes;

      const orders = order_info
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
        subject: "Замовлення по Україні",
        html: `<h3>Інформація про клієнта</h3>
               <p>Ім'я: ${name}</p>
               <p>Номер телефону: ${number}</p>
               <p>Пошта: ${email}</p>
               <h3>Адреса доставки</h3>
               <p>Місто: ${city}</p>
               <p>Спосіб доставки: ${delivery_method}</p>
               <p>Номер відділення: ${department_number}</p>
               <h3>Замовленні   товари</h3>
               ${orders}
               <h4>Загальна вартість замовлення: ${total_price}</h4>
               `,
      };

      sendEmail(emailTemplate);
      return true;
    },
  })
);
