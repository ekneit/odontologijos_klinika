export default {
    state: {
        token: localStorage.getItem('access_token') || '',
        doctor:[],
        doctors: [],
        appiontments: []

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
        },
        setAppiontments(state, playload) {
            return state.appiontments = playload
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
                await axios.post("/api/logout", {headers: {'Authorization': `Bearer ${this.state.token}`}});
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
        async createDoctor({commit},data) {
            const getMessage = await axios.post(`/api/doctor/`, data , {headers: {'Authorization': `Bearer ${this.state.token}`}});
            return getMessage;
        },
        async deleteDoctor({commit},id) {
            try {
                const getMessage = await axios.delete(`/api/doctor/${id}`, {headers: {'Authorization': `Bearer ${this.state.token}`}});
                return getMessage;
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },
        async getAppointments({commit}) {
            try {
                const getAppointments = await axios.get(`/api/appiontments`, {headers: {'Authorization': `Bearer ${this.state.token}`}});
                commit("setAppiontments", getAppointments.data.appointments);
                return getAppointments;
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },
        async deleteAppointments({commit},id) {
            try {
                const getMessage = await axios.delete(`/api/appiontments/${id}`, {headers: {'Authorization': `Bearer ${this.state.token}`}});
                return getMessage;
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },
        async approveAppointments({commit},id) {
            try {
                const getMessage = await axios.put(`/api/appiontments/${id}`, '', {headers: {'Authorization': `Bearer ${this.state.token}`}});
                console.log(getMessage);
                return getMessage;
            } catch (error) {
                console.log(error.response.data.errors);
            }
        },


    },
    getters: {
        isLoggedIn: state => !!state.token,
        getDoctorByID: (state) => (id) => {
            return state.doctors.filter(doctor => doctor === id);
        }
    }


}
