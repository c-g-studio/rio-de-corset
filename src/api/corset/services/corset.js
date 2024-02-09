'use strict';

/**
 * corset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::corset.corset');
