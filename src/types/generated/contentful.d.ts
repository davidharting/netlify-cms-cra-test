// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBookFields {
  /** Title */
  title: string;

  /** Pages */
  pages?: (IPage | IQuestion)[] | undefined;
}

/** This is an adaptive eBook which contains pages and questions of varying difficulty. */

export interface IBook extends Entry<IBookFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "book";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IChoiceFields {
  /** Correct Stimulus */
  correctStimulus: Asset;

  /** Distractor Stimulus */
  distractorStimulus: Asset;

  /** Difficulty */
  difficulty?: "easy" | "medium" | "hard" | undefined;
}

/** A choice presents two stimuli as the possible answers to a question. Only one is correct. */

export interface IChoice extends Entry<IChoiceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "choice";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IOptionFields {
  /** Is this correct? */
  isThisCorrect: boolean;

  /** Content */
  content?: string | undefined;
}

/** An option for a response to a question. */

export interface IOption extends Entry<IOptionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "option";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Prompt */
  prompt: string;

  /** Picture */
  picture?: Asset | undefined;
}

/** A page of an eBook containing content, but no question.  */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuestionFields {
  /** Quantity Prompt */
  quantityPrompt: string;

  /** Size Prompt */
  sizePrompt: string;

  /** Left */
  left: IStimulus;

  /** Right */
  right: IStimulus;

  /** Quantity: Which is correct? */
  quantityWhichIsCorrect: boolean;

  /** Size: Which is correct */
  correctStimulus: boolean;
}

/** A question presents a prompt about two stimuli, one of which is correct. */

export interface IQuestion extends Entry<IQuestionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "question";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStimulusFields {
  /** Title */
  title?: string | undefined;

  /** Image */
  image: Asset;
}

/** Each question in a book has a stimulus (some image) of a specific difficulty. It is a part of the question itself. The child will inspect the stimulus and attempt to answer a question about it.  */

export interface IStimulus extends Entry<IStimulusFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "stimulus";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "book"
  | "choice"
  | "option"
  | "page"
  | "question"
  | "stimulus";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
