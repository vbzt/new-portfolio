import { HomeContent } from "@/components/HomeContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("home");

export default function Home() {
  return <HomeContent />;
}
