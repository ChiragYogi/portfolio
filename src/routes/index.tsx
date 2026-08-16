import { createFileRoute } from "@tanstack/react-router";

import {
  Contact,
  Experience,
  Hero,
  Metrics,
  Nav,
  Skills,
  Work,
} from "@/components/portfolio/Sections";
import { profile } from "@/components/portfolio/data";

const title = "Chirag Goswami — Android Developer (Kotlin, Compose, KMP)";
const description =
  "Android developer with 4+ years building POS, payments and consumer apps in Kotlin, Jetpack Compose and Kotlin Multiplatform. 99% crash-free, 40% faster startup.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad, India" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Flutter",
  ],
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
}
