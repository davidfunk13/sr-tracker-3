import React, { FunctionComponent } from 'react';
import GameTableTypes from './GameTable.Component.Types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './GameTable.Component.Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CollapsibleTable from '../../UI/CollapsibleTable/CollapsibleTable.UI';

const GameTable: FunctionComponent<GameTableTypes> = ({ isLoading, games }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} justify={"center"} >
            {isLoading ? <CircularProgress style={{ margin: "5vh 0" }} size={100} /> :
                <CollapsibleTable />
                // <TableContainer className={clsx(classes.tablePadding, classes.tableWidth)} component={Paper}>
                //     <Table size={'small'} aria-label={'Games Table'}>
                //         <TableHead>
                //             <TableRow>
                //                 <TableCell className={classes.tablePadding} align={'left'} >Map</TableCell>
                //                 <TableCell className={classes.tablePadding} align={'left'} >Heore(s)</TableCell>
                //                 <TableCell className={classes.tablePadding} align={'left'} >W/L</TableCell>
                //                 <TableCell className={classes.tablePadding} align={'left'} >SR</TableCell>
                //             </TableRow>
                //         </TableHead>
                //         <TableBody>
                //             {!isLoading && games.map((row, i) => (
                //                 <TableRow key={row.mapPlayed + i}>
                //                     <TableCell className={classes.tablePadding} align={'left'} component="th" scope="row">
                //                         {row.mapPlayed}
                //                     </TableCell>
                //                     <TableCell className={classes.tablePadding} align={'left'}>{row.heroesPlayed.map(str => str + ', ')}</TableCell>
                //                     <TableCell className={classes.tablePadding} align={'left'}>{row.outcome}</TableCell>
                //                     <TableCell className={clsx(classes.tablePadding, { paddingRight: '0' })} align={'left'}>{row.rankOut}</TableCell>
                //                 </TableRow>
                //             ))}
                //         </TableBody>
                //     </Table>
                // </TableContainer>
            }
        </Grid>
    );
}

export default GameTable;