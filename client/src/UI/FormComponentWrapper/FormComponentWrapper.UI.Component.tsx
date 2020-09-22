import Grid from '@material-ui/core/Grid';
import React from 'react';
import useStyles from './FormComponentWrapper.UI.Styles';
import FormComponentWrapperTypes from './FormComponentWrapper.UI.Types';

const FormComponentWrapper: React.FC<FormComponentWrapperTypes> = ({ justify, spacing, alignContent, alignItems, children }) => {
    
    const classes = useStyles();

    return (
        <Grid className={classes.formContainerHeight} container justify={justify} spacing={spacing} alignContent={alignContent} alignItems={alignItems}>
            {children}
        </Grid>
    );
};

export default FormComponentWrapper;