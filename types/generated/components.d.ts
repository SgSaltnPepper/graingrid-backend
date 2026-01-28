import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variants';
  info: {
    displayName: 'Product Variant';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Label: Schema.Attribute.Text;
    Type: Schema.Attribute.String;
    Value: Schema.Attribute.Text;
    variantImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    Ans: Schema.Attribute.Text;
    Ques: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product-variant': ProductProductVariant;
      'product.specification': ProductSpecification;
    }
  }
}
