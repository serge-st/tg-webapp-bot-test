import { FC } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supportedLngs as i18nSupportedLngs } from "./config/i18n";

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();

  const handleValueChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <fieldset>
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
