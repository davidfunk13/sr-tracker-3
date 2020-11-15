import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './CollapsibleTable.Styles';
import clsx from 'clsx';

function createData(map: string, heroesPlayed: string, outcome: string, skillRating: number) {
    return {
        map,
        heroesPlayed,
        outcome,
        skillRating,
    }
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.map}

                </TableCell>
                <TableCell className={clsx(classes.noPadding, { [classes.textOverflow]: open })} align="left">{row.heroesPlayed}</TableCell>
                <TableCell align="left">{row.outcome}</TableCell>
                <TableCell align="left">{row.skillRating}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                This Game
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="left">Amount</TableCell>
                                        <TableCell align="left">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            FAKE DATA
                                        </TableCell>
                                        <TableCell>More fake data</TableCell>
                                        <TableCell align="left">poopfart</TableCell>
                                        <TableCell align="left">
                                            "Poop McFartFace"
                                            </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Hanamura', 'Junkrat, Hanzo, Soldier: 76', 'Win', 3475),
];

function CollapsibleTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.noPadding} />
                        <TableCell className={classes.noPadding} align={'left'} >Map</TableCell>
                        <TableCell className={classes.noPadding} align={'left'} >Heore(s)</TableCell>
                        <TableCell className={classes.noPadding} align={'left'} >W/L</TableCell>
                        <TableCell className={classes.noPadding} align={'left'} >SR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.map} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default CollapsibleTable;