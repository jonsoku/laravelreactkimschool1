import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../Routes/Home";
import Notice from "../Routes/Notice";
import Apply from "../Routes/Apply";
import Qna from "../Routes/Qna";
import Header from './Header';


export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/notices" exact component={Notice}></Route>
            <Route path="/applies" exact component={Apply}></Route>
            <Route path="/qnas" exact component={Qna}></Route>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)
