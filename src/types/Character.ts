import { CharacterInvestment } from "./CharacterInvestment";


export type Character ={
    id:number;
    characterId: string;
    name: string;
    gold: number;
    silver: number;
    copper: number;
    playerId:number;
    investments?: CharacterInvestment[];
    campaignID: string;
}