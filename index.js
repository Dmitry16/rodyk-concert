// Libs
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, etc.} from 'react-router';
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
// css
require ('./production/css/newstyle.css');

import App from "./App";

render ((

    <App />

), document.getElementById("zz"));
