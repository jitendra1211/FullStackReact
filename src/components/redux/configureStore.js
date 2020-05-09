import {createStore,combineReducers,applyMiddleware} from '../../../node_modules/redux';
import thunk from '../../../node_modules/redux-thunk';
import logger from '../../../node_modules/redux-logger';
import {Dishes} from './dishesReducer';
import {Comments} from './commentsReducer';
import {Promotions} from './promotionsReducer';
import {Leaders} from './leadersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        }),applyMiddleware(thunk,logger)
    );

    return store;
}