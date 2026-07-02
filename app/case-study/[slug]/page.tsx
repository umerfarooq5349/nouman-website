import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyContent } from "./case-study-content";

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];

  if (!study) {
    notFound();
  }

  return <CaseStudyContent study={study} />;
}
