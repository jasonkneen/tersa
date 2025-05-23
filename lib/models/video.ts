import { LumaIcon, MinimaxIcon, RunwayIcon } from '../icons';

const million = 1000000;

export const videoModels: {
  label: string;
  models: {
    icon: typeof MinimaxIcon;
    id: string;
    label: string;
    model: string;
    getCost: () => number;
    default?: boolean;
  }[];
}[] = [
  {
    label: 'Minimax',
    models: [
      {
        icon: MinimaxIcon,
        id: 'minimax-t2v-01-director',
        label: 'T2V-01-Director',
        model: 'T2V-01-Director',

        // https://www.minimax.io/price
        getCost: () => 0.43,
      },
      {
        icon: MinimaxIcon,
        id: 'minimax-i2v-01-director',
        label: 'I2V-01-Director',
        model: 'I2V-01-Director',

        // https://www.minimax.io/price
        getCost: () => 0.43,
      },
      {
        icon: MinimaxIcon,
        id: 'minimax-s2v-01',
        label: 'S2V-01',
        model: 'S2V-01',

        // https://www.minimax.io/price
        getCost: () => 0.65,
      },
      {
        icon: MinimaxIcon,
        id: 'minimax-i2v-01',
        label: 'I2V-01',
        model: 'I2V-01',

        // https://www.minimax.io/price
        getCost: () => 0.43,
      },
      {
        icon: MinimaxIcon,
        id: 'minimax-i2v-01-live',
        label: 'I2V-01-live',
        model: 'I2V-01-live',

        // https://www.minimax.io/price
        getCost: () => 0.43,
      },
      {
        icon: MinimaxIcon,
        id: 'minimax-t2v-01',
        label: 'T2V-01',
        model: 'T2V-01',

        // https://www.minimax.io/price
        getCost: () => 0.43,
      },
    ],
  },
  {
    label: 'Runway',
    models: [
      {
        icon: RunwayIcon,
        id: 'runway-gen4-turbo',
        label: 'Gen4 Turbo',
        model: 'gen4_turbo',
        default: true,
        // https://docs.dev.runwayml.com/#price
        getCost: () => 0.5,
      },
      {
        icon: RunwayIcon,
        id: 'runway-gen3a-turbo',
        label: 'Gen3a Turbo',
        model: 'gen3a_turbo',

        // https://docs.dev.runwayml.com/#price
        getCost: () => 0.5,
      },
    ],
  },
  {
    label: 'Luma',
    models: [
      {
        icon: LumaIcon,
        id: 'luma-ray-1.6',
        label: 'Ray 1.6',
        model: 'ray-1-6',

        // https://lumalabs.ai/api/pricing
        // Luma pricing isn't well documented, "API Cost" refers to per frame.
        getCost: () => {
          const unitCost = 0.0032;
          const frames = 24;
          const width = 1920;
          const height = 1080;
          const seconds = 5;

          const pixels = width * height;
          const frameCost = (pixels / million) * unitCost;

          return frameCost * frames * seconds;
        },
      },
      {
        icon: LumaIcon,
        id: 'luma-ray-2',
        label: 'Ray 2',
        model: 'ray-2',

        // https://lumalabs.ai/api/pricing
        // Luma pricing isn't well documented, "API Cost" refers to per frame.
        getCost: () => {
          const unitCost = 0.0064;
          const frames = 24;
          const width = 1920;
          const height = 1080;
          const seconds = 5;

          const pixels = width * height;
          const frameCost = (pixels / million) * unitCost;

          return frameCost * frames * seconds;
        },
      },
      {
        icon: LumaIcon,
        id: 'luma-ray-flash-2',
        label: 'Ray Flash 2',
        model: 'ray-flash-2',

        // https://lumalabs.ai/api/pricing
        // Luma pricing isn't well documented, "API Cost" refers to per frame.
        getCost: () => {
          const unitCost = 0.0022;
          const frames = 24;
          const width = 1920;
          const height = 1080;
          const seconds = 5;

          const pixels = width * height;
          const frameCost = (pixels / million) * unitCost;

          return frameCost * frames * seconds;
        },
      },
    ],
  },
];
