import { List, Paper } from '@mui/material';
import { EntriCard } from './';

export const EntriList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntriCard />
          <EntriCard />
          <EntriCard />
          <EntriCard />
          <EntriCard />
          <EntriCard />
        </List>
      </Paper>
    </div>
  );
};
