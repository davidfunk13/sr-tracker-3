import React from 'react';
import useStyles from './PageTabs.UI.Styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { LinkTabProps, TabPanelProps } from './PageTabs.UI.Types';

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

export function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

// export default function PageTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Tabs
//                     variant="fullWidth"
//                     value={value}
//                     onChange={handleChange}
//                     aria-label="nav tabs example"
//                 >
//                     <LinkTab label="Games" href="/drafts" {...a11yProps(0)} />
//                     <LinkTab label="Statistics" href="/trash" {...a11yProps(1)} />
//                 </Tabs>
//             </AppBar>
//             <TabPanel value={value} index={0}>
//                 Page One
//           </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Page Two
//           </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Page Three
//             </TabPanel>
//         </div>
//     );
// }