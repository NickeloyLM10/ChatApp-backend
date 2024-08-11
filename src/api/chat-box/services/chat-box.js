'use strict';

/**
 * chat-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-box.chat-box');
