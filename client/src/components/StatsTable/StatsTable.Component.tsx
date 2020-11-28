import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './StatsTable.Component.Styles';
import StatsTableTypes from './StatsTable.Component.Types';
import CircularProgress from '@material-ui/core/CircularProgress';
import StatsTableRow from './StatsTableRow.Component';
import { TabletRounded } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import parseUnderscores from '../../utils/parseUnderscores';

interface StatsTableRowType {
    heading: string
    data: string | number
}

const StatsTable: FunctionComponent<StatsTableTypes> = ({ loading, stats, heading }) => {
    const classes = useStyles();

    const [rows, setRows] = useState<StatsTableRowType[]>([]);

    useEffect(() => {
        const tableRows: { heading: string, data: string | number }[] = [];

        for (var row in stats) {
            const heading = parseUnderscores(row);
            const data = stats[row] || '0';
            tableRows.push({ heading: heading, data });
        }

        setRows(tableRows);

        return () => {
            setRows([]);
        }
    }, [stats]);
    return (
        <Fragment>
            <Typography className={classes.heading} variant={'h6'}>
                {parseUnderscores(heading)}
            </Typography>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableBody>
                        {rows.map((row, i) => (
                            <StatsTableRow key={'data' + i} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default StatsTable;