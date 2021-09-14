export default {
    state: {
        token: localStorage.getItem('access_token') || ''

    },
    mutations: {
        setLoginToken(state,token) {
            return state.token = token;
        },
        setUserLogout(state) {
            return state.token = '';
        }
    },
    actions: {
        async userLogin({ commit },data) {
                const getUserToken = await axios.post("/api/login",data);
                localStorage.setItem('access_token', getUserToken.data.access_token)
                commit("setLoginToken", getUserToken.data.access_token);
        },
        async userRegister({ commit },data) {
            const getUserToken = await axios.post("/api/register",data);
            localStorage.setItem('access_token', getUserToken.data.access_token)
            commit("setLoginToken", getUserToken.data.access_token);
        },
        async userLogout({ commit }) {
            try {
                await axios.post("/api/logout", {headers: {'Authorization' : `Basic ${this.state.token}`}});
                localStorage.removeItem('access_token');
                commit("setLoginToken");
            }catch (error) {
               console.log(error.response.data.errors);
            }
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
    }


}
