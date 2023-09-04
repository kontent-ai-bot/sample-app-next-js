import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type ImagingTechnology } from '../taxonomies/imagingTechnology';
import { type Metadata } from '../content-type-snippets/metadata';
import { type ProductBase } from '../content-type-snippets/productBase';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Solution
 * Id: 6bf0eff1-fe6a-4180-8d2d-5e020f54db18
 * Codename: solution
 */
export type Solution = IContentItem<{
  /**
   * Imaging technology (taxonomy)
   * Required: true
   * Id: 4697ff5c-393e-4ff3-ae09-ebcee4d2eb2b
   * Codename: imaging_technology
   *
   * Select the type of imaging technology the solution employs.
   */
  imagingTechnology: Elements.TaxonomyElement<ImagingTechnology>;

  /**
   * Showcase (rich_text)
   * Required: false
   * Id: eca7b868-5f7e-4bab-a744-88c299ff5992
   * Codename: showcase
   *
   * Detailed description of the solution and its benefits. Use Fact items to extend the showcase with captioned cards and a call-to-action.
   */
  showcase: Elements.RichTextElement;

  /**
   * Slug (url_slug)
   * Required: false
   * Id: ade61cc3-981f-4cb0-8b8a-515f90de5721
   * Codename: slug
   *
   * ⚠ Make sure each solution has a unique slug.
   */
  slug: Elements.UrlSlugElement;
}> &
  ProductBase &
  Metadata;
