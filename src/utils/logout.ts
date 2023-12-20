import storage from 'redux-persist/lib/storage';

export const logout = () => {

    storage.removeItem("persist:root");
    window.location.href = "/";
};