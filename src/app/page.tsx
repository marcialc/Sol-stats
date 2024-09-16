import { BackgroundBeams } from "@/components/BackgroundBeams";
import ThemeController from "@/components/ThemeController";
import ChartSection from "@/containers/ChartSection";
import CommentSection from "@/containers/CommentSection";
import TokenDetailsSection from "@/containers/TokenDetailsSection";

const TOKEN_NAME = "solana";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-2">
      <header className="flex justify-between">
        <div></div>
        <h1 className="text-3xl">SOL STATS</h1>
        <ThemeController />
      </header>
      <main className="flex-1 flex flex-wrap-reverse md:flex-nowrap justify-center items-start gap-4">
        <TokenDetailsSection tokenName={TOKEN_NAME} />
        <ChartSection tokenName={TOKEN_NAME} />
        <CommentSection />
      </main>
      <BackgroundBeams />
    </div>
  );
}
