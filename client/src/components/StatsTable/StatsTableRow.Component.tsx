import { TableCell, TableRow } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

interface StatsTableRowProps {
    row: any
};

const StatsTableRow: FunctionComponent<StatsTableRowProps> = ({ row }) => {
    return (
        < TableRow >
            <TableCell>
                {row.heading}
            </TableCell>
            <TableCell>{row.data}</TableCell>
        </TableRow >
    );
};


export default StatsTableRow;