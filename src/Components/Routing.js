import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from 'react-router-dom';

export default function Routing(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Artist</Link>
                        </li>
                        <li>
                            <Link to='/Records'>Records</Link>
                        </li>
                        <li>
                            <Link to='/Label'>Label</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <Switch>
                <Route path='/Records'>
                    <Records></Records>
                </Route>

                <Route path='/Label'>
                    <Label></Label>
                </Route>

                <Route path='/'>
                    <Artist></Artist>
                </Route>
            </Switch>
        </Router>
    )
}
    function Artist(){
        return <h1>Top Artist</h1>;
    }
    function Records(){
        return <h2>Records</h2>;
    }
    function Label(){
        return <h2>Label</h2>;
    }
