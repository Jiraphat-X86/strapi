'use strict';

/**
 * device-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::device-list.device-list');
