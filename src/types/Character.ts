import { Investment } from "./Investment";
import { Player } from "./Player";

export type Character ={
    name: string;
    gold: number;
    investments: Investment[];
    player:Player;
    campaignID: string;
}