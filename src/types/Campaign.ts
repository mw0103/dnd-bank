import { Character } from "./Character";
import { Player } from "./Player";

export type Campaign = 
{
    id: number;
    title: string;
    description: string;
    dmId: number;
    characters?: Character[];
    players: Player[];
}