    export interface Species {
        name: string;
        url: string;
    }

    export interface Species2 {
        name: string;
        url: string;
    }

    export interface Trigger {
        name: string;
        url: string;
    }

    export interface EvolutionDetail {
        item?: any;
        trigger: Trigger;
        gender?: any;
        held_item?: any;
        known_move?: any;
        known_move_type?: any;
        location?: any;
        min_level: number;
        min_happiness?: any;
        min_beauty?: any;
        min_affection?: any;
        needs_overworld_rain: boolean;
        party_species?: any;
        party_type?: any;
        relative_physical_stats?: any;
        time_of_day: string;
        trade_species?: any;
        turn_upside_down: boolean;
    }

    export interface EvolvesTo {
        is_baby: boolean;
        species: Species2;
        evolution_details: EvolutionDetail[];
        evolves_to: any[];
    }

    export interface Chain {
        is_baby: boolean;
        species: Species;
        evolution_details?: any;
        evolves_to: EvolvesTo[];
    }

    export interface Evolution {
        id: number;
        baby_trigger_item?: any;
        chain: Chain;
    }



