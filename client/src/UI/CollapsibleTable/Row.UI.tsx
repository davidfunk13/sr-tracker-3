import React from 'react';
import useStyles from './CollapsibleTable.Styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Table from '@material-ui/core/Table';

export function createData(map: string, heroesPlayed: string, outcome: string, skillRating: number) {
    return {
        map,
        heroesPlayed,
        outcome,
        skillRating,
    }
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
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
                <TableCell align={'center'} component="th" scope="row">
                    {props.row.map}
                </TableCell>
                <TableCell align={'center'} className={classes.noPadding} >{props.row.heroesPlayed}</TableCell>
                <TableCell align={'center'} >{props.row.outcome}</TableCell>
                <TableCell align={'center'} className={classes.overrideOverflow}>{props.row.skillRating}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                This Game
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                {/* <TableHead>
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
                                </TableBody> */}
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Row;