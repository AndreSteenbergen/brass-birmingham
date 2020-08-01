import { industries as Industries } from "./industries";

export const merchantBonus = {
    VICTORY_POINTS : "VICTORY_POINTS",
    MONEY : "MONEY",
    DEVELOP : "DEVELOP",
    INCOME : "INCOME"
};

export const merchants = {
    nottingham : {
        name : "Nottingham",
        slots : 2,
        numberOfPlayers : 4,
        bonusCount : 3,
        bonus : merchantBonus.VICTORY_POINTS
    },
    warrington : {
        name : "Warrington",
        slots : 2,
        numberOfPlayers : 3,
        bonusCount : 5,
        bonus : merchantBonus.MONEY
    },
    shrewsbury : {
        name : "Shrewsbury",
        slots : 1,
        numberOfPlayers : 2,
        bonusCount : 4,
        bonus : merchantBonus.VICTORY_POINTS
    },
    gloucester : {
        name : "Gloucester",
        slots : 2,
        numberOfPlayers : 2,
        bonusCount : 1,
        bonus : merchantBonus.DEVELOP
    },
    oxford : {
        name : "Oxford",
        slots : 2,
        numberOfPlayers : 2,
        bonusCount : 2,
        bonus : merchantBonus.INCOME
    }
};

export const merchantSales = {
    2 : [ null, null, Industries.COTTON, Industries.MAN_GOODS, [Industries.MAN_GOODS, Industries.COTTON, Industries.POTTERY] ],
    3 : [ null, Industries.POTTERY ],
    4 : [ Industries.COTTON, Industries.MAN_GOODS ]
}

