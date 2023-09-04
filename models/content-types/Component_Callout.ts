import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Component_ComponentGuidelines } from '../content-type-snippets/Component_ComponentGuidelines';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * 🧩 Callout
 * Id: 72c5b04f-e316-5912-baf2-8ccd2f0ad7a2
 * Codename: callout
 */
export type Component_Callout = IContentItem<{
  /**
   * Content (rich_text)
   * Required: true
   * Id: 15a9fc79-e85f-5bb1-8e81-d0362cd93b93
   * Codename: content
   */
  content: Elements.RichTextElement;

  /**
   * Type (multiple_choice)
   * Required: true
   * Id: 44dd9032-c950-53b8-91bd-c6c586233311
   * Codename: type
   *
   * Selecting a type affects the visual style of the callout to make its purpose instantly clear to the reader.
   */
  type: Elements.MultipleChoiceElement;
}> &
  Component_ComponentGuidelines;
