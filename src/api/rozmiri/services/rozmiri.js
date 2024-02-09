'use strict';

/**
 * rozmiri service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rozmiri.rozmiri');
