import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PageHero, Section, CTAButton, CTABand } from '@/components/common';
import DescriptionIcon from '@mui/icons-material/Description';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import UpdateIcon from '@mui/icons-material/Update';

export const metadata = {
  title: 'News & Resources | Tavisi Partners',
  description: 'Templates, webinars, reports, and checklists to support your GTM strategy, sales operations, and leadership.',
};

const RESOURCES = [
  {
    title: 'Templates',
    description:
      'Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.',
    icon: <DescriptionIcon />,
  },
  {
    title: 'Webinars',
    description:
      'Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.',
    icon: <OndemandVideoIcon />,
  },
  {
    title: 'Reports',
    description:
      'Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.',
    icon: <AssessmentIcon />,
  },
  {
    title: 'Checklists',
    description:
      'Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.',
    icon: <PlaylistAddCheckIcon />,
  },
];

const TIPS = [
  {
    title: 'Explore Regularly',
    description: 'New templates, webinars, and reports are added often. Check back to stay ahead.',
    icon: <ExploreIcon />,
  },
  {
    title: 'Bookmark Favorites',
    description: 'Save the resources that matter most to your role and revisit them when you need them.',
    icon: <BookmarkIcon />,
  },
  {
    title: 'Share with Your Team',
    description: 'Pass along insights and tools to help your broader team execute with clarity.',
    icon: <ShareIcon />,
  },
  {
    title: 'Stay Updated',
    description: 'Subscribe or follow to get notified when new resources and events are available.',
    icon: <UpdateIcon />,
  },
];

function ResourceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 32px rgba(14, 116, 144, 0.1)',
          borderColor: 'primary.main',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            '& .MuiSvgIcon-root': { fontSize: 28 },
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function TipCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(14, 116, 144, 0.08)',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          '& .MuiSvgIcon-root': { fontSize: 24 },
        }}
      >
        {icon}
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  );
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        headline="News & Resources"
        subheading="Templates, webinars, reports, and checklists to support your GTM strategy, sales operations, and leadership. Explore our resource center below."
        showCta
        ctaLabel="Explore Resources"
        maxWidth="md"
      />

      {/* What You'll Find – 2x2 resource cards */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, px: 2 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, letterSpacing: '-0.03em', mb: 6 }}
          >
            <Box component="span" sx={{ color: 'text.primary' }}>Insightful Strategies to Drive Growth </Box>
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {RESOURCES.map((r) => (
              <ResourceCard key={r.title} title={r.title} description={r.description} icon={r.icon} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* How to Make the Most – 2x2 tip cards */}
      <Section alternate>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, letterSpacing: '-0.03em' }}>
            <Box component="span" sx={{ color: 'text.primary' }}>How to Make the Most of </Box>
            <Box component="span" sx={{ color: 'primary.main' }}>Our Resources</Box>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {TIPS.map((t) => (
            <TipCard key={t.title} title={t.title} description={t.description} icon={t.icon} />
          ))}
        </Box>
      </Section>

      <CTABand
        title="Need a resource or want to contribute?"
        subtitle="Have a template, webinar, or report to share? Get in touch—we're always expanding our resource center."
      />
    </>
  );
}
