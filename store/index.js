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