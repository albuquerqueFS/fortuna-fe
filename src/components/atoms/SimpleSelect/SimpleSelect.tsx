import { Select, MenuItem } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

type SimpleSelectType = {
  options: { label: string; value: any }[];
  onChange: (e: string) => any;
};

export function SimpleSelect({ options, onChange }: SimpleSelectType) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(options[0].value);
  }, []);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Select
      defaultChecked={true}
      onChange={(e) => setValue(e.target.value as string)}
      value={value}
    >
      {options.map((option, i) => {
        return <MenuItem value={option.value}>{option.label}</MenuItem>;
      })}
    </Select>
  );
}
