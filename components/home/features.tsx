'use client';

import { Feather, Wrench } from 'lucide-react';
import { SiCplusplus } from 'react-icons/si';
import { motion } from 'framer-motion';

// @note feature data for the features section
const features = [
  {
    id: 0,
    name: 'Lightweight as hell',
    icon: Feather,
    description:
      'Compiler + SSL + SQL under 1GB. Project source is a few kilobytes. No bloated dependencies or unnecessary garbage.',
  },
  {
    id: 1,
    name: 'Modern C++, clean code',
    icon: SiCplusplus,
    description:
      'Written in modern C++ with some old-school touches. No gibberish, no copy-paste mess. Every line has a purpose.',
  },
  {
    id: 2,
    name: 'Actually from scratch',
    icon: Wrench,
    description:
      "Not based on GTnoob, GTPS3, or any leaked server. Unique compiler that doesn't need VS2022/MSBuild. Built ground-up with flexibility in mind.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-32 lg:px-8">
      <div className="mx-auto w-[90%] lg:w-[75%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="mb-4 inline-block font-mono text-xs tracking-widest text-muted-foreground">
            [001] FEATURES
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            No bullshit, just the facts
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/30">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-foreground/20">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
