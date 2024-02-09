'use strict';

/**
 * world-order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::world-order.world-order');
