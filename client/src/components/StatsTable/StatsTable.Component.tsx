import React, { FunctionComponent, useEffect, useState } from 'react';
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


interface StatsTableRowType {
    heading: string
    data: string | number
}

const StatsTable: FunctionComponent<StatsTableTypes> = ({ loading, stats, heading }) => {
    const classes = useStyles();

    function createData(name: string, calories: number) {
        return { name, calories };
    }


    const [rows, setRows] = useState<StatsTableRowType[]>([]);

    useEffect(() => {
        const rows: { heading: string, data: string | number }[] = [];

        Object.keys(stats).map((label, i) => {
            console.log(stats)
            // const parts = label.split('_');
            // const capitalized = parts.map(word => word.charAt(0) + word.slice(1))
            // const heading = capitalized.join(' ');
            // rows.push({ heading: heading, data });
        });

        setRows(rows);
        return () => {
            setRows([]);
        }
    }, [stats]);

    // useEffect(() => console.log(rows), [rows])

    return (
        <TableContainer component={Paper}>
            <Table size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell>{heading}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StatsTableRow row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StatsTable;