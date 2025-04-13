import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CongestionButtonProps {
  onClick?: () => void;
  className?: string;
}

export function CongestionButton({
  onClick,
  className,
}: CongestionButtonProps) {
  return (
    <Button
      variant="default"
      className={cn(
        'h-[44px] w-[170px] rounded-full bg-g1 text-m3 text-g9 hover:bg-g2',
        className,
      )}
      onClick={onClick}
    >
      혼잡도 등록
    </Button>
  );
}
