import axios_auth from '../../axios-auth.js'
import * as firebase from 'firebase'
import { stat } from 'fs';

const state = {
    idToken: null,
    userId: null,
    logedUser: null
}

const getters = {
    isAuthenticated (state) {
        return state.logedUser !== null && state.logedUser !== undefined
    }
}

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
    },
    clearAuthData(state) {
        state.idToken = null
        state.userId = null
        state.logedUser = null
    },
    setLogedUser(state, logedUser) {
        state.logedUser = logedUser
    }
}

const actions = {
    signup({commit, dispatch}, authData) {

        firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
        .then( payload => {
            const newUser = {
                id: payload.user.uid,
                email: authData.email,
                name: authData.name,
                gamertag: authData.gamertag
            }
            commit('setLogedUser', {...newUser, ...payload.user})
            dispatch('storeUser', newUser)
            authData.clear()
        })
        .catch(error => console.log(error))

    },
    login({ commit }, authData) {
        firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
        .then( payload => {
            const logedUser = {
                id: payload.user.uid,
                email: authData.email
            }
            commit('setLogedUser', {...logedUser, ...payload.user})

            authData.clear()
        })
        .catch(error => console.log(error))
    },
    logout({commit}) {
        commit('clearAuthData')
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
