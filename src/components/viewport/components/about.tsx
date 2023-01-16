export default function About() {
    return (
        <div className="about">
            <div className="about__text">
                <span className="about__text--welcome">
                    Welcome to my project database!
                </span>
                <h1 className="about__text--heading">About this project...</h1>
                <p className="about__text--text">
                    This is where I store data for every project I complete.
                    This data is fetched from my external server created using
                    MongoDB and Express. The favorites section is what populates
                    my portfolio’s featured projects. With a simple change of a
                    boolean value, I can add or remove projects from my
                    portfolio, or come back to see how much I’ve improved.{" "}
                </p>
                <span className="about__text--instruct">
                    Select a category from the menu to see what I’ve done!
                </span>
                <span className="about__text--link">
                    or feel free to check out my portfolio at &nbsp;
                    <a href="https://charlesmiller.dev/">
                        https://charlesmiller.dev/
                    </a>
                </span>
            </div>
        </div>
    );
}
