import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedData: {}
        },
        mutations: {
            setLoadedData(state, payload){
                state.loadedData = payload;
            }
        },
        actions: {
            setStoreValue(ctx, data){
                ctx.commit('setLoadedData', data);
            }
        },
        getters: {

            getUserIsAdmin(state){
                return state.loadedData.user[0].roleID;
            },

            getUserDetails(state){
                return state.loadedData;
            },

            getUserID(state){
                return state.loadedData.user[0].userID;
            },

            getToken(state){
                return state.loadedData.token;
            },

            publicCourses(state){
                return state.loadedData.publicCourses;
            },

            publicSchedule(state){
                return state.loadedData.publicSchedule;
            },

            publicCourses(state){
                return state.loadedData.publicCourses;
            },

            userPaidCourses(state){
                return state.loadedData.userPaidCourses;
            },

            userPaidSchedule(state){
                return state.loadedData.userPaidSchedule;
            }
        }

    });
}

export default createStore;