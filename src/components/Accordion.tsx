import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | number;
}

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpenId ?? null);

  const toggle = (id: string | number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-cobalt/40 shadow-sm'
                : 'bg-white/80 border-surface-border hover:border-gray-300'
            }`}
          >
            <button
              type="button"
              id={triggerId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-semibold text-navy text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-inset"
            >
              <span className="pr-4">{item.question}</span>
              <span
                className={`p-1.5 rounded-full bg-ivory text-navy transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-softblue text-cobalt' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="px-5 sm:px-6 pb-6 text-body-muted text-sm sm:text-base leading-relaxed border-t border-surface-border/50 pt-4"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
