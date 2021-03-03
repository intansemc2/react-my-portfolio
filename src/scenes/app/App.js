import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            Hello World
            <hr />
            Test icon font: <span className="icofont-facebook"></span>
            <hr />
            Test Line Awesome: <span className="la la-cube la-3x mb-4"></span>
            <hr />
            Test Router:
            <div>
                <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/content">Content</Link>

                    <br />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/content">
                            <Content />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

function Content() {
    return (
        <div>
            <h1>Content</h1>
        </div>
    );
}

export default App;
