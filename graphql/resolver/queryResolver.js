const fetch = require('node-fetch');

const NewsModel = require('../../model/news');

const NEW_API_URL = "https://www.spaceflightnewsapi.net/api/v2/articles";
const QUOTE_API_URL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

module.exports = {
    Query: {
        hello: (_, { name }) => `Hello ${name}`,
        allPost: () => posts,
        post: (_, { postId }) => posts.filter(post => post.id === postId)[0],
        getNews: async () => {
            const news = await fetch(NEW_API_URL).then(res => res.json());
            const { quote: { quoteText } } = await fetch(QUOTE_API_URL).then(res => res.json());

            return news.map(item => ({ ...item, quote: quoteText }));
        },
        news: async (_, { title }) => {
            return await NewsModel.find({ title });
        }
    }
}