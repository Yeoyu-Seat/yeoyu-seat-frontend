import { useEffect, useRef, useState } from 'react';
import { Calendar, ChevronLeft, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export function SearchBox() {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleValueChange = (value: string) => {
    setQuery(value);
    if (value) {
      setIsActive(true);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  const resetSearch = () => {
    setIsActive(false);
    setQuery('');
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleBack = () => {
    resetSearch();
  };

  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive && inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target as Node)
      ) {
        resetSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Command className="rounded-xl border shadow-md" ref={commandRef}>
      {/* 검색 헤더 영역 */}
      <div className="flex items-center justify-between border-b">
        {/* 검색/뒤로가기 버튼 */}
        <Button
          variant="link"
          size="icon"
          onClick={isActive ? handleBack : toggleActive}
          className="flex-shrink-0"
          tabIndex={-1}
        >
          {isActive ? <ChevronLeft /> : <Search />}
        </Button>

        {/* 검색 입력창 */}
        <div className="flex-grow">
          <CommandInput
            ref={inputRef}
            placeholder="카페, 지역, 지하철, 대학교"
            value={query}
            onValueChange={handleValueChange}
            onFocus={handleFocus}
            className="w-full"
            tabIndex={-1}
          />
        </div>

        {/* 검색어 지우기 버튼 */}
        <Button
          variant="link"
          size="icon"
          onClick={handleClear}
          className="flex-shrink-0"
          tabIndex={-1}
        >
          {query && <X className="text-g5" />}
        </Button>
      </div>

      {/* 검색 결과 영역 - 활성화 상태일 때만 표시 */}
      {isActive && (
        <CommandList>
          <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>김서연</span>
            </CommandItem>
            <CommandItem>
              <ChevronLeft />
              <span>문준일</span>
            </CommandItem>
            <CommandItem disabled>
              <X />
              <span>권오현</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}
