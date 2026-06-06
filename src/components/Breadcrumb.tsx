import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="مسار التنقل" className="mb-6">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronLeft className="w-3 h-3 text-white/40" />}
            {item.href && i < items.length - 1 ? (
              <Link
                to={item.href}
                className="text-white/60 hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                {i === 0 && <Home className="w-3.5 h-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-gold-light font-bold flex items-center gap-1">
                {i === 0 && !item.href && <Home className="w-3.5 h-3.5" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
