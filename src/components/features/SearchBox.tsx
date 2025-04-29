import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Command, CommandInput } from '@/components/ui/command';

export function SearchBox() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <Command className="rounded-xl border shadow-md">
      {/* 검색 헤더 영역 */}
      <div className="flex items-center justify-between border-b">
        {/* 검색 버튼 */}
        <Button
          variant="link"
          size="icon"
          onClick={handleSearchClick}
          className="flex-shrink-0"
          tabIndex={-1}
        >
          <Search />
        </Button>

        {/* 검색 입력창 (클릭하면 검색 페이지로 이동) */}
        <div className="flex-grow" onClick={handleSearchClick}>
          <CommandInput
            placeholder="카페, 지역, 지하철, 대학교"
            className="pointer-events-none w-full"
            readOnly
            tabIndex={-1}
          />
        </div>

        {/* 오른쪽 여백 유지를 위한 빈 버튼 */}
        <Button
          variant="link"
          size="icon"
          className="invisible flex-shrink-0"
          tabIndex={-1}
        >
          <X className="text-g5" />
        </Button>
      </div>
    </Command>
  );
}
