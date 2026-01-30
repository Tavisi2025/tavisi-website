'use client';

import { useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface ProjectCard {
  text: string;
  /** Project/card image; used as background behind the text (slightly dimmed) */
  image: string;
  imageAlt: string;
  authorName?: string;
  authorTitle?: string;
}

interface CurrentProjectsBlockProps {
  projects: ProjectCard[];
  /** When set, renders a title above the carousel */
  title?: string;
}

const CARD_WIDTH = 320;
const GAP = 24;
const SCROLL_STEP = CARD_WIDTH + GAP;

const navButtonSx = (isDark: boolean) => ({
  width: 44,
  height: 44,
  flexShrink: 0,
  bgcolor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
  color: 'text.primary',
  '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' },
});

export function CurrentProjectsBlock({ projects, title }: CurrentProjectsBlockProps) {
  const isDark = useTheme().palette.mode === 'dark';
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <Box>
      {title && (
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: 700, letterSpacing: '-0.03em', color: 'text.primary', mb: 5 }}
        >
          {title}
        </Typography>
      )}

      {/* Carousel with left/right arrows at start and end */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          width: '100%',
        }}
      >
        <IconButton
          onClick={() => scroll(-SCROLL_STEP)}
          aria-label="Previous"
          sx={{
            ...navButtonSx(isDark),
            alignSelf: 'center',
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Box
          ref={scrollRef}
          sx={{
            flex: 1,
            minWidth: 0,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              width: 'max-content',
            }}
          >
            {projects.map((p, idx) => (
              <ProjectCard key={idx} project={p} isDark={isDark} />
            ))}
          </Box>
        </Box>
        <IconButton
          onClick={() => scroll(SCROLL_STEP)}
          aria-label="Next"
          sx={{
            ...navButtonSx(isDark),
            alignSelf: 'center',
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

function ProjectCard({ project: p, isDark }: { project: ProjectCard; isDark: boolean }) {
  return (
    <Box
      component="article"
      sx={{
        flex: `0 0 ${CARD_WIDTH}px`,
        minWidth: CARD_WIDTH,
        maxWidth: { xs: '85vw', sm: CARD_WIDTH },
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        overflow: 'hidden',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: isDark ? '0 12px 32px rgba(0,0,0,0.2)' : '0 12px 32px rgba(0,0,0,0.08)',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      {/* Image as background with dim overlay; text on top */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/5',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'action.hover' }}>
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            sizes={`${CARD_WIDTH}px`}
            style={{ objectFit: 'cover' }}
          />
        </Box>
        {/* Overlay to lower image visibility so text stays readable */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            zIndex: 0,
          }}
        />
        {/* Text on top */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Typography
            component="blockquote"
            sx={{
              m: 0,
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: '#fff',
              fontStyle: 'italic',
              overflow: 'auto',
              maxHeight: '100%',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              '&::before': { content: '"\\201C"' },
              '&::after': { content: '"\\201D"' },
            }}
          >
            {p.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
