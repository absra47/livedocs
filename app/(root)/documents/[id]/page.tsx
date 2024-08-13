import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/header";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2"></div>
        <p className="document-title">This is a fake docoument title </p>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
