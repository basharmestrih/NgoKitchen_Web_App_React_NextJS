"use client";

import HeaderSection from "./components/PageHeader/HeaderSection.js";
import LoginFormSection from "./components/LoginSection/LoginFormSection.js";
import InfoSection from "./components/LoginSection/InfoSection.js";
import CampaignSection from "./components/CtaContainers/CampaignSection.js";
import EmpowerSection from "./components/CtaContainers/EmpowerSection.js";
import ParagraphSection from "./components/CtaContainers/ParagraphSection.js";


export default function LoginForm() {
  return (
    <div className=" h-full flex flex-col bg-gray-100 space-y-24">
      <HeaderSection />
     

      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-100 px-8 gap-10">
        <LoginFormSection />
        <InfoSection />
      </div>

      <div className="w-full space-y-8 px-8 h-full flex flex-col items-start pb-10">
        <CampaignSection />

        <h2 className="font-orbitron text-4xl font-extrabold text-gray-800 mb-4">
          Empowering Events with Compassion
        </h2>
        <ParagraphSection />

        <EmpowerSection />
      </div>
    </div>
  );
}
