const statTypeDefs = `
type Info {
    ruleset: String!,
    hero: String!
}

type Best {
    all_damage_done: String,
    barrier_damage_done: String,
    defensive_assists: String,
    eliminations: String,
    environmental_kills: String,
    final_blows: String,
    healing_done: String,
    hero_damage_done: String,
    kill_streak: String,
    melee_final_blows: String,
    multikill: String,
    objective_kills: String,
    objective_time: String,
    offensive_assists: String,
    recon_assists: String,
    solo_kills: String,
    teleporter_pad_destroyed: String,
    time_spent_on_fire: String,
    turrets_destroyed: String
}

type Assists {
    defensive_assists: String,
    healing_done: String,
    offensive_assists: String,
    recon_assists: String
}

type Match_Awards {
    cards: String,
    medals: String
}

type Combat {
    all_damage_done: String,
    barrier_damage_done: String,
    damage_done: String,
    deaths: String,
    eliminations: String,
    environmental_kills: String,
    final_blows: String,
    hero_damage_done: String,
    melee_final_blows: String,
    multikills: String,
    objective_kills: String,
    objective_time: String,
    solo_kills: String,
    time_spent_on_fire: String
}

type GameStats {
    games_lost: String,
    games_played: String,
    games_tied: String,
    games_won: String,
    time_played: String
},

type Miscellaneous {
    teleporter_pads_destroyed: String,
    turrets_destroyed: String
},

type Average {
    all_damage_done: String,
    barrier_damage_done: String,
    deaths: String,
    eliminations: String,
    final_blows: String,
    healing_done: String,
    hero_damage_done: String,
    objective_kills: String,
    objective_time: String,
    solo_kills: String,
    time_spent_on_fire:String
}

type Stats {
    info : Info
    best : Best
    assists : Assists
    match_awards : Match_Awards
    combat: Combat
    game : GameStats
    miscellaneous : Miscellaneous 
    average : Average
}`;

module.exports = statTypeDefs;