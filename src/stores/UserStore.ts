import { Campaign } from '@/types/Campaign';
import { Character } from '@/types/Character';
import { Investment } from '@/types/Investment';
import { Player } from '@/types/Player';
import {defineStore} from 'pinia';

export const useUserStore = defineStore('user',
{
    state: () => ({
        userId: null as Number,
        token: null as String,
        loggedIn: false as boolean,
        players: [] as Player[],
        selectedCampaign: null as Campaign,
        selectedCharacter: null as Character,
        isLoading: false as boolean,
        error: null as boolean,
        campaigns: [] as Campaign[],
        characters: [] as Character[],
        investments: [] as Investment[],
        selectedInvestment: null as Investment,
        player: null as Player,
    })    
})