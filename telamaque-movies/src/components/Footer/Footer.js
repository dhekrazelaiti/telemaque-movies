import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        borderTop: '1px dashed gray',
        textAlign: 'center',
        padding: 10,
        color: 'gray',
        marginTop: 50
    },
    creatorName: {
        fontWeight: 'bold'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        By <span className={classes.creatorName}>Dhekra ZELAITI</span> &lt;dhekra.zelaiti@gmail.com&gt; | 06 37 27 38 77
    </div>;
}

export default Footer;
