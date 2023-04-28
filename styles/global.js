import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    backgroundImageContainer: {
        flex: 1,
    },
    backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
    },
});

/*

import { globalStyles } from '../styles/global';
to use this sheet.

Make any style notes about additions or color pallettes below:


*/

