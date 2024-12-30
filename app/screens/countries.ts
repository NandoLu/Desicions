export interface Leader {
  name: string;
  image: any;
}

export interface Country {
  name: string;
  details: {
    year: number;
    pib: number; // Alterado para number
    economicBalance: number; // Adicionado saldo de economia
    population: string;
    ideology: string;
    education: {
      primary: number;
      secondary: number;
      higher: number;
    };
    taxes: {
      poor: number;
      middle: number;
      rich: number;
    };
  };
  images: {
    flag: any;
  };
  leaders: Leader[];
}

export const countries: Country[] = [
  {
    name: 'Brazil',
    details: {
      year: 2024,
      pib: 20500, // Alterado para number
      economicBalance: 134, // Adicionado saldo de economia
      population: '212 milhões',
      ideology: 'Democracia',
      education: {
        primary: 3,
        secondary: 4,
        higher: 5,
      },
      taxes: {
        poor: 1,
        middle: 2,
        rich: 3,
      },
    },
    images: {
      flag: require('../../assets/img/brasil.png'),
    },
    leaders: [
      {
        name: 'Líder A',
        image: require('../../assets/img/vargas.png'),
      },
      {
        name: 'Líder B',
        image: require('../../assets/img/img.png'),
      },
    ],
  },
  {
    name: 'Russia',
    details: {
      year: 1944,
      pib: 14800, // Alterado para number
      economicBalance: 124, // Adicionado saldo de economia
      population: '144 milhões',
      ideology: 'Federalismo',
      education: {
        primary: 2,
        secondary: 3,
        higher: 4,
      },
      taxes: {
        poor: 2,
        middle: 3,
        rich: 3,
      },
    },
    images: {
      flag: require('../../assets/img/urss.png'),
    },
    leaders: [
      {
        name: 'Vladimir Lenin',
        image: require('../../assets/img/img.png'),
      },
      {
        name: 'Joseph Stalin',
        image: require('../../assets/img/stalin.png'),
      },
    ],
  },
  {
    name: 'Cuba',
    details: {
      year: 1944,
      pib: 14800, // Alterado para number
      economicBalance: 124, // Adicionado saldo de economia
      population: '144 milhões',
      ideology: 'Socialismo',
      education: {
        primary: 2,
        secondary: 3,
        higher: 4,
      },
      taxes: {
        poor: 2,
        middle: 3,
        rich: 3,
      },
    },
    images: {
      flag: require('../../assets/img/cuba.png'),
    },
    leaders: [
      {
        name: 'Fidel Castro',
        image: require('../../assets/img/fidel.png'),
      },
      {
        name: 'Líder',
        image: require('../../assets/img/img.png'),
      },
    ],
  },
  
  // Adicione mais países conforme necessário
];
