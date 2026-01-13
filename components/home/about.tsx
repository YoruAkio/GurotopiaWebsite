'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="px-6 py-32 lg:px-8">
      <div className="mx-auto w-[90%] lg:w-[75%]">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-widest text-muted-foreground">
              [002] ABOUT
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real talk
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="space-y-6 border-l-2 border-border pl-8">
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                This isn't some revolutionary project with bleeding-edge
                features. It's just a solid, well-built private server source
                code that does what it needs to do.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                Maintained by a small community who actually cares about the
                code. We provide the source, you host it yourself. We prioritize
                flexibility and clean architecture over flashy features.
              </p>
              <p className="text-base leading-relaxed text-foreground lg:text-lg">
                If you're looking for picture-perfect or enterprise-grade, this
                probably isn't it. But if you want something honest, functional,
                and truly open-source — you're in the right place.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
