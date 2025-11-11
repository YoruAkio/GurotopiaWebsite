"use client";

import Link from "next/link";
import { Feather, Wrench } from "lucide-react";
import { SiCplusplus } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// @note feature data for the features section
const features = [
  {
    id: 0,
    name: "Lightweight as hell",
    icon: Feather,
    description:
      "Compiler + SSL + SQL under 1GB. Project source is a few kilobytes. No bloated dependencies or unnecessary garbage.",
  },
  {
    id: 1,
    name: "Modern C++, clean code",
    icon: SiCplusplus,
    description:
      "Written in modern C++ with some old-school touches. No gibberish, no copy-paste mess. Every line has a purpose.",
  },
  {
    id: 2,
    name: "Actually from scratch",
    icon: Wrench,
    description:
      "Not based on GTnoob, GTPS3, or any leaked server. Unique compiler that doesn't need VS2022/MSBuild. Built ground-up with flexibility in mind.",
  },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState(1);

  // @note auto change feature every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => {
        const next = (prev + 1) % features.length;
        setDirection(next === 0 ? -1 : 1);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // @note handleFeatureClick updates active feature and animation direction
  const handleFeatureClick = (index: number) => {
    setDirection(index > activeFeature ? 1 : index < activeFeature ? -1 : 0);
    setActiveFeature(index);
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gurotopia",
            alternateName: "グロートピア",
            description:
              "Open-source Growtopia private server source code. Built from scratch, not another leaked fork.",
            applicationCategory: "GameServer",
            operatingSystem: "Linux, Windows",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            author: {
              "@type": "Organization",
              name: "Gurotopia Community",
              url: "https://discord.gg/HDtQ5GPJse",
            },
            codeRepository: "https://github.com/gurotopia",
            programmingLanguage: {
              "@type": "ComputerLanguage",
              name: "C++",
            },
            featureList: [
              "Lightweight as hell - Compiler + SSL + SQL under 1GB",
              "Modern C++ with clean code architecture",
              "Built from scratch, not based on leaked servers",
              "Unique compiler that doesn't need VS2022/MSBuild",
            ],
          }),
        }}
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto w-[95%] pt-[2.5vw]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/guro/guro_hero_bg.jpg)",
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative px-6 py-32 lg:px-0 lg:py-64">
                <div className="mx-auto w-[90%] text-center lg:w-[75%] lg:text-left">
                  <div className="relative inline-block">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                      Gurotopia
                    </h1>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-md font-bold text-white/80 sm:-right-2 sm:bottom-auto sm:left-auto sm:top-0 sm:translate-x-full sm:text-2xl md:text-3xl lg:text-4xl">
                      ( グロートピア )
                    </span>
                  </div>
                  <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg lg:mx-0 lg:text-xl">
                    Open-source Growtopia private server source code. Built from
                    scratch, not another leaked fork.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-4">
                    <Link
                      href="https://github.com/gurotopia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border-2 border-white bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90 sm:px-6 sm:py-3 sm:text-base"
                    >
                      GitHub →
                    </Link>
                    <Link
                      href="#features"
                      className="rounded-lg border-2 border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6 sm:py-3 sm:text-base"
                    >
                      What's inside
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="px-6 py-24 lg:px-8">
          <div className="mx-auto w-[90%] lg:w-[75%]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                The rundown
              </h2>
              <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                No bullshit, just the facts
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-3">
                {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureClick(index)}
                      className={`w-full rounded-md border border-border p-4 text-left transition-all ${
                        activeFeature === index
                          ? "border-foreground/50 bg-muted text-foreground"
                          : "bg-background text-muted-foreground hover:border-foreground/30 hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm sm:text-base">--</span>
                        <span className="text-base font-medium sm:text-lg">
                          {feature.name}
                        </span>
                      </div>
                    </button>
                ))}
              </div>

              <div className="relative min-h-[200px] lg:min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{
                      opacity: 0,
                      y: direction === 1 ? 20 : -20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: direction === 1 ? -20 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md border border-border p-3">
                          {(() => {
                            const Icon = features[activeFeature].icon;
                            return <Icon className="h-6 w-6" />;
                          })()}
                        </div>
                        <h3 className="text-xl font-bold sm:text-2xl">
                          {features[activeFeature].name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground sm:text-base lg:text-lg">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-border px-6 py-24 lg:px-8"
        >
          <div className="mx-auto w-[90%] lg:w-[75%]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Real talk</h2>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground sm:text-base lg:text-lg">
                <p>
                  This isn't some revolutionary project with bleeding-edge
                  features. It's just a solid, well-built private server source
                  code that does what it needs to do.
                </p>
                <p>
                  Maintained by a small community who actually cares about the
                  code. We provide the source, you host it yourself. We
                  prioritize flexibility and clean architecture over flashy
                  features.
                </p>
                <p>
                  If you're looking for picture-perfect or enterprise-grade,
                  this probably isn't it. But if you want something honest,
                  functional, and truly open-source, you're in the right place.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-24 lg:px-8">
          <div className="mx-auto w-[90%] lg:w-[75%]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 lg:flex-row lg:items-stretch"
            >
              <div className="flex flex-1 flex-col justify-center space-y-6 rounded-lg border border-border bg-background p-8 lg:p-12">
                <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Ready to get started?
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base lg:text-lg">
                  Dive into the Gurotopia source code and start building your own
                  Growtopia private server. Join our Discord community to get
                  help, share ideas, and connect with other developers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://github.com/gurotopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 sm:text-base"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="https://discord.gg/HDtQ5GPJse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border-2 border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted sm:text-base"
                  >
                    Join Discord
                  </Link>
                </div>
              </div>

              <div className="hidden overflow-hidden rounded-lg border border-border lg:block">
                <iframe
                  src="https://ptb.discord.com/widget?id=1059061437655429160&theme=dark"
                  width="450"
                  height="100%"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  className="h-full min-h-[400px]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
