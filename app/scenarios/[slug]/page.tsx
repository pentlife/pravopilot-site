import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScenarioPage } from "@/components/ScenarioPage";
import { getScenario, scenarios } from "@/lib/scenarios";

export function generateStaticParams() {
  return scenarios.map((scenario) => ({ slug: scenario.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) return {};
  return {
    title: scenario.title,
    description: scenario.description,
  };
}

export default async function ScenarioRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) notFound();
  return <ScenarioPage scenario={scenario} />;
}
