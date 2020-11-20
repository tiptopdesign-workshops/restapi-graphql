const queries = require('./queryResolver');
const mutations = require('./mutationResolver');
const subscriptions = require('./subscriptions');

const resolver = {
    ...queries,
    ...mutations,
    ...subscriptions
};

module.exports = resolver;
