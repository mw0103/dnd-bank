import {defineStore} from 'pinia';

export const useUserStore = defineStore('user',
{
    state: () => ({
        userId: null,
        token: null,
        loggedIn: false,
        players: [],
    })    
})