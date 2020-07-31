import { cities } from './cities';
import { breweryFarms } from './breweryFarms';
import { merchants } from './merchants';

export const canals = {
    belper_derby : {
        connecting : [ cities.derby, cities.belper ]
    },

    birmingham_worcester : {
        connecting : [ cities.birmingham, cities.worcester ]
    },
    birmingham_dudley : {
        connecting : [ cities.birmingham, cities.dudley ]
    },
    birmingham_oxford : {
        connecting : [ cities.birmingham, merchants.oxford ]
    },
    birmingham_coventry : {
        connecting : [ cities.birmingham, cities.coventry ]
    },
    birmingham_wallsall : {
        connecting : [ cities.birmingham, cities.wallsall ]
    },
    birmingham_tamworth : {
        connecting : [ cities.birmingham, cities.tamworth ]
    },

    burtonOnTrent_wallsall : {
        connecting : [ cities.burtonOnTrent, cities.wallsall ]
    },
    burtonOnTrent_tamworth : {
        connecting : [ cities.burtonOnTrent, cities.tamworth ]
    },
    burtonOnTrent_stone : {
        connecting : [ cities.burtonOnTrent, cities.stone ]
    },
    burtonOnTrent_derby : {
        connecting : [ cities.burtonOnTrent, cities.derby ]
    },

    cannock_wallsall : {
        connecting : [ cities.cannock, cities.wallsall ]
    },
    cannock_wolverhampton : {
        connecting : [ cities.cannock, cities.wolverhampton ]
    },
    cannock_brewery : {
        connecting : [ cities.cannock, breweryFarms.c ]
    },
    cannock_stafford : {
        connecting : [ cities.cannock, cities.stafford ]
    },

    coalbrookdale_shrewsbury : {
        connecting : [ cities.coalbrookdale, merchants.shrewsbury ]
    },
    coalbrookdale_wolverhampton : {
        connecting : [ cities.coalbrookdale, cities.wolverhampton ]
    },
    coalbrookdale_kidderminster : {
        connecting : [ cities.coalbrookdale, cities.kidderminster ]
    },

    derby_nottingham : {
        connecting : [ cities.derby, merchants.nottingham ]
    },
    
    dudley_kidderminster : {
        connecting : [ cities.dudley, cities.kidderminster ]
    },
    dudley_wolverhampton : {
        connecting : [ cities.dudley, cities.wolverhampton ]
    },

    kidderminster_worcester_brewery : {
        connecting : [ cities.kidderminster, cities.worcester, breweryFarms.kw ]
    },

    leek_stokeOnTrent : {
        connecting : [ cities.leek, cities.stokeOnTrent ]
    },

    nuneaton_tamworth : {
        connecting : [ cities.tamworth, cities.nuneaton ]
    },

    redditch_gloucester : {
        connecting : [ cities.redditch, merchants.gloucester ]
    },    
    redditch_oxford : {
        connecting : [ cities.redditch, merchants.oxford ]
    },

    stafford_stone : {
        connecting : [ cities.stafford, cities.stone ]
    },

    stokeOnTrent_stone : {
        connecting : [ cities.stone, cities.stokeOnTrent ]
    },
    stokeOnTrent_warrington : {
        connecting : [ cities.stokeOnTrent, merchants.warrington ]
    },

    wallsall_wolverhampton : {
        connecting : [ cities.wolverhampton, cities.wallsall ]
    },

    worcester_gloucester : {
        connecting : [ cities.worcester, merchants.gloucester ]
    },   
};

export const rails = {
    belper_derby : {
        connecting : [ cities.derby, cities.belper ]
    },
    belper_leek : {
        connecting : [ cities.leek, cities.belper ]
    },

    birmingham_worcester : {
        connecting : [ cities.birmingham, cities.worcester ]
    },
    birmingham_dudley : {
        connecting : [ cities.birmingham, cities.dudley ]
    },
    birmingham_oxford : {
        connecting : [ cities.birmingham, merchants.oxford ]
    },
    birmingham_coventry : {
        connecting : [ cities.birmingham, cities.coventry ]
    },
    birmingham_wallsall : {
        connecting : [ cities.birmingham, cities.wallsall ]
    },
    birmingham_tamworth : {
        connecting : [ cities.birmingham, cities.tamworth ]
    },
    birmingham_redditch : {
        connecting : [ cities.birmingham, cities.redditch ]
    },
    birmingham_nuneaton : {
        connecting : [ cities.birmingham, cities.nuneaton ]
    },

    burtonOnTrent_tamworth : {
        connecting : [ cities.burtonOnTrent, cities.tamworth ]
    },
    burtonOnTrent_stone : {
        connecting : [ cities.burtonOnTrent, cities.stone ]
    },
    burtonOnTrent_derby : {
        connecting : [ cities.burtonOnTrent, cities.derby ]
    },
    burtonOnTrent_cannock : {
        connecting : [ cities.burtonOnTrent, cities.cannock ]
    },

    cannock_wallsall : {
        connecting : [ cities.cannock, cities.wallsall ]
    },
    cannock_wolverhampton : {
        connecting : [ cities.cannock, cities.wolverhampton ]
    },
    cannock_brewery : {
        connecting : [ cities.cannock, breweryFarms.c ]
    },
    cannock_stafford : {
        connecting : [ cities.cannock, cities.stafford ]
    },

    coalbrookdale_shrewsbury : {
        connecting : [ cities.coalbrookdale, merchants.shrewsbury ]
    },
    coalbrookdale_wolverhampton : {
        connecting : [ cities.coalbrookdale, cities.wolverhampton ]
    },
    coalbrookdale_kidderminster : {
        connecting : [ cities.coalbrookdale, cities.kidderminster ]
    },

    coventry_nuneaton : {
        connecting : [ cities.coventry, cities.nuneaton ]
    },
    
    derby_nottingham : {
        connecting : [ cities.derby, merchants.nottingham ]
    },
    derby_uttoxeter : {
        connecting : [ cities.derby, cities.uttoxeter ]
    },

    dudley_kidderminster : {
        connecting : [ cities.dudley, cities.kidderminster ]
    },
    dudley_wolverhampton : {
        connecting : [ cities.dudley, cities.wolverhampton ]
    },

    kidderminster_worcester_brewery : {
        connecting : [ cities.kidderminster, cities.worcester, breweryFarms.kw ]
    },
    
    leek_stokeOnTrent : {
        connecting : [ cities.leek, cities.stokeOnTrent ]
    },

    nuneaton_tamworth : {
        connecting : [ cities.tamworth, cities.nuneaton ]
    },

    redditch_gloucester : {
        connecting : [ cities.redditch, merchants.gloucester ]
    },    
    redditch_oxford : {
        connecting : [ cities.redditch, merchants.oxford ]
    },

    stafford_stone : {
        connecting : [ cities.stafford, cities.stone ]
    },

    stokeOnTrent_stone : {
        connecting : [ cities.stone, cities.stokeOnTrent ]
    },
    stokeOnTrent_warrington : {
        connecting : [ cities.stokeOnTrent, merchants.warrington ]
    },

    stone_uttoxeter : {
        connecting : [ cities.uttoxeter, cities.stone ]
    },

    tamworth_wallsall : {
        connecting : [ cities.tamworth, cities.wallsall ]
    },

    wallsall_wolverhampton : {
        connecting : [ cities.wolverhampton, cities.wallsall ]
    },

    worcester_gloucester : {
        connecting : [ cities.worcester, merchants.gloucester ]
    },
};