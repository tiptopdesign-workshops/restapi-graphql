const NewsModel = require("../../model/news");

module.exports = {
    Mutation: {
         addPost: (_, { title, body }) => {
            const newPost = {
                id: 3,
                title,
                body,
                userId: 0,
            };

            posts.push(newPost);

            return newPost;
        },
        addNews:  async (_, { title, summary }, { pubsub }) => {
            // security logic
    
            const newNews = new NewsModel({ title, summary });
            const savedData = await newNews.save();

            // check if record has been save in db

            pubsub.publish('news', { news: savedData });


            return {
                id: savedData.id,
                title: savedData.title,
                summary: savedData.summary || ''
            };
        }
    }
}