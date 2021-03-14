import storeConfig from "@common/redux";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { RootSiblingParent } from "react-native-root-siblings";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

export default class Root extends React.PureComponent<{}> {
    render(): React.ReactElement {
        return (
            <StoreProvider store={storeConfig.store}>
                <PersistGate loading={null} persistor={storeConfig.persistor}>
                    <RootSiblingParent>
                        <App />
                    </RootSiblingParent>
                </PersistGate>
            </StoreProvider>
        );
    }
}
