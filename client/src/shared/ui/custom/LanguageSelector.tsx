import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/shadcn/select';
import { useTranslation } from 'react-i18next';
import { supportedLngs as i18nSupportedLngs } from '@/shared/config/i18n';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleValueChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <fieldset className={className}>
      <Select defaultValue={i18n.language} onValueChange={handleValueChange}>
        <SelectTrigger id="select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {i18nSupportedLngs.map((l) => (
            <SelectItem key={l} value={l}>
              {l.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </fieldset>
  );
};
