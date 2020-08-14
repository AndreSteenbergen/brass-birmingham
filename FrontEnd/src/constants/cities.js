import { industries as Industries } from './industries';

export const cities = {
    belper : {
        name : "Belper",
        base : 3,
        color : "#537c80",
        initialDeltaY : 38,
        initialDeltaX : 104,
        coordinates : {
            x : 3006,
            y : 490
        },
        industries : [
            [ Industries.COTTON, Industries.MAN_GOODS ],
            Industries.COAL,
            Industries.POTTERY
        ]
    },
    derby : {
        name : "Derby",
        color : "#537c80",
        initialDeltaY : 48,
        coordinates : {
            x : 3052,
            y : 1181
        },
        industries : [
            [ Industries.COTTON, Industries.BEER ],
            [ Industries.COTTON, Industries.MAN_GOODS ],
            Industries.IRON
        ]
    },
    leek : {
        name : "Leek",
        color : "#1e5aa0",
        initialDeltaY : 40,
        coordinates : {
            x : 2217,
            y : 436
        },
        industries : [
            [ Industries.COTTON, Industries.MAN_GOODS ],
            [ Industries.COTTON, Industries.COAL ],
        ]
    },
    stokeOnTrent : {
        name : "Stoke-on-Trent",
        color : "#1e5aa0",
        coordinates : {
            x : 1654,
            y : 723
        },
        initialDeltaY : 40,
        industries : [
            [ Industries.COTTON, Industries.MAN_GOODS ],
            [ Industries.POTTERY, Industries.IRON ],
            Industries.MAN_GOODS,
        ]
    },
    uttoxeter : {
        name : "Uttoxeter",
        color : "#1e5aa0",
        initialDeltaY : 40,
        coordinates : {
            x : 2268,
            y : 1078
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.BEER ],
            [ Industries.COTTON, Industries.BEER ],                
        ]
    },
    stone : {
        name : "Stone",
        color : "#1e5aa0",
        initialDeltaY : 40,
        initialDeltaX : 5,
        coordinates : {
            x : 1230,
            y : 1149
        },
        industries : [
            [ Industries.COTTON, Industries.BEER ],
            [ Industries.MAN_GOODS, Industries.COAL ],                
        ]
    },
    stafford : {
        name : "Stafford",
        color : "#8c4e51",
        initialDeltaY : 40,
        coordinates : {
            x : 1610,
            y : 1526
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.BEER ],
            Industries.POTTERY
        ]
    },
    burtonOnTrent : {
        name : "Burton-on-Trent",
        color : "#8c4e51",
        initialDeltaY : 38,
        initialDeltaX : 5,
        coordinates : {
            x : 2736,
            y : 1635
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.COAL ],
            Industries.BEER
        ]
    },
    cannock : {
        name : "Cannock",
        color : "#8c4e51",
        initialDeltaY : 40,
        initialDeltaX : 3,
        coordinates : {
            x : 1903,
            y : 1932
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.COAL ],
            Industries.COAL
        ]
    },
    tamworth : {
        name : "Tamworth",
        color : "#8c4e51",
        initialDeltaY : 43,
        initialDeltaX : 0,
        coordinates : {
            x : 2796,
            y : 2143
        },
        industries : [
            [ Industries.COTTON, Industries.COAL ],
            [ Industries.COTTON, Industries.COAL ],
        ]
    },
    wallsall : {
        name : "Wallsall",
        color : "#8c4e51",
        initialDeltaY : 45,
        initialDeltaX : 0,
        coordinates : {
            x : 2131,
            y : 2396
        },
        industries : [
            [ Industries.IRON, Industries.MAN_GOODS ],
            [ Industries.MAN_GOODS, Industries.BEER ],
        ]
    },
    wolverhampton : {
        name : "Wolverhampton",
        color : "#986627",
        initialDeltaY : 44,
        initialDeltaX : 4,
        coordinates : {
            x : 1482,
            y : 2304
        },
        industries : [
            Industries.MAN_GOODS,
            [ Industries.MAN_GOODS, Industries.COAL ],
        ]
    },
    coalbrookdale : {
        name : "Coalbrookdale",
        color : "#986627",
        initialDeltaY : 44,
        initialDeltaX : 4,
        coordinates : {
            x : 930,
            y : 2478
        },
        industries : [
            [ Industries.IRON, Industries.BEER ],
            Industries.IRON,
            Industries.COAL,
        ]
    },
    dudley : {
        name : "Dudley",
        color : "#986627",
        initialDeltaY : 44,
        initialDeltaX : 0,
        coordinates : {
            x : 1672,
            y : 2793
        },
        industries : [
            Industries.COAL,
            Industries.IRON,                
        ]
    },
    kidderminster : {
        name : "Kidderminster",
        color : "#986627",
        initialDeltaY : 44,
        initialDeltaX : 0,
        coordinates : {
            x : 1390,
            y : 3210
        },
        industries : [
            [ Industries.COTTON, Industries.COAL ],
            Industries.COTTON,                
        ]
    },
    worcester : {
        name : "Worcester",
        color : "#986627",
        initialDeltaY : 46,
        initialDeltaX : 2,
        coordinates : {
            x : 1444,
            y : 3728
        },
        industries : [
            Industries.COTTON,                
            Industries.COTTON,                
        ]
    },
    redditch : {
        name : "Redditch",
        color : "#564a5e",
        initialDeltaY : 40,
        initialDeltaX : -3,
        coordinates : {
            x : 2342,
            y : 3419
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.COAL ],
            Industries.IRON,                
        ]
    },
    birmingham : {
        name : "Birmingham",
        color : "#564a5e",
        initialDeltaY : 40,
        initialDeltaX : -6,
        coordinates : {
            x : 2530,
            y : 2944
        },
        industries : [
            [ Industries.COTTON, Industries.MAN_GOODS ],
            Industries.MAN_GOODS,                
            Industries.IRON,                
            Industries.MAN_GOODS,                
        ]
    },
    coventry : {
        name : "Coventry",
        color : "#564a5e",
        initialDeltaY : 40,
        initialDeltaX : 0,
        coordinates : {
            x : 3253,
            y : 3073
        },
        industries : [
            Industries.POTTERY,
            [ Industries.MAN_GOODS, Industries.COAL ],
            [ Industries.IRON, Industries.MAN_GOODS ],
        ]
    },
    nuneaton : {
        name : "Nuneaton",
        color : "#564a5e",
        initialDeltaY : 47,
        initialDeltaX : 0,
        coordinates : {
            x : 3164,
            y : 2550
        },
        industries : [
            [ Industries.MAN_GOODS, Industries.BEER ],
            [ Industries.COTTON, Industries.COAL ],
        ]
    }
};