//import axios_user from '../../axios-users.js'
import db from '@/db'

const state = {
    user: null,
    users: []
}

const getters = {
    user(state) {
        return state.user
    },
    users(state) {
        return state.users
    }
}

const mutations = {
    storeUser(state, user) {
        state.user = user
    },
    storeUsers(state, users) {
        state.users = users
    }
}

const actions = {
    storeUser({ commit, state, rootState }, {id, name, email, gamertag} ) {
        db.collection('Users').add({
            id,
            name,
            email,
            gamertag
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({ commit, state, rootState }) {


        var fireUsers = []

        db.collection('Users').get()
        .then( querySnapshot => {
            querySnapshot.forEach(element => {
                fireUsers.push(element.data())
            })
            commit('storeUser', fireUsers.find( user => user.id == rootState.Auth.logedUser.uid))
            commit('storeUsers', fireUsers)

        })
        .catch(error => console.log(error))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
