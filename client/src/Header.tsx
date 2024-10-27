import { LanguageSelector } from './LanguageSelector';

export function Header() {
  return (
    <header className="flex h-16 flex-grow-0 items-center justify-between border-2 border-red-400 p-2">
      <LanguageSelector />
      <div>1</div>
      <div>2</div>
    </header>
  );
}
