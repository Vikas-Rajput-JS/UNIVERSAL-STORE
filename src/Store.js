import { createStore } from "redux";
import rootred from "./Redux/Reducers/Main";

const Store = createStore(
    rootred
);
export default Store;