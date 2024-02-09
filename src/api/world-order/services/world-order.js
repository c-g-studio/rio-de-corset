'use strict';

/**
 * world-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::world-order.world-order');
