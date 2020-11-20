module.exports = {
    Subscription: {
        counter: {
            subscribe: (parent, args, { pubsub }) => {
                let count = 0;

                setInterval(() => pubsub.publish("test", { counter: count++ }), 2000)

                return pubsub.asyncIterator("test");
            }
        },
        news: {
            subscribe: (parent, args, { pubsub }) => {
                return pubsub.asyncIterator('news');
            }
        }
    }
}