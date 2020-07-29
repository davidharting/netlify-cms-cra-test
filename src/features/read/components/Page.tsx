import React from "react";
import { IPage } from "types/generated/contentful";
import { IBookPage } from "models/BookPage";
import Prompt from "./Prompt";
import Question from "./Question";

interface PageProps {
  page: IBookPage;
}

function isPage(page: IBookPage): page is IPage {
  return page.sys.contentType.sys.id === "page";
}

function Page({ page }: PageProps) {
  if (isPage(page)) {
    return <Prompt prompt={page.fields.narrative} />;
  }
  return <Question question={page} />;
}

export default Page;
