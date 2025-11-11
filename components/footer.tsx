import Link from "next/link";

// @note footer with project information and links
export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-[90%] px-6 py-8 lg:w-[75%] lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-sm font-bold sm:text-base">Gurotopia</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Open-source Growtopia private server source code. Built from
              scratch, not another leaked fork.
            </p>
          </div>

          <div className="flex gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-semibold sm:text-sm">Navigate</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold sm:text-sm">Links</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="https://github.com/gurotopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-border pt-6 text-center">
          <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-muted-foreground sm:text-sm">
            Build with <span className="text-red-500">♥</span> by{' '}
            <Link
              href="https://github.com/YoruAkio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              YoruAkio
            </Link>{' '}
            for{' '}
            <Link
              href="https://discord.gg/HDtQ5GPJse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Gurotopia Community
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
