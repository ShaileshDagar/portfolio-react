// import Navbar from "./Navbar";

interface article{
    title: string;
    url: string;
    published: Date;
    image_src: string;
}

function Article(article: article) {
    return (
        <div>
            <h3><a href={article.url}>{article.title}</a></h3>
            <img src={article.image_src}/>
            <h6>{article.published.toLocaleString()}</h6>
        </div>
    )
}
export default function Articles() {
    const articles: article[] = [
        {
            title: "Totems of Understanding",
            url: "https://shaileshdagar.medium.com/totems-of-understanding-8c3ec5a06ba2",
            published: new Date(),
            image_src: "totems.jpg",
        },
        {
            title: "The Metamorphic Nature of Conversations",
            url: "https://medium.com/@shaileshdagar/the-metamorphic-nature-of-conversations-4646c91a539e",
            published: new Date(),
            image_src: "inception.jpg",
        }, 
        {
            title: "Philosophy is for the lazy",
            url: "https://shaileshdagar.medium.com/philosophy-is-for-the-lazy-3c7e4905fe8a",
            published: new Date(),
            image_src: "lazy.jpg",
        }, 
        {
            title: "Verbal Jiu Jitsu of a Dialogue",
            url: "https://shaileshdagar.medium.com/verbal-jiu-jitsu-of-a-dialogue-73ea3f96f0a",
            published: new Date(),
            image_src: "dialogue.jpg",
        },
    ]
    return (
        <div>
            <h1>List of Essays:</h1>
            <ul>
                {articles.map((article, index) => <li key={index}>{Article(article)}</li>)}
            </ul>
        </div>
    )
}