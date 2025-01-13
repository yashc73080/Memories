import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  postItem: {
    width: 'calc(50% - 10px)',  // 50% width minus half of gap
    minWidth: '280px',
    marginBottom: '20px',
  }
}));