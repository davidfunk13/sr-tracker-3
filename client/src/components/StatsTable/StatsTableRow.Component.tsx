import { TableCell, TableRow } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

interface StatsTableRowProps {
    row: any
};

const StatsTableRow: FunctionComponent<StatsTableRowProps> = ({ row }) => {
    return (
        < TableRow >
            <TableCell component="th" scope="row">
                row
            </TableCell>
            <TableCell align="right">1234</TableCell>
        </TableRow >
    );
};


export default StatsTableRow;