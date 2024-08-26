import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);  
    }

    function addGoalHandler() {
        props.setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals, 
        {
            text: enteredGoalText,
            id: Math.random().toString()
        } 
        ]);
        setEnteredGoalText('');
        props.closeModal()
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={ styles.inputContainer }>
            <Image style={ styles.image } source={ require('../assets/images/goal.png') } />
                <TextInput 
                    style={ styles.textInput } 
                    placeholder="Your Course Goal" 
                    onChangeText={goalInputHandler}
                    value={ enteredGoalText } />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc" />    
                    </View>
                    <View style={ styles.button }>
                        <Button title="Cancel" onPress={props.closeModal} color="#f31282" />    
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        flex: 1,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 16  
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8   
    }    
})