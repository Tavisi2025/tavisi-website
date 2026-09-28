'use client';

import React from 'react';
import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type { BaseTextFieldProps } from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { FieldLabel, fieldSx } from './formStyles';

export interface CustomContactNumberInputProps extends Omit<BaseTextFieldProps, 'error'> {
  label?: string;
  value: string;
  placeHolder?: string;
  error?: string | boolean;
  flagDisabled?: boolean;
  onChange: (phone: string) => void;
}

function ChevronIcon(props: { className?: string }) {
  const isDark = useTheme().palette.mode === 'dark';
  return (
    <Box
      component="img"
      src="/assets/icons/contact/chevron-down.svg"
      alt=""
      aria-hidden
      width={9.5}
      height={5.5}
      className={props.className}
      sx={{ pointerEvents: 'none', filter: isDark ? 'invert(1)' : 'none' }}
    />
  );
}

export function CustomContactNumberInput({
  label,
  value,
  placeHolder,
  error,
  onChange,
  required,
  flagDisabled,
  inputProps,
  ...restProps
}: CustomContactNumberInputProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const inputId = (inputProps?.id as string | undefined) ?? 'contact-phone';

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'us',
      value,
      countries: defaultCountries,
      // The dial code is shown in the country selector; the emitted value still includes it (E.164).
      disableDialCodeAndPrefix: true,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <Box width="100%">
      {label && (
        <FieldLabel htmlFor={inputId} required={required}>
          {label}
        </FieldLabel>
      )}
      <TextField
        sx={fieldSx(theme)}
        variant="outlined"
        fullWidth
        value={inputValue}
        placeholder={placeHolder}
        onChange={handlePhoneValueChange}
        type="tel"
        inputRef={inputRef}
        required={required}
        inputProps={{ ...inputProps, id: inputId }}
        {...(error ? { error: true, helperText: typeof error === 'string' ? error : undefined } : {})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ gap: 1.25, maxHeight: 'none' }}>
              <Select
                variant="standard"
                disableUnderline
                IconComponent={ChevronIcon}
                inputProps={{ 'aria-label': 'Country calling code' }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 300,
                      width: 360,
                      mt: 1.25,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                      borderRadius: '8px',
                      border: 'none',
                    },
                  },
                  transformOrigin: { vertical: 'top', horizontal: 'left' },
                  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                }}
                sx={{
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    py: 0,
                    pr: '18px !important',
                    minHeight: 0,
                    bgcolor: 'transparent !important',
                  },
                  '& .MuiSelect-icon': { right: 0, top: '50%', transform: 'translateY(-50%)' },
                }}
                value={country.iso2}
                onChange={(e) => setCountry(e.target.value as CountryIso2)}
                renderValue={(iso2) => (
                  <>
                    <FlagImage iso2={iso2 as CountryIso2} size="20px" />
                    <Typography component="span" sx={{ color: 'text.primary', fontSize: '0.9375rem', lineHeight: '22px' }}>
                      +{country.dialCode}
                    </Typography>
                  </>
                )}
              >
                {defaultCountries.map((c) => {
                  const parsed = parseCountry(c);
                  return (
                    <MenuItem
                      key={parsed.iso2}
                      value={parsed.iso2}
                      disabled={flagDisabled ?? false}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 1.25, minHeight: 44 }}
                    >
                      <FlagImage iso2={parsed.iso2} size="20px" style={{ marginRight: 8, flexShrink: 0 }} />
                      <Typography sx={{ flex: 1, minWidth: 0 }} noWrap>
                        {parsed.name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ flexShrink: 0 }}>
                        +{parsed.dialCode}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Select>
              <Box
                aria-hidden
                sx={{ width: '1px', height: 24, bgcolor: isDark ? 'rgba(255,255,255,0.16)' : 'rgba(10,10,10,0.12)' }}
              />
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    </Box>
  );
}
