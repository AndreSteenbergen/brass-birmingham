export const merchantBonus = {
    VICTORY_POINTS : "VICTORY_POINTS",
    MONEY : "MONEY",
    DEVELOP : "DEVELOP",
    INCOME : "INCOME"
}

export const merchants = {
    nottingham : {
        name : "Nottingham",
        slots : 2,
        numberOfPlayers : 4,
        bonusCount : 3,
        bonus : MerchantBonus.VICTORY_POINTS
    },
    warrington : {
        name : "Warrington",
        slots : 2,
        numberOfPlayers : 3,
        bonusCount : 5,
        bonus : MerchantBonus.MONEY
    },
    shrewsbury : {
        name : "Shrewsbury",
        slots : 1,
        numberOfPlayers : 2,
        bonusCount : 4,
        bonus : MerchantBonus.VICTORY_POINTS
    },
    gloucester : {
        name : "Gloucester",
        slots : 2,
        numberOfPlayers : 2,
        bonusCount : 1,
        bonus : MerchantBonus.DEVELOP
    },
    oxford : {
        name : "Oxford",
        slots : 2,
        numberOfPlayers : 2,
        bonusCount : 2,
        bonus : MerchantBonus.INCOME
    }
};

//TODO: hier ben ik gebleven.
export const merchantSales = {
    2 : [  ],
    3 : [  ],
    4 : [  ]
}

