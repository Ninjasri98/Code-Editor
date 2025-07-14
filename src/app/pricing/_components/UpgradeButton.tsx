import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {
  const CHECKOUT_URL =
    "https://lemonlogic.lemonsqueezy.com/buy/e2f1ab11-47cf-429f-8ab5-097a3e914b5d"

  return (
    <Link
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}