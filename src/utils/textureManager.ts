type TextureVariant = {
  name: string;
  path: string;
};

type TextureSet = {
  default: string;
  variants: TextureVariant[];
};

export const textures: Record<string, TextureSet> = {
  parchment: {
    default: '/images/parchment.png',
    variants: [
      { name: 'default', path: '/images/parchment.png' },
      { name: 'dark', path: '/images/parchment-dark.png' },
      { name: 'light', path: '/images/parchment-light.png' },
    ]
  },
  dragonScale: {
    default: '/images/dragon-scale.png',
    variants: [
      { name: 'default', path: '/images/dragon-scale.png' },
      { name: 'dark', path: '/images/dragon-scale-dark.png' },
      { name: 'light', path: '/images/dragon-scale-light.png' },
    ]
  }
};

export const getTexture = (textureName: keyof typeof textures, variant?: string): string => {
  const textureSet = textures[textureName];
  if (!textureSet) {
    console.warn(`Texture ${textureName} not found, using default`);
    return textures.parchment.default;
  }

  if (!variant) {
    return textureSet.default;
  }

  const selectedVariant = textureSet.variants.find(v => v.name === variant);
  if (!selectedVariant) {
    console.warn(`Variant ${variant} not found for texture ${textureName}, using default`);
    return textureSet.default;
  }

  return selectedVariant.path;
};