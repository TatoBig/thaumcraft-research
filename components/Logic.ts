type LogicType = {
  [key: string]: {
    made?: string[],
    make?: string[]
  }
}

const Logic: LogicType = {
  aer: {
    made: undefined,
    make: [
      "lux",
      "motus",
      "tempestas",
      "vacuos",
      "volatus",
      "arbor",
      "auram",
      "sensus",
    ],
  },
  alienis: {
    made: ["tenebrae", "vacuos"],
    make: undefined,
  },
  aqua: {
    made: undefined,
    make: ["limus", "victus", "venenum", "tempestas"],
  },
  arbor: {
    made: ["aer", "herba"],
    make: undefined,
  },
  auram: {
    made: ["aer", "praencantatio"],
    make: undefined,
  },
  bestia: {
    made: ["aer", "praencantatio"],
    make: undefined,
  },
  cognitio: {
    made: ["ignis", "spiritus"],
    make: ["humanus"],
  },
  corpus: {
    made: ["bestia", "mortuus"],
    make: undefined,
  },
  exanimis: {
    made: ["motus", "mortuus"],
    make: undefined,
  },
  fabrico: {
    made: ["humanus", "instrumentum"],
    make: undefined,
  },
  fames: {
    made: ["vacuos", "victus"],
    make: ["lucrum"],
  },
  gelum: {
    made: ["ignis", "perditio"],
    make: undefined,
  },
  herba: {
    made: ["terra", "victus"],
    make: ["arbor", "messis"],
  },
  humanus: {
    made: ["bestia", "cognitio"],
    make: ["fabrico", "instrumentum", "lucrum", "messis", "perfodio"],
  },
  ignis: {
    made: undefined,
    make: ["cognitio", "gelum", "lux", "potentia", "telum"],
  },
  instrumentum: {
    made: ["humanus", "ordo"],
    make: ["fabrico", "machina", "meto", "pannus", "telum", "tutamen"],
  },
  iter: {
    made: ["motus", "terra"],
    make: undefined,
  },
  limus: {
    made: ["aqua", "victus"],
    make: undefined,
  },
  lucrum: {
    made: ["fames", "humanus"],
    make: undefined,
  },
  lux: {
    made: ["aer", "ignis"],
    make: ["tenebrae"],
  },
  machina: {
    made: ["instrumentum", "motus"],
    make: undefined,
  },
  messis: {
    made: ["herba", "humanus"],
    make: ["meto"],
  },
  metallum: {
    made: ["terra", "vitreus"],
    make: undefined,
  },
  meto: {
    made: ["instrumentum", "messis"],
    make: undefined,
  },
  mortuus: {
    made: ["perditio", "victus"],
    make: ["corpus", "exanimis", "spiritus"],
  },
  motus: {
    made: ["aer", "ordo"],
    make: ["bestia", "exanimis", "iter", "machina", "vinculum", "volatus"],
  },
  ordo: {
    made: undefined,
    make: [
      "gelum",
      "mortuus",
      "permutatio",
      "tenebrae",
      "vacuos",
      "instrumentum",
      "motus",
      "venenum",
      "vinculum",
      "vitium",
    ],
  },
  pannus: {
    made: ["bestia", "instrumentum"],
    make: undefined,
  },
  perditio: {
    made: undefined,
    make: [
      "gelum",
      "mortuus",
      "permutatio",
      "tenebrae",
      "vacuos",
      "venenum",
      "vinculum",
      "vitium",
    ],
  },
  perfodio: {
    made: ["humanus", "terra"],
    make: undefined,
  },
  permutatio: {
    made: ["ordo", "perditio"],
    make: undefined,
  },
  potentia: {
    made: ["ignis", "ordo"],
    make: ["praencantatio"],
  },
  praencantatio: {
    made: ["potentia", "vacuos"],
    make: ["auram", "vitium"],
  },
  sano: {
    made: ["ordo", "victus"],
    make: undefined,
  },
  sensus: {
    made: ["aer", "spiritus"],
    make: undefined,
  },
  spiritus: {
    made: ["mortuus", "victus"],
    make: ["cognitio", "sensus"],
  },
  telum: {
    made: ["ignis", "instrumentum"],
    make: undefined,
  },
  tempestas: {
    made: ["aer", "aqua"],
    make: undefined,
  },
  tenebrae: {
    made: ["lux", "vacuos"],
    make: ["alienis"],
  },
  terra: {
    made: undefined,
    make: [
      "herba",
      "iter",
      "metallum",
      "perfodio",
      "tutamen",
      "victus",
      "vitreus",
    ],
  },
  tutamen: {
    made: ["instrumentum", "terra"],
    make: undefined,
  },
  vacuos: {
    made: ["aer", "perditio"],
    make: ["alienis", "fames", "praencantatio", "tenebrae"],
  },
  venenum: {
    made: ["aqua", "perditio"],
    make: undefined,
  },
  victus: {
    made: ["aqua", "terra"],
    make: ["bestia", "fames", "herba", "limus", "mortuus", "sano", "spiritus"],
  },
  vinculum: {
    made: ["motus", "perditio"],
    make: undefined,
  },
  vitium: {
    made: ["perditio", "praencantatio"],
    make: undefined,
  },
  vitreus: {
    made: ["ordo", "terra"],
    make: ["metallum"],
  },
  volatus: {
    made: ["aer", "motus"],
    make: undefined,
  },
};

export default Logic;
