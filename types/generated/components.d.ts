import type { Schema, Struct } from '@strapi/strapi';

export interface EventsEventCard extends Struct.ComponentSchema {
  collectionName: 'components_events_event_cards';
  info: {
    displayName: 'Event_Card';
  };
  attributes: {
    event_category: Schema.Attribute.String;
    event_date: Schema.Attribute.Date;
    event_description: Schema.Attribute.String;
    event_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    event_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventsEventsSchedule extends Struct.ComponentSchema {
  collectionName: 'components_events_events_schedules';
  info: {
    displayName: 'Events_Schedule';
  };
  attributes: {
    event_card: Schema.Attribute.Component<'events.event-card', true>;
    section_order: Schema.Attribute.Integer;
  };
}

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

export interface HeroHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_images';
  info: {
    displayName: 'HeroImage';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    notes: Schema.Attribute.String;
    overlayPosition: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeroHeroVideo extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_videos';
  info: {
    displayName: 'HeroVideo';
  };
  attributes: {
    bgvideo: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    notes: Schema.Attribute.String;
    overlayPosition: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SectionFourImages extends Struct.ComponentSchema {
  collectionName: 'components_section_four_images';
  info: {
    displayName: 'FourImages';
  };
  attributes: {
    main_text_block: Schema.Attribute.Component<'text-block.paragraph', false>;
    paragraph: Schema.Attribute.Component<'text-block.paragraph', true>;
    section_image_1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_order: Schema.Attribute.Integer;
  };
}

export interface SectionSingleImageLeftRight extends Struct.ComponentSchema {
  collectionName: 'components_section_single_image_left_rights';
  info: {
    displayName: 'SingleImageLeftRight';
  };
  attributes: {
    Position: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Left'>;
    section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_order: Schema.Attribute.Integer;
    text_block: Schema.Attribute.Component<'text-block.paragraph', true>;
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
    section_order: Schema.Attribute.Integer;
    text_block: Schema.Attribute.Component<'text-block.paragraph', true>;
  };
}

export interface SectionThreeImages extends Struct.ComponentSchema {
  collectionName: 'components_section_three_images';
  info: {
    displayName: 'ThreeImages';
  };
  attributes: {
    main_text_block: Schema.Attribute.Component<'text-block.paragraph', false>;
    paragraph: Schema.Attribute.Component<'text-block.paragraph', true>;
    section_image_1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_order: Schema.Attribute.Integer;
  };
}

export interface SectionTwoImages extends Struct.ComponentSchema {
  collectionName: 'components_section_two_images';
  info: {
    displayName: 'TwoImages';
  };
  attributes: {
    main_text_block: Schema.Attribute.Component<'text-block.paragraph', false>;
    section_image_1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_image_2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    section_order: Schema.Attribute.Integer;
    text_block_1: Schema.Attribute.Component<'text-block.paragraph', false>;
    text_block_2: Schema.Attribute.Component<'text-block.paragraph', false>;
  };
}

export interface SliderSliderImageCard extends Struct.ComponentSchema {
  collectionName: 'components_slider_slider_image_cards';
  info: {
    displayName: 'Slider_Image_Card';
  };
  attributes: {
    slider_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    slider_image_alt_text: Schema.Attribute.String;
    slider_image_link: Schema.Attribute.String;
  };
}

export interface SliderSliderStandard extends Struct.ComponentSchema {
  collectionName: 'components_slider_slider_standards';
  info: {
    displayName: 'Slider_Standard';
  };
  attributes: {
    section_order: Schema.Attribute.Integer;
    slider_image_card: Schema.Attribute.Component<
      'slider.slider-image-card',
      true
    >;
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
      'events.event-card': EventsEventCard;
      'events.events-schedule': EventsEventsSchedule;
      'header.header-logo': HeaderHeaderLogo;
      'hero.hero-image': HeroHeroImage;
      'hero.hero-video': HeroHeroVideo;
      'layout.header-standard': LayoutHeaderStandard;
      'navigation.nav-items': NavigationNavItems;
      'section.four-images': SectionFourImages;
      'section.single-image-left-right': SectionSingleImageLeftRight;
      'section.single-image-middle': SectionSingleImageMiddle;
      'section.three-images': SectionThreeImages;
      'section.two-images': SectionTwoImages;
      'slider.slider-image-card': SliderSliderImageCard;
      'slider.slider-standard': SliderSliderStandard;
      'text-block.paragraph': TextBlockParagraph;
    }
  }
}
