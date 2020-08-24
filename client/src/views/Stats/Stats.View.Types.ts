interface Best {
    all_damage_done: string
    barrier_damage_done: string
    defensive_assists: string
    eliminations: string
    environmental_kills: string
    final_blows: string
    healing_done: string
    hero_damage_done: string
    kill_streak: string
    melee_final_blows: string
    multikill: string
    objective_kills: string
    objective_time: string
    offensive_assists: string
    recon_assists: string
    solo_kills: string
    teleporter_pad_destroyed: string
    time_spent_on_fire: string
    turrets_destroyed: string
}

interface Info {
    ruleset: string
    hero: string
}

interface StatsOptionalProps {

}

export interface BattletagStatsInput {
    hero: string
    _battletag: string
    ruleset: string
}

export interface Response extends Best, Info { };

export default interface StatsProps extends Partial<StatsOptionalProps> {

}