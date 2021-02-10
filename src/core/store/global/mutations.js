import localStore from 'store';
import Configs from '../configs';
const INIT_STORE = function (state) {
  if (localStore.get(Configs.LOCAL_STORAGE_KEYS.global)) {
    const savedStore = JSON.parse(
      localStore.get(Configs.LOCAL_STORAGE_KEYS.global)
    );
    if (savedStore.stateVersion === Configs.stateVersion) {
      Object.assign(state, savedStore);
    }
  }
};
const SET_ONLINE_STATUS = async function (state, status) {
  state.online = status;
};

const SET_LOCALE = function (state, { locale }) {
  state.locale = locale;
};

const SET_GAS_PRICE = function (state, val) {
  state.gasPrice = val;
};

const SET_ADDRESS_BOOK = function (state, val) {
  state.addressBook = val;
};
const SET_NETWORK = function (state, networkObj) {
  const _netObj = Object.assign({}, networkObj);
  if (_netObj.type.name !== 'CUS') {
    _netObj.type = {
      name: networkObj.type.name
    };
  }
  state.currentNetwork = _netObj;
};
const SET_GAS_PRICE_TYPE = function (state, type) {
  state.gasPriceType = type;
};

const SET_IMPORTED_STATE = function (currentState, newState) {
  Object.keys(newState).forEach(item => {
    currentState[item] = newState[item];
  });
};
export default {
  SET_ONLINE_STATUS,
  SET_LOCALE,
  SET_GAS_PRICE,
  SET_NETWORK,
  SET_ADDRESS_BOOK,
  INIT_STORE,
  SET_GAS_PRICE_TYPE,
  SET_IMPORTED_STATE
};
