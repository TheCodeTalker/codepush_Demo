import styles from './application/styles/styles';
import ToDoListContainer from './application/components/ToDoListContainer';
import React from 'react';
import {
  NavigatorIOS
} from 'react-native';

import codePush from 'react-native-code-push';
class ToDoApp extends React.Component {

    componentDidMount()
    {
        codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });
    }
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: ToDoListContainer, title: 'irshad'}}/>
        );
    }
}

export default ToDoApp;
