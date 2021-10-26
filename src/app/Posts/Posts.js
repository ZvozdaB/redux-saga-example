import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { PostPrew } from "./PostPrew";
import PostDetails from "./PostDetails";


export function Posts (){
    return (
        <Router>
            <Switch>
                <Route path={"/post/:id"} component={PostDetails} />
                <Route path="/" component={PostPrew} />
            </Switch>
        </Router>

    );
}


