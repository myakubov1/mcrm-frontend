// @mui
import {
  Box, Card, Grid, Link, Stack, Typography,
} from '@mui/material';
// @faker
import { faker } from '@faker-js/faker';

export default function Appointments() {
  return (
    <Card sx={{
      bgcolor: (theme) => theme.palette.grey[200],
    }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={3}>
          <div>123</div>
        </Grid>
        <Grid item xs={8} sm={8} md={9} sx={{ maxHeight: '350px', overflowX: 'auto' }}>
          <Box id="test">
            <AppNewsUpdate
              list={[...Array(10)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

function NewsItem({ news }) {
  const {
    image, title, description, postedAt,
  } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{
          width: 48, height: 48, borderRadius: 1.5, flexShrink: 0,
        }}
      />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" noWrap>
          {description}
        </Typography>
      </Box>

    </Stack>
  );
}

function AppNewsUpdate({ list }) {
  return (
    <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
      {list?.map((news) => (
        <NewsItem key={news.id} news={news} />
      ))}
    </Stack>
  );
}
