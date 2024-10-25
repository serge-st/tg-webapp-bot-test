import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  return (
    <header className="flex-grow-0 h-16 border-red-400 border-2 flex justify-between items-center p-2">
      <LanguageSelector />
      <div>1</div>
      <div>2</div>
    </header>
  );
}
