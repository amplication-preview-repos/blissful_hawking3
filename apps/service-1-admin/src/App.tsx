import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { Entity1List } from "./entity1/Entity1List";
import { Entity1Create } from "./entity1/Entity1Create";
import { Entity1Edit } from "./entity1/Entity1Edit";
import { Entity1Show } from "./entity1/Entity1Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"service1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Entity1"
          list={Entity1List}
          edit={Entity1Edit}
          create={Entity1Create}
          show={Entity1Show}
        />
      </Admin>
    </div>
  );
};

export default App;
