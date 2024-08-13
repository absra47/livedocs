import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/header";
import React from "react";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2"></div>
        <p className="document-title">This is a fake docoument title </p>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
