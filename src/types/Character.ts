import { Investment } from "./Investment";


export type Character ={
    id:number;
    name: string;
    gold: number;
    investments: Investment[];
    playerId:number;
    campaignID: string;
}