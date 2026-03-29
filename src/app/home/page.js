
import HeaderSection from "./components/PageHeader/HeaderSection.js";
import LoginFormSection from "./components/LoginSection/LoginFormSection.js";
import InfoSection from "./components/LoginSection/InfoSection.js";
import CampaignSection from "./components/CtaContainers/CampaignSection.js";
import EmpowerSection from "./components/CtaContainers/EmpowerSection.js";
import ParagraphSection from "./components/CtaContainers/ParagraphSection.js";


export default function LoginForm() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 md:space-y-24 mb-4">
      <HeaderSection />

      <div className="mt-4 flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-8 gap-10">
        <LoginFormSection />
        <InfoSection />
      </div>

      <div className="w-full space-y-8 md:px-24 flex flex-col items-start">
        <CampaignSection />

        {/* Responsive text size */}
        <h2 className="font-orbitron text-2xl md:text-4xl font-extrabold text-gray-800">
          Empowering Events with Compassion
        </h2>
        <ParagraphSection />

        <EmpowerSection />
      </div>
    </div>
  );
}