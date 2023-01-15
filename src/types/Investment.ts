import { CharacterInvestment } from "./CharacterInvestment";

export type Investment = {
    name: string;
    investedAmount: number;
    value: number;
    isActive: boolean;
    isInvestedIn: boolean;
    isSuccess: boolean;
    return: number;
    description: string;
    investmentID: string;
    campaignID: string;
    characterInvestments: CharacterInvestment[];
}