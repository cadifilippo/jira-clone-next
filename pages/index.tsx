import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout title="Home | Jira Clone">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px) ' }}>
            <CardHeader title="Pendientes" />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px) ' }}>
            <CardHeader title="En Progreso" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px) ' }}>
            <CardHeader title="Completada" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
