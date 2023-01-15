import { Campaign } from "./Campaign";
import { Character } from "./Character";

export type Player ={
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    characters?: Character[];
    campaigns?: Campaign[];
    username:string;
    password: string;

}