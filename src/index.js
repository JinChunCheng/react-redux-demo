import 'styles/App.css';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import configStore from './stores/configStore.js';
const store = configStore();

//connect from containers
import IndexAppConnect from './containers/AppConnect';
import GetDataConnect from './containers/GetDataConnect';
import TodoListConnect from './containers/InsertTodoConnect';

import DevTools from './stores/DevTools';

import Main, {ChangeState, RefsAttr} from './components/dashbord/Main';

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={IndexAppConnect}>
                    <IndexRoute component={Main} />
                    <Route path="Main" component={Main}>
                        <Route path="RefsAttr" component={RefsAttr} />
                    </Route>
                    <Route path="ChangeState" component={ChangeState} />
                    <Route path="GetData" component={GetDataConnect} />
                    <Route path="TodoList" component={TodoListConnect} />
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('app')
);
