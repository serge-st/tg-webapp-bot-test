import { LanguageSelector } from './LanguageSelector';
import { RestartDialog } from './RestartDialog';

export function Header() {
  return (
    <header className="flex h-16 flex-grow-0 items-center justify-between border-2 border-red-400 p-2">
      <LanguageSelector className="w-[62px]" />
      <div>1</div>

      <RestartDialog />
    </header>
  );
}
