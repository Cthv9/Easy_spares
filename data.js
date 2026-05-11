/*
  Configuratore Kit Ricambi Sea Spares - SOLO DIESEL
  Fonte: PDF SEA SPARES KIT G12-202, 11/20.
  Nota: i modelli benzina e i kit GM48014, GM77091, GM12310 sono stati esclusi.
*/

const generatorToKit = {
  "5EFKOD": "GM84053",
  "7EFKOZD": "GM84054",
  "12EFKOZD": "GM95659",
  "28EFKOZD": "GM105310",
  "6.5EFOZ": "GM12314",
  "33EFOZDJ": "GM51356",
  "45EFOZDJ": "GM89804",
  "70EFOZDJ": "GM89805",
  "100EFOZDJ": "GM95660",
  "175EFOZDJ": "GM99047",
  "6EKOD": "GM84053",
  "9EKOZD": "GM84054",
  "13.5EFKOZD": "GM95659",
  "32EKOZD": "GM105310",
  "8EOZ": "GM12314",
  "40EOZDJ": "GM51356",
  "55EOZDJ": "GM89804",
  "80EOZDJ": "GM89805",
  "125EOZDJ": "GM95660",
  "200EOZDJ": "GM99047",
  "9EFKOZD": "GM84054",
  "14EKOZD": "GM95659",
  "35EFKOZD": "GM105310",
  "40EFOZDJ": "GM51356",
  "55EFOZDJ": "GM89804",
  "80EFOZDJ": "GM89805",
  "125EFOZDJ": "GM95660",
  "11EKOZD": "GM84054",
  "16EKOZD": "GM95659",
  "40EKOZD": "GM105310",
  "50EFOZDJ": "GM51356",
  "65EFOZDJ": "GM89804",
  "99EOZDJ": "GM89805",
  "150EOZDJ": "GM95660",
  "17EFKOZD": "GM95659",
  "18EFKOZD": "GM95659",
  "20.5EFKOZD": "GM95659",
  "21EKOZD": "GM95659",
  "24EKOZD": "GM95659"
};

const parts = {
  "229125": {
    "description": "V-BELT"
  },
  "GM13660": {
    "description": "V-BELT"
  },
  "GM90645": {
    "description": "BELT"
  },
  "GM102586": {
    "description": "BELT"
  },
  "363064": {
    "description": "BELT"
  },
  "GM15402": {
    "description": "BELT"
  },
  "GM88686": {
    "description": "BELT"
  },
  "GM98801": {
    "description": "BELT"
  },
  "239282": {
    "description": "BRUSH"
  },
  "344835": {
    "description": "CONTAINER"
  },
  "250719": {
    "description": "10-AMP CIRCUIT BREAKER"
  },
  "X-6348-6": {
    "description": "DECAL"
  },
  "GM103820": {
    "description": "PRIMARY FUEL FILTER"
  },
  "GM41014": {
    "description": "PRIMARY FUEL FILTER"
  },
  "GM48727": {
    "description": "PRIMARY FUEL FILTER"
  },
  "GM48729": {
    "description": "PRIMARY FUEL FILTER"
  },
  "ED0021752880-S": {
    "description": "SECONDARY FUEL FILTER"
  },
  "ED0021753200-S": {
    "description": "SECONDARY FUEL FILTER"
  },
  "ED0021753180-S": {
    "description": "SECONDARY FUEL FILTER"
  },
  "GM48728": {
    "description": "SECONDARY FUEL FILTER"
  },
  "GM48730": {
    "description": "SECONDARY FUEL FILTER"
  },
  "GM50263": {
    "description": "FUEL FILTER KIT"
  },
  "GM91974": {
    "description": "FUEL FILTER KIT"
  },
  "ED0021752850-S": {
    "description": "OIL FILTER"
  },
  "ED0021752800-S": {
    "description": "OIL FILTER"
  },
  "ED0021750010-S": {
    "description": "OIL FILTER"
  },
  "229678": {
    "description": "OIL FILTER"
  },
  "GM32809": {
    "description": "OIL FILTER"
  },
  "GM48731": {
    "description": "OIL FILTER"
  },
  "229715": {
    "description": "FUEL FILTER ELEMENT"
  },
  "243273": {
    "description": "3-AMP FUSE"
  },
  "239298": {
    "description": "5-AMP FUSE"
  },
  "258405": {
    "description": "8-AMP FUSE"
  },
  "223316": {
    "description": "10-AMP FUSE"
  },
  "358337": {
    "description": "10-AMP FUSE"
  },
  "283645": {
    "description": "15-AMP FUSE"
  },
  "GM39266": {
    "description": "20-AMP FUSE"
  },
  "229826": {
    "description": "IMPELLER REPAIR KIT"
  },
  "GM50644": {
    "description": "IMPELLER REPAIR KIT"
  },
  "GM18793": {
    "description": "IMPELLER REPAIR KIT"
  },
  "GM98756": {
    "description": "IMPELLER REPAIR KIT"
  },
  "ED0090802840-S": {
    "description": "ZINC ANODE KIT"
  },
  "ED0090802150-S": {
    "description": "ZINC ANODE KIT"
  },
  "260085": {
    "description": "ZINC ANODE KIT"
  },
  "352142": {
    "description": "ZINC ANODE KIT"
  }
};

const kits = {
  "GM84053": {
    "items": [
      {
        "code": "229125",
        "qty": 1
      },
      {
        "code": "239282",
        "qty": 2
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "ED0021752880-S",
        "qty": 1
      },
      {
        "code": "ED0021752850-S",
        "qty": 1
      },
      {
        "code": "239298",
        "qty": 5
      },
      {
        "code": "358337",
        "qty": 5
      },
      {
        "code": "GM39266",
        "qty": 5
      },
      {
        "code": "229826",
        "qty": 1
      },
      {
        "code": "ED0090802150-S",
        "qty": 1
      }
    ]
  },
  "GM84054": {
    "items": [
      {
        "code": "229125",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM103820",
        "qty": 1
      },
      {
        "code": "ED0021752880-S",
        "qty": 1
      },
      {
        "code": "ED0021752850-S",
        "qty": 1
      },
      {
        "code": "239298",
        "qty": 5
      },
      {
        "code": "358337",
        "qty": 5
      },
      {
        "code": "GM39266",
        "qty": 5
      },
      {
        "code": "229826",
        "qty": 1
      },
      {
        "code": "ED0090802150-S",
        "qty": 1
      }
    ]
  },
  "GM95659": {
    "items": [
      {
        "code": "GM90645",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "ED0021753200-S",
        "qty": 1
      },
      {
        "code": "ED0021752800-S",
        "qty": 1
      },
      {
        "code": "229826",
        "qty": 1
      },
      {
        "code": "ED0090802840-S",
        "qty": 1
      }
    ]
  },
  "GM105310": {
    "items": [
      {
        "code": "GM102586",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM41014",
        "qty": 1
      },
      {
        "code": "ED0021753180-S",
        "qty": 1
      },
      {
        "code": "ED0021750010-S",
        "qty": 1
      },
      {
        "code": "GM50644",
        "qty": 1
      },
      {
        "code": "ED0090802840-S",
        "qty": 1
      }
    ]
  },
  "GM12314": {
    "items": [
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "GM13660",
        "qty": 1
      },
      {
        "code": "363064",
        "qty": 1
      },
      {
        "code": "250719",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "229678",
        "qty": 1
      },
      {
        "code": "229715",
        "qty": 1
      },
      {
        "code": "258405",
        "qty": 5
      },
      {
        "code": "223316",
        "qty": 5
      },
      {
        "code": "229826",
        "qty": 1
      },
      {
        "code": "260085",
        "qty": 1
      }
    ]
  },
  "GM51356": {
    "items": [
      {
        "code": "GM15402",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM48727",
        "qty": 1
      },
      {
        "code": "GM48728",
        "qty": 1
      },
      {
        "code": "GM32809",
        "qty": 1
      },
      {
        "code": "243273",
        "qty": 5
      },
      {
        "code": "223316",
        "qty": 5
      },
      {
        "code": "283645",
        "qty": 5
      },
      {
        "code": "GM50644",
        "qty": 1
      },
      {
        "code": "352142",
        "qty": 1
      }
    ]
  },
  "GM89804": {
    "items": [
      {
        "code": "GM15402",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM48729",
        "qty": 1
      },
      {
        "code": "GM48730",
        "qty": 1
      },
      {
        "code": "GM32809",
        "qty": 1
      },
      {
        "code": "GM50644",
        "qty": 1
      },
      {
        "code": "352142",
        "qty": 1
      }
    ]
  },
  "GM89805": {
    "items": [
      {
        "code": "GM88686",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM48729",
        "qty": 1
      },
      {
        "code": "GM48730",
        "qty": 1
      },
      {
        "code": "GM32809",
        "qty": 1
      },
      {
        "code": "GM18793",
        "qty": 1
      },
      {
        "code": "352142",
        "qty": 1
      }
    ]
  },
  "GM95660": {
    "items": [
      {
        "code": "GM88686",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM50263",
        "qty": 1
      },
      {
        "code": "GM32809",
        "qty": 1
      },
      {
        "code": "GM18793",
        "qty": 1
      },
      {
        "code": "352142",
        "qty": 1
      }
    ]
  },
  "GM99047": {
    "items": [
      {
        "code": "GM98801",
        "qty": 1
      },
      {
        "code": "344835",
        "qty": 1
      },
      {
        "code": "X-6348-6",
        "qty": 1
      },
      {
        "code": "GM91974",
        "qty": 1
      },
      {
        "code": "GM48731",
        "qty": 1
      },
      {
        "code": "GM98756",
        "qty": 1
      },
      {
        "code": "352142",
        "qty": 1
      }
    ]
  }
};
