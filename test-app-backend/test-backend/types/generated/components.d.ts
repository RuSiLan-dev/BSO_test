import type { Schema, Struct } from '@strapi/strapi';

export interface EcommerceCart extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_carts';
  info: {
    displayName: 'Cart';
  };
  attributes: {};
}

export interface EcommerceProduct extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_products';
  info: {
    description: '';
    displayName: 'Product';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Price: Schema.Attribute.Decimal;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ecommerce.cart': EcommerceCart;
      'ecommerce.product': EcommerceProduct;
    }
  }
}