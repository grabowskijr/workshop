import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MUIDataTableSearch: {
      searchText: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    MUIDataTableHeadCell: {
      sortAction: {
        alignItems: 'center',
      },
    },
  },
  palette: {
    primary: {
      main: '#7159c1',
      dark: '#4f4a61', // hover
      contrastText: '#fff',
    },
  },
});

export default theme;
