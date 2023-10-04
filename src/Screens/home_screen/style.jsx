import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    upperContainer: {
        height: "55%"
    },
    upperContainerBackground: {
        backgroundColor: '#111b31',
        height: "80%",
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100
    },
    upperContainerLogo: {
        backgroundColor: '#f6f7f9',
        width: 130,
        height: 130,
        borderRadius: 70,
        position: 'relative',
        alignSelf: 'center',
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperContainerLogoItem1: {
        backgroundColor: '#9ff47f',
        height: 60,
        width: 60,
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        position: 'absolute',
        right: 40,
        bottom: 40
    },
    upperContainerLogoItem2: {
        backgroundColor: '#141e34',
        height: 60,
        width: 60,
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        position: 'absolute',
        left: 40,
        top: 40
    },
    lowerContainer: {
        alignItems: 'center'
    },
    lowerContainerMainText: {
        color: '#111b31',
        fontSize: 50
    },
    lowerCOntainerText: {
        color: '#111b31',
        fontSize: 15,
        paddingTop: 30
    },
    button:{ 
        borderRadius: 40, 
        backgroundColor: '#a3fa81', 
        padding: 20, 
        borderRadius: 40, 
        marginTop: '30%', 
        flexDirection: 'row' 
    },buttonText :{
         color: '#141f28', 
         fontSize: 15 
        }

})
