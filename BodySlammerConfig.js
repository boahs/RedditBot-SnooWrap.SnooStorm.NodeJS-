require('dotenv').config();
const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');

const client = new Snoowrap({
    userAgent: 'BodySlammer69',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

const comments = new CommentStream(client, { 
    subreddit: 'todayilearned', 
    limit: 10, 
    pollTime: 10000 
});

comments.on('item', (item) => {
    if (item.body === '69') {
    item.reply('BODY SLAMMER 69 \n\n disable^me^^by^^^saying^^^^!badbot');
    item.save();
    console.log(item);
}
});

client.getSubreddit('all').getNew().then(posts => {
    const titles = posts.map(post => post.title);
    const names = posts.map(post => post.name);
    console.log(titles, names);
  });




