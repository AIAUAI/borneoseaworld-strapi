import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderHeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_header_logos';
  info: {
    displayName: 'header_logo';
  };
  attributes: {
    header_alt_text: Schema.Attribute.String;
    header_link: Schema.Attribute.String;
    header_logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface LayoutHeaderStandard extends Struct.ComponentSchema {
  collectionName: 'components_layout_header_standards';
  info: {
    displayName: 'header_standard';
  };
  attributes: {
    header_logo: Schema.Attribute.Component<'header.header-logo', true>;
    nav_items: Schema.Attribute.Component<'navigation.nav-items', true>;
  };
}

export interface NavigationNavItems extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'nav_items';
  };
  attributes: {
    nav_item_is_external: Schema.Attribute.Boolean;
    nav_item_name: Schema.Attribute.String;
    nav_item_order: Schema.Attribute.Integer;
    nav_item_url: Schema.Attribute.String;
  };
}

export interface SectionSingleImageMiddle extends Struct.ComponentSchema {
  collectionName: 'components_section_single_image_middles';
  info: {
    displayName: 'SingleImageMiddle';
  };
  attributes: {
    section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    text_block: Schema.Attribute.Component<'text-block.paragraph', true>;
  };
}

export interface SliderSliderStandard extends Struct.ComponentSchema {
  collectionName: 'components_slider_slider_standards';
  info: {
    displayName: 'Slider_Standard';
  };
  attributes: {
    slider_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface TextBlockParagraph extends Struct.ComponentSchema {
  collectionName: 'components_text_block_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    lucide_icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.header-logo': HeaderHeaderLogo;
      'layout.header-standard': LayoutHeaderStandard;
      'navigation.nav-items': NavigationNavItems;
      'section.single-image-middle': SectionSingleImageMiddle;
      'slider.slider-standard': SliderSliderStandard;
      'text-block.paragraph': TextBlockParagraph;
    }
  }
}
