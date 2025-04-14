import { Badge } from '@/components/ui/badge';

export type ChipItem = {
  id: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

interface ChipsProps {
  items: ChipItem[];
  className?: string;
}

export function Chips({ items, className }: ChipsProps) {
  return (
    <div
      className={`hide-scrollbar flex flex-row gap-1 overflow-x-auto px-1 pb-2 ${className || ''}`}
    >
      {items.map((item) => (
        <Badge
          key={item.id}
          variant="default"
          className={`flex-shrink-0 cursor-pointer whitespace-nowrap ${
            item.isActive ? 'bg-g3 text-g9' : ''
          }`}
          onClick={item.onClick}
        >
          {item.label}
        </Badge>
      ))}
    </div>
  );
}
