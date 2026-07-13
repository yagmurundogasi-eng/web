import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-logo${compact ? " brand-logo--compact" : ""}`} href="/" aria-label="Yağmurun Doğası ana sayfa">
      <span className="brand-logo__mark">
        <Image src="/brand-mark.svg" alt="" width={64} height={64} priority />
      </span>
      <span className="brand-logo__text">
        <strong>Yağmurun</strong>
        <span>Doğası</span>
      </span>
    </Link>
  );
}
