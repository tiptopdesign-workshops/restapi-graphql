module.export = {
    Subscription: {
        counter: {
            subscribe: (parent, args, { pubsub }) => {
                let count = 0;

                setInterval(() => pubsub.publish("test", { counter: count++ }), 2000)

                return pubsub.asyncIterator("test");
            }
        }
    }
}