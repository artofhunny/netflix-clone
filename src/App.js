import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

function App() {

  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
