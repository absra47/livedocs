import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <main className="auth-page">
        <SignUp />
      </main>
    </div>
  );
};

export default Home;
