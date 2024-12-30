// countries.config.ts
export interface EducationConfig {
    primary: number;
    secondary: number;
    higher: number;
  }
  
  export interface TaxesConfig {
    poor: number;
    middle: number;
    rich: number;
  }
  
  export interface CountryConfig {
    name: string;
    education: EducationConfig;
    taxes: TaxesConfig;
  }
  
  export const countriesConfig: CountryConfig[] = [
    {
      name: 'Brazil',
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
    {
      name: 'Russia',
      education: {
        primary: 2,
        secondary: 3,
        higher: 4,
      },
      taxes: {
        poor: 2,
        middle: 3,
        rich: 4,
      },
    },
    // Adicione mais configurações de países conforme necessário
  ];
  