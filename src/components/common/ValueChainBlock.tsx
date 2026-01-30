'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InventoryIcon from '@mui/icons-material/Inventory';

const CARDS = [
  {
    variant: 'primary' as const,
    icon: <GroupsIcon sx={{ fontSize: 24 }} />,
    title: 'Customers',
    description: 'Who you serve and how you win them',
  },
  {
    variant: 'glass' as const,
    icon: <HandshakeIcon sx={{ fontSize: 24 }} />,
    title: 'Partners',
    description: 'Alliances and channels that extend your reach',
  },
  {
    variant: 'glass' as const,
    icon: <InventoryIcon sx={{ fontSize: 24 }} />,
    title: 'Suppliers & Operations',
    description: 'Systems and processes that scale with you',
  },
];

export function ValueChainBlock() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', alignItems: 'stretch' }}>
      {CARDS.map((c) =>
        c.variant === 'primary' ? (
          <Box
            key={c.title}
            sx={{
              flex: '1 1 200px',
              maxWidth: 280,
              p: 3.5,
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 32px rgba(14, 116, 144, 0.4)',
              },
              '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 12,
                bgcolor: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 1.5,
              }}
            >
              {c.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {c.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95, mt: 1, lineHeight: 1.55 }}>
              {c.description}
            </Typography>
          </Box>
        ) : (
          <Box
            key={c.title}
            sx={{
              flex: '1 1 200px',
              maxWidth: 280,
              p: 3.5,
              borderRadius: 12,
              border: '1px solid',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              textAlign: 'center',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'primary.main',
                boxShadow: '0 12px 40px rgba(14, 116, 144, 0.15)',
              },
              '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 12,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 1.5,
                boxShadow: '0 4px 14px rgba(14, 116, 144, 0.35)',
              }}
            >
              {c.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {c.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.55 }}>
              {c.description}
            </Typography>
          </Box>
        )
      )}
    </Box>
  );
}
