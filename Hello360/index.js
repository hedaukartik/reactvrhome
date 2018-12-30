import { AppRegistry } from "react-360";
// import MobileStore from "./components/MobileStore";
// import { HeaderM } from "./components/layout/HeaderM";
import TopPosts from "./TopPosts";
import ModelView from "./ModelView";
import CurrentPost from "./CurrentPost";
import * as Store from "./Store";
Store.initialize("AIzaSyAOP8Au_JwA3PnL9NPvxPm4dCS23vVxauc");

// AppRegistry.registerComponent("MobileStore", () => MobileStore);
// AppRegistry.registerComponent("HeaderM", () => HeaderM);
AppRegistry.registerComponent("TopPosts", () => TopPosts);
AppRegistry.registerComponent("ModelView", () => ModelView);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
