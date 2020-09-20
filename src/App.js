import React from "react"
import { HashRouter, Switch, Route, Redirect, } from "react-router-dom"
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import Author from "./features/author"
import { StyledNavLink } from "./styled"




const App = () => 
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink
                            to="/zadania"
                        >
                            Zadania
                    </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to="/oAutorze"
                        >
                            o Autorze
                    </StyledNavLink>
                    </li>
                </ul>
                <Switch>
                    <Route
                        path="/zadania/:id"
                    >
                        <TaskPage />
                    </Route>
                    <Route
                        path="/zadania"
                    >
                        <TasksPage />
                    </Route>
                    <Route
                        path="/oAutorze"
                    >
                        <Author />
                    </Route>
                    <Route
                        path="/"
                    >
                        <Redirect
                            to="/zadania"
                        />
                    </Route>
                </Switch>
            </nav>
        </HashRouter>

export default App