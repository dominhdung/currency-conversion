import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import styles from './Layout.css'

const Layout = props => (
    <MuiThemeProvider>
        <div className={styles.container}>
            <div className={styles.appTitle}>Currency Converter</div>
            {props.children}
        </div>
    </MuiThemeProvider>
);
Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default Layout;
