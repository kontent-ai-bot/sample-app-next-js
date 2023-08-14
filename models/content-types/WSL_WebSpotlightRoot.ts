import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Block_ContentChunk } from './Block_ContentChunk';
import { type Block_HeroUnit } from './Block_HeroUnit';
import { type Block_Navigation } from './Block_Navigation';
import { type Block_VisualContainer } from './Block_VisualContainer';
import { type SEOMetadata } from '../content-type-snippets/SEOMetadata';
import { type Testimonial } from './testimonial';
import { type WSL_EmojiGuideline } from '../content-type-snippets/WSL_EmojiGuideline';
import { type WSL_Page } from './WSL_Page';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * 💡 Web spotlight root
 * Id: 1cabb98a-da0d-4f1a-95b9-7d4456a9e15f
 * Codename: web_spotlight_root
 */
export type WSL_WebSpotlightRoot = IContentItem<{
  /**
   * Content (modular_content)
   * Required: false
   * Id: ebaba3e0-c6d4-4f2c-b607-6589ab4c8fbc
   * Codename: content
   */
  content: Elements.LinkedItemsElement<
    Block_HeroUnit | Block_ContentChunk | Testimonial | Block_VisualContainer
  >;

  /**
   * Navigation (modular_content)
   * Required: true
   * Id: a1a6b4d4-2f47-5071-aa53-1d283d2dee3e
   * Codename: navigation
   */
  navigation: Elements.LinkedItemsElement<Block_Navigation>;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: a0724e65-e39b-4be8-a5ae-0eddd29d346c
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<WSL_Page | WSL_WebSpotlightRoot>;

  /**
   * Title (text)
   * Required: false
   * Id: 95bfcf4e-9c71-4afd-b0f7-1a5ce7a0edf1
   * Codename: title
   */
  title: Elements.TextElement;
}> &
  WSL_EmojiGuideline &
  SEOMetadata;
