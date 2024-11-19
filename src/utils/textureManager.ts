type TextureVariant = {
  name: string;
  path: string;
  description: string;
  usage: string;
};

type TextureSet = {
  default: string;
  variants: TextureVariant[];
};

export const textures: Record<string, TextureSet> = {
  parchment: {
    default: '/images/textures/parchment.png',
    variants: [
      {
        name: 'default',
        path: '/images/textures/parchment.png',
        description: 'Um pedaço de pergaminho envelhecido com bordas irregulares e textura amarelada',
        usage: 'Fundo para textos narrativos e tutoriais'
      },
      {
        name: 'dark',
        path: '/images/textures/parchment-dark.png',
        description: 'Versão escura do pergaminho para temas noturnos',
        usage: 'Modo escuro e ambientes sombrios'
      },
      {
        name: 'light',
        path: '/images/textures/parchment-light.png',
        description: 'Versão clara do pergaminho para alta legibilidade',
        usage: 'Áreas que precisam de mais clareza'
      }
    ]
  },
  dragonScale: {
    default: '/images/textures/dragon-scale.png',
    variants: [
      {
        name: 'default',
        path: '/images/textures/dragon-scale.png',
        description: 'Textura de escamas de dragão com detalhes metálicos e iridescentes',
        usage: 'Elementos premium e conquistas épicas'
      },
      {
        name: 'dark',
        path: '/images/textures/dragon-scale-dark.png',
        description: 'Escamas de dragão em tons escuros',
        usage: 'Elementos premium no modo noturno'
      },
      {
        name: 'light',
        path: '/images/textures/dragon-scale-light.png',
        description: 'Escamas de dragão em tons claros',
        usage: 'Elementos premium em fundos claros'
      }
    ]
  },
  mystical: {
    default: '/images/textures/crystal-cave.png',
    variants: [
      {
        name: 'crystal',
        path: '/images/textures/crystal-cave.png',
        description: 'Caverna brilhante com cristais em tons de azul e violeta',
        usage: 'Áreas premium e descobertas especiais'
      },
      {
        name: 'portal',
        path: '/images/textures/mystic-portal.png',
        description: 'Portal mágico com energia em tons de púrpura e azul',
        usage: 'Transições e mudanças de estado'
      },
      {
        name: 'wisp',
        path: '/images/textures/ethereal-wisp.png',
        description: 'Orbe brilhante com fumaça luminosa',
        usage: 'Indicadores e guias visuais'
      }
    ]
  },
  elements: {
    default: '/images/textures/fiery-orb.png',
    variants: [
      {
        name: 'fire',
        path: '/images/textures/fiery-orb.png',
        description: 'Esfera flamejante brilhante e dinâmica',
        usage: 'Indicadores de urgência ou poder'
      },
      {
        name: 'ice',
        path: '/images/textures/frost-spike.png',
        description: 'Espinho de gelo cristalino com reflexos',
        usage: 'Estados de proteção ou pausa'
      },
      {
        name: 'lava',
        path: '/images/textures/lava-flow.png',
        description: 'Rio de lava em tons quentes e brilhantes',
        usage: 'Áreas de perigo ou avisos'
      }
    ]
  },
  environment: {
    default: '/images/textures/forest-glade.png',
    variants: [
      {
        name: 'forest',
        path: '/images/textures/forest-glade.png',
        description: 'Claro da floresta com luz suave',
        usage: 'Áreas de descanso ou conclusão'
      },
      {
        name: 'ruins',
        path: '/images/textures/ancient-ruins.png',
        description: 'Ruínas antigas com atmosfera misteriosa',
        usage: 'Áreas de exploração ou história'
      },
      {
        name: 'clouds',
        path: '/images/textures/dark-clouds.png',
        description: 'Céu com nuvens escuras e misteriosas',
        usage: 'Estados de tensão ou suspense'
      }
    ]
  },
  items: {
    default: '/images/textures/golden-coins.png',
    variants: [
      {
        name: 'coins',
        path: '/images/textures/golden-coins.png',
        description: 'Moedas douradas empilhadas e brilhantes',
        usage: 'Recompensas e conquistas'
      },
      {
        name: 'dagger',
        path: '/images/textures/shadow-dagger.png',
        description: 'Adaga escura com brilho misterioso',
        usage: 'Ações estratégicas ou combate'
      }
    ]
  }
};

export const getTexture = (textureName: keyof typeof textures, variant?: string): TextureVariant => {
  const textureSet = textures[textureName];
  if (!textureSet) {
    console.warn(`Textura '${textureName}' não encontrada, usando padrão`);
    return textures.parchment.variants[0];
  }

  if (!variant) {
    return textureSet.variants[0];
  }

  const selectedVariant = textureSet.variants.find(v => v.name === variant);
  if (!selectedVariant) {
    console.warn(`Variação '${variant}' não encontrada para '${textureName}', usando padrão`);
    return textureSet.variants[0];
  }

  return selectedVariant;
};

export const getTexturesByCategory = (category: keyof typeof textures) => {
  return textures[category]?.variants || [];
};

export const getAllTextures = () => {
  return Object.entries(textures).map(([category, textureSet]) => ({
    category,
    variants: textureSet.variants
  }));
};