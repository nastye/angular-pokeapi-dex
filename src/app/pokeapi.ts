export class Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: string[];
  names: string[];
  pokemon_entries: PokemonEntry[];
  region: string;
  version_groups: string[];
}

export class PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

export class PokemonSpecies {
  name: string;
  url: string;
  names: [{
    language: {
      name: string;
    }
    name: string;
  }]
}

export class Pokemon {
  id: number;
  name: string;
  weight: number;
  moves: PokemonMove[];
  types: PokemonType[];
  stats: PokemonStat[];
}

export class PokemonType {
  slot: number;
  type: {
    name: string;
  }
}

export class PokemonMove {
  move: {
    name: string;
  }
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
    }
    version_group: {
      name: string;
    }
  }
}

export class PokemonMoveDetail {
  accuracy: number;
  damage_class: {
    name: string;
  }
  id: number;
  name: string;
  names: [{
    language: {
      name: string;
    }
    name: string;
  }]
  power: number;
  pp: number;
  type: {
    name: string;
  }
}

export class PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  }
}