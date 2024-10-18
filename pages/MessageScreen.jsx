import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Button } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const messages = [
    { sender: "Duane Padilla", message: "Hey Abhay, how’s it going?", timestamp: "2024-10-10 09:01:00" },
    { sender: "Abhay", message: "Hey Duane! I'm good, thanks. How about you?", timestamp: "2024-10-10 09:02:00" },
    { sender: "Duane Padilla", message: "Doing well! Just started on a new project. How’s work going for you?", timestamp: "2024-10-10 09:03:00" },
    { sender: "Abhay", message: "That's exciting! Work has been great. I'm learning a lot.", timestamp: "2024-10-10 09:04:00" },
    { sender: "Duane Padilla", message: "Glad to hear that! What are you currently working on?", timestamp: "2024-10-10 09:05:00" },
    { sender: "Abhay", message: "I'm developing a social media platform with React Native.", timestamp: "2024-10-10 09:06:00" },
    { sender: "Duane Padilla", message: "Nice! React Native is great for mobile development.", timestamp: "2024-10-10 09:07:00" },
    { sender: "Abhay", message: "Absolutely! It’s been challenging but fun. What about your project?", timestamp: "2024-10-10 09:08:00" },
    { sender: "Duane Padilla", message: "I’m working on a machine learning model for image recognition.", timestamp: "2024-10-10 09:09:00" },
    { sender: "Abhay", message: "Wow, that sounds really interesting. Are you using TensorFlow?", timestamp: "2024-10-10 09:10:00" },
    { sender: "Duane Padilla", message: "Yep! TensorFlow and a bit of PyTorch as well.", timestamp: "2024-10-10 09:11:00" },
    { sender: "Abhay", message: "Awesome! I’d love to learn more about that. Do you have any resources?", timestamp: "2024-10-10 09:12:00" },
    { sender: "Duane Padilla", message: "Sure! I can share a few tutorials I found helpful.", timestamp: "2024-10-10 09:13:00" },
    { sender: "Abhay", message: "That would be great, thanks!", timestamp: "2024-10-10 09:14:00" },
    { sender: "Duane Padilla", message: "No problem. I’ll send them over later.", timestamp: "2024-10-10 09:15:00" },
    { sender: "Abhay", message: "Cool! By the way, do you know any good resources for Redux?", timestamp: "2024-10-10 09:16:00" },
    { sender: "Duane Padilla", message: "Oh yes, Redux Toolkit is really good. Have you tried it?", timestamp: "2024-10-10 09:17:00" },
    { sender: "Abhay", message: "Yes, I've been using it in my projects. It's very efficient.", timestamp: "2024-10-10 09:18:00" },
    { sender: "Duane Padilla", message: "It really is! I love how it simplifies Redux.", timestamp: "2024-10-10 09:19:00" },
    { sender: "Abhay", message: "Exactly! It makes state management so much easier.", timestamp: "2024-10-10 09:20:00" },
    { sender: "Duane Padilla", message: "By the way, are you attending any tech conferences this year?", timestamp: "2024-10-10 09:21:00" },
    { sender: "Abhay", message: "I'm thinking of attending React Conf. Are you going to any?", timestamp: "2024-10-10 09:22:00" },
    { sender: "Duane Padilla", message: "I might go to PyCon. Let's see if we can catch up at one!", timestamp: "2024-10-10 09:23:00" },
    { sender: "Abhay", message: "That would be awesome! It's been too long since we last met.", timestamp: "2024-10-10 09:24:00" },
    { sender: "Duane Padilla", message: "It really has. How’s the family?", timestamp: "2024-10-10 09:25:00" },
    { sender: "Abhay", message: "Everyone’s doing well. Thanks for asking. How about yours?", timestamp: "2024-10-10 09:26:00" },
    { sender: "Duane Padilla", message: "All good here too. My daughter just started school!", timestamp: "2024-10-10 09:27:00" },
    { sender: "Abhay", message: "That's wonderful! How is she adjusting?", timestamp: "2024-10-10 09:28:00" },
    { sender: "Duane Padilla", message: "She’s loving it! Making new friends every day.", timestamp: "2024-10-10 09:29:00" },
    { sender: "Abhay", message: "Kids are amazing that way. They adapt so quickly.", timestamp: "2024-10-10 09:30:00" },
    { sender: "Duane Padilla", message: "They really do. So, what's your next big project?", timestamp: "2024-10-10 09:31:00" },
    { sender: "Abhay", message: "I'm planning to work on an AI-based personal assistant app.", timestamp: "2024-10-10 09:32:00" },
    { sender: "Duane Padilla", message: "That sounds cool! Are you going to use voice recognition?", timestamp: "2024-10-10 09:33:00" },
    { sender: "Abhay", message: "Yes! Still in the planning phase, but it's exciting.", timestamp: "2024-10-10 09:34:00" },
    { sender: "Duane Padilla", message: "You have to keep me updated on that. Sounds fascinating.", timestamp: "2024-10-10 09:35:00" },
    { sender: "Abhay", message: "Will do! How about you, any upcoming projects?", timestamp: "2024-10-10 09:36:00" },
    { sender: "Duane Padilla", message: "I'm thinking of diving into augmented reality next.", timestamp: "2024-10-10 09:37:00" },
    { sender: "Abhay", message: "AR is the future! Do you have any ideas for the project?", timestamp: "2024-10-10 09:38:00" },
    { sender: "Duane Padilla", message: "Thinking of an educational app for kids. Interactive learning!", timestamp: "2024-10-10 09:39:00" },
    { sender: "Abhay", message: "That’s brilliant. Kids would love that!", timestamp: "2024-10-10 09:40:00" },
    { sender: "Duane Padilla", message: "Thanks! I think it could really make learning fun.", timestamp: "2024-10-10 09:41:00" },
    { sender: "Abhay", message: "Absolutely! Let me know if you need any help with it.", timestamp: "2024-10-10 09:42:00" },
    { sender: "Duane Padilla", message: "Will do, thanks! Let's catch up soon in person.", timestamp: "2024-10-10 09:43:00" },
    { sender: "Abhay", message: "Definitely! Let’s plan for it. Take care!", timestamp: "2024-10-10 09:44:00" },
    { sender: "Duane Padilla", message: "You too, Abhay! Talk soon.", timestamp: "2024-10-10 09:45:00" }
];


const MessageScreen = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const [openOptions, setOpenOptions] = useState(false);
    const [messageText, setMessageText] = useState('');

    const [totalMessages, setTotalMessages] = useState(messages);

    const handleMessageSend = () => {
        if (messageText.trim() !== '') {
            setTotalMessages([...messages, { sender: 'Abhay', message: messageText, timestamp: new Date().toISOString() }]);
            setMessageText('');
        }
        flatListRef.current.scrollToEnd({
            animated: true,
            toEnd: true,
        })
    }

    const toggleOptions = () => {
        setOpenOptions(!openOptions);
        console.log("Toggle options:", openOptions);
    };

    const flatListRef = useRef();




    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back-outline' size={30} color={'gray'} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{item.name}</Text>
                </View>
                <TouchableOpacity onPress={toggleOptions}>
                    <Ionicons name='ellipsis-vertical' size={30} color={'gray'} />
                </TouchableOpacity>
            </View>

            <FlatList
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                data={totalMessages}
                keyExtractor={(item) => item.timestamp.toString()}
                renderItem={({ item }) => {
                    const timestamp = new Date(item.timestamp);
                    const hours = timestamp.getHours().toString().padStart(2, '0');
                    const minutes = timestamp.getMinutes().toString().padStart(2, '0');
                    const time = `${hours}:${minutes}`;
                    return(
                        <View
                        style={[
                            styles.messageContainer,
                            {
                                backgroundColor: item.sender === 'Abhay' ? '#57b857' : '#ffffff',
                                alignSelf: item.sender === 'Abhay' ? 'flex-end' : 'flex-start',
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: item.sender === 'Abhay' ? 'white' : 'black',
                            }}
                        >
                            {item.message}
                        </Text>
                       
                    </View>
                    )
                }}
                contentContainerStyle={styles.messagesList}
                onContentSizeChange={(contentSize) => {
                    flatListRef.current.scrollToEnd({ animated: true });
                }}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={messageText}
                    placeholder='Type a message...'
                    style={styles.input}
                    onChangeText={(text) => {
                        setMessageText(text);
                    }}
                />
                {
                    messageText.length > 0 && (
                        <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
                            <Ionicons name="send" size={24} color="white" />
                        </TouchableOpacity>
                    )
                }
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backIcon: {
        marginRight: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'black',
    },
    messagesList: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Aligns text and checkmark icon in the same line
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth: '60%',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fcfafa',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        elevation: 2,
        shadowColor: '#000',
    },
    input: {
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: '#57b857',
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
});

export default MessageScreen;
