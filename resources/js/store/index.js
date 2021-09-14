export default {
    state: {
        token: localStorage.getItem('access_token') || '',
        doctor:[],
        doctors: []

    },
    mutations: {
        setLoginToken(state, token) {
            return state.token = token;
        },
        setUserLogout(state) {
            return state.token = '';
        },
        setAllDoctors(state, playload) {
            return state.doctors = playload
        },
        setDoctor(state, playload) {
            return state.doctor = playload
        }
    },
    actions: {
        async userLogin({commit}, data) {
            const getUserToken = await axios.post("/api/login", data);
            localStorage.setItem('access_token', getUserToken.data.access_token)
            commit("setLoginToken", getUserToken.data.access_token);
        },
        async userRegister({commit}, data) {
            const getUserToken = await axios.post("/api/register", data);
            localStorage.setItem('access_token', getUserToken.data.access_token)
            commit("setLoginToken", getUserToken.data.access_token);
        },
        async userLogout({commit}) {
            try {
                await axios.post("/api/logout", {headers: {'Authorization': `Basic ${this.state.token}`}});
                localStorage.removeItem('access_token');
                commit("setLoginToken");
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },
        async getAllDoctors({commit}) {
            try {
                const getDoctors = await axios.get("/api/doctor");
                commit("setAllDoctors", getDoctors.data.doctors);
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },
        async getSingleDoctor({commit}, id) {
            try {
                const getDoctor = await axios.get(`/api/doctor/${id}`);
                commit("setDoctor", getDoctor.data.doctor[0]);
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },

    },
    getters: {
        isLoggedIn: state => !!state.token,
    }


}
