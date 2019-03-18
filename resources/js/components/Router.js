import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../Routes/Home";
import Notice from "../Routes/Notice";
import NoticeCreate from "../Routes/NoticeCreate";
import Apply from "../Routes/Apply";
import Qna from "../Routes/Qna";
import Header from './Header';
import NoticeShow from '../Routes/NoticeShow';
import NoticeEdit from '../Routes/NoticeEdit';


export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/notices" exact component={Notice}></Route>
            <Route path="/notices/create" exact component={NoticeCreate}></Route>
            <Route path="/notices/:id" exact component={NoticeShow}></Route>
            <Route path="/notices/:id/edit" exact component={NoticeEdit}></Route>
            <Route path="/applies" exact component={Apply}></Route>
            <Route path="/qnas" exact component={Qna}></Route>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)
