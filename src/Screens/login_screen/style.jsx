import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    upperContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 2
    },
    upperContainerMainTextAndLogo: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    upperContainerLogo: {
        backgroundColor: '#f6f7f9',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperContainerLogoItem1: {
        backgroundColor: '#9ff47f',
        height: 25,
        width: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    upperContainerLogoItem2: {
        backgroundColor: '#141e34',
        height: 25,
        width: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        position: 'absolute',
        left: 20,
        top: 20
    },
    upperContainerMainText: {
        color: '#111b31',
        fontSize: 30,
        paddingLeft: 10
    },
    upperContainerText: {
        color: '#111b31',
        fontSize: 20,
        paddingTop: '5%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        backgroundColor: 'white',
        height: "50%", width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    modalImg: {
        height: 200,
        width: 200
    },
    modalViewContent: {
        alignItems: 'center',
        paddingTop: 20
    },
    modalContentName: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    moadalTexts: {
        color: 'red',
        fontSize: 20
    },
    lowerContainer: {
        flex: 6,
        padding: '5%'
    },
    lowerContainerInputLabel: {
        color: '#111b31',
        fontSize: 15,
        paddingTop: 30
    },
    lowerContainerInput: {
        borderColor: '#eeeff3',
        borderWidth: 2,
        color: '#111b31',
        borderRadius: 50,
        marginTop: 10, 
        paddingLeft:5
    },
    lowerContainerButton: {
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lowerContainerButtonText: {
        fontSize: 15
    },
    lowerContainerButtonIcon: {
        position: 'absolute',
        right: 10
    },
    lowerContainerHorizontelLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    horizontelLine: {
        height: 2,
        width: '45%',
        backgroundColor: '#eeeff3'
    },
    signInButton: {
        borderColor: '#eeeff3',
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    signInButtonText: {
        color: 'black',
        fontSize: 15
    }, signInButtonIcon: {
        position: 'absolute',
        left: "20%"
    }
});