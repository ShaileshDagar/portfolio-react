import '../Styling/Home.css'

function Summary(){
    return (
        <div id="summary">
            <h2>About me</h2>
            <p>I want to make great products while developing a
                mathematical and programmatic intuition.</p>
        </div>
    )
}

function Images() {
    return (
        <div id="images" className="image-grid">
            <img src="/arduino.jpg" alt="Ardiuno Project"/>
            <img src="/gram-text-editor.jpg" alt="Gram Text Editor"/>
            <img src="/lazy.jpg" alt="philosophy-is-for-the-lazy"/>
            <img src="/spring-boot.jpg" alt="spring boot reddit clone"/>
        </div>
    )
}

function Ethos() {
    return (
        <div id="ethos">
            <h2>Ethos</h2>
            <p>Value in functionality must run supereme while aesthetics and attention to details are deeply appreciated.</p>
        </div>
    )
}

function Social() {
    return (
        <div id="social">
            <ul>
                <li><span className="link-box"><a href="https://github.com/ShaileshDagar">Github</a></span></li>
                <li><span className="link-box"><a href="https://twitter.com/ShaileshDagar">Twitter</a></span></li>
            </ul>
        </div>
    )
}

function Work() {
    return (
        <div id="work">
            <h2>How I work</h2>
            <p>I value honesty and
                productivity and would like to offer the same through my
                work and collaborations.</p>
        </div>
    )
}

function Articles() {
    return (
        <div id="articles">
            <h2>Articles</h2>
            <div className="article-list">
                <a href="https://shaileshdagar.medium.com/philosophy-is-for-the-lazy-3c7e4905fe8a">Philosophy is for the Lazy</a>
                <a href="https://medium.com/@shaileshdagar/the-metamorphic-nature-of-conversations-4646c91a539e">The Metamorphic Nature of Conversations</a>
                <a href="https://shaileshdagar.medium.com/verbal-jiu-jitsu-of-a-dialogue-73ea3f96f0a">Verbal Jiu Jitsu of a Dialogue</a>
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div id="contact">
            <h2>Reach Out</h2>
            <p>dagar.shailesh@gmail.com</p>
        </div>
    )
}

export default function Home(){
    return (<>
        <h1>hey! I'm shailesh.</h1>
        <Summary/>
        <Images/>
        <Ethos/>
        <Social/>
        <Work/>
        <Articles/>
        <Contact/>
    </>)
}