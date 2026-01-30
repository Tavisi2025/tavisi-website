'use client';

import React from 'react';
import {
  Box,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type { BaseTextFieldProps } from '@mui/material/TextField';
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';

export interface CustomContactNumberInputProps extends BaseTextFieldProps {
  label?: string;
  value: string;
  placeHolder?: string;
  error?: string | boolean;
  flagDisabled?: boolean;
  onChange: (phone: string) => void;
}

const inputLabelSx = {
  color: '#475569',
  fontSize: '14px',
  flexShrink: 0,
  fontWeight: 600,
  marginLeft: '5px',
} as const;

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.5rem',
    alignItems: 'center',
  },
  '& .MuiInputBase-input': {
    padding: '10px 8px',
    alignSelf: 'center',
  },
  '& .MuiInputAdornment-root': {
    alignItems: 'center',
    margin: 0,
    maxHeight: 'none',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none !important',
  },
} as const;

export function CustomContactNumberInput({
  label,
  value,
  placeHolder,
  error,
  onChange,
  required,
  variant = 'outlined',
  flagDisabled,
  ...restProps
}: CustomContactNumberInputProps) {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'us',
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <Box
      width="100%"
      sx={{
        borderBottom: variant === 'standard' ? '1px solid rgba(71, 85, 105, 0.25)' : 'none',
        pb: variant === 'standard' ? 0.5 : 0,
      }}
    >
      {label && (
        <Box mb={1}>
          <InputLabel sx={inputLabelSx} required={required}>
            {label}
          </InputLabel>
        </Box>
      )}
      <TextField
        sx={textFieldSx}
        variant={variant}
        fullWidth
        value={inputValue}
        placeholder={placeHolder}
        onChange={handlePhoneValueChange}
        type="tel"
        inputRef={inputRef}
        {...(error ? { error: true, helperText: error } : {})}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                marginRight: 1,
                marginLeft: '-6px',
              }}
            >
              <Select
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
                  width: 60,
                  fieldset: { display: 'none !important' },
                  '&.Mui-focused fieldset': { display: 'none !important' },
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none !important' },
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '28px !important',
                    paddingTop: 0,
                    paddingBottom: 0,
                    minHeight: 24,
                  },
                  '& .MuiSelect-icon': {
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  },
                }}
                value={country.iso2}
                onChange={(e) => setCountry(e.target.value as CountryIso2)}
                renderValue={(iso2) => (
                  <FlagImage iso2={iso2 as CountryIso2} size="20px" />
                )}
              >
                {defaultCountries.map((c) => {
                  const parsed = parseCountry(c);
                  return (
                    <MenuItem
                      key={parsed.iso2}
                      value={parsed.iso2}
                      disabled={flagDisabled ?? false}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                        py: 1.25,
                        minHeight: 44,
                      }}
                    >
                      <FlagImage
                        iso2={parsed.iso2}
                        size="20px"
                        style={{ marginRight: 8, flexShrink: 0 }}
                      />
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
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    </Box>
  );
}
