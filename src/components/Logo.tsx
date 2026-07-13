import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-logo${compact ? " brand-logo--compact" : ""}`} href="/" aria-label="Yağmurun Doğası ana sayfa">
      <span className="brand-logo__mark">
        <Image src="/brand-mark.svg" alt="" width={66} height={66} priority />
      </span>
      <span className="brand-logo__text">
        <strong>YAĞMURUN</strong>
        <span>DOĞASI</span>
      </span>
    </Link>
  );
}
