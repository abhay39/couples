import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const maleProfiles = [
    {
        name: "Alex Johnson", age: 28, job: "Software Developer", bio: "A passionate and outgoing individual who loves to travel and explore new places.", imageUrl: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400", imagesArray: [
            {
                id: 1,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 2,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 3,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 4,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 5,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
        ]
    },
    {
        name: "Brian Thompson", age: 34, bio: "A passionate and outgoing individual who loves to travel and explore new places.", job: "Marketing Manager", imageUrl: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400", imagesArray: [
            {
                id: 1,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 2,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 3,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 4,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
            {
                id: 5,
                url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
                description: "A passionate and outgoing individual who loves to travel and explore new places."
            },
        ]
    },

];

const Swippers = () => {

    const userDetails=useSelector(item=>item.userDetails)

    // console.log(userDetails)
    const [allSwiped, setAllSwiped] = useState(false);
    const [openModel, setOpenModel] = useState({
        visible: false,
        userData: ""
    });
    const [allUsers, setAllUsers] = useState([])
    

    const getAllUsers = async () => {
        const token = await AsyncStorage.getItem('token');
        // console.log("Token: ", token)
        let res = await fetch(`${process.env.API_URL}/allUsers/getAllUsers/${token}`)
        resData = await res.json();
        setAllUsers(resData)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const swipeRight = async(cardIndex) => {
        const swipedUserId=allUsers[cardIndex]?._id;
        try{
            let res= await fetch(`${process.env.API_URL}/allUsers/rightSwiped`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    swipedUserId: swipedUserId,
                    currentUserId: userDetails.userInfo._id
                })
            })
            const status=res.status;
            res=await res.json();
            if(status==200){
                console.log("Res: ",res)
                setOpenModel({
                    visible: true,
                    index: cardIndex
                })
            }
            
            console.log("Res: ",res)
        }catch(err){
            console.log("Error: ",err.message)
        }
        // console.log("swipedUserId", swipedUserId, "currentUserId",userDetails.userInfo._id)
    };

    const swipeLeft = (cardIndex) => {
        const swipedUserId=allUsers[cardIndex]?._id;

    };

    const swipeRef = useRef(null);

    return (
        <View style={styles.container}>
            {allSwiped ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 400, width: '90%', borderRadius: 30 }}>
                    <Image
                        source={{ uri: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png' }}
                        style={{ height: 200, width: 200 }}
                        alt="no profile"
                    />
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>No profile left</Text>

                </View>
            ) : (
                <Swiper
                    ref={swipeRef}
                    verticalSwipe={false}
                    cards={allUsers}
                    renderCard={(card, index) => {
                        // console.log("Card: ",card)
                        return (
                            <View style={styles.card} key={index}>
                                <Image
                                    source={{ uri: card?.imageUrl || "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400" }}
                                    alt="image"
                                    style={{
                                        height: 400,
                                        width: '100%',
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        objectFit: 'cover'
                                    }}
                                />
                                <View style={{ backgroundColor: 'white', padding: 5, paddingLeft: 10 }}>
                                    <Text style={styles.text}>{card?.fullName} {card?.isVerified===true && (<MaterialIcons name='verified' size={20} color='blue' />) }</Text>
                                    <Text style={styles.text2}>{card?.job}, {card?.age}, {card?.gender.toUpperCase()}</Text>
                                    <Text style={styles.text1}>{card?.bio || "A passionate and outgoing individual who loves to travel and explore new places."}</Text>
                                </View>
                                <View style={{
                                    width: '100%',
                                    borderWidth: 1,
                                    borderColor: '#bdadad'
                                }} />
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 20 }}>
                                    <TouchableOpacity style={{
                                        borderRadius: 100,
                                        padding: 10,
                                        backgroundColor: 'red',
                                        borderRadius: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} onPress={() => {
                                        swipeRef.current.swipeLeft()
                                    }}>
                                        <Entypo name='cross' size={40} color='white' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        swipeRef.current.swipeRight()
                                    }} style={{
                                        borderRadius: 100,
                                        padding: 10,
                                        backgroundColor: 'green',
                                        borderRadius: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <AntDesign name='heart' size={40} color='white' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: '100%',
                                    borderWidth: 1,
                                    borderColor: '#bdadad'
                                }} />
                                {/* <TouchableOpacity style={{
                                marginTop: 5,
                                marginBottom: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} onPress={()=>{
                                setOpenModel({
                                    visible: true,
                                    index: index
                                })
                            }}>
                                <Text>See more of him..</Text>
                            </TouchableOpacity> */}

                            </View>
                        )
                    }}
                    // onSwiped={}
                    onSwipedLeft={(cardIndex) => {
                        swipeLeft(cardIndex)
                    }}
                    onSwipedRight={(cardIndex) => {
                        swipeRight(cardIndex)
                    }}
                    onSwipedAll={() => setAllSwiped(true)}
                    cardIndex={0}
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: 'right',
                                    color: 'red',
                                }
                            }
                        },
                        right: {
                            title: "LIKE",
                            style: {
                                label: {
                                    textAlign: 'left',
                                    color: 'green',
                                }
                            }
                        }
                    }}
                    backgroundColor="transparent"
                    stackSize={5}
                />
            )}

           

        </View>
    )
}

export default Swippers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
    },
    text: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        fontSize: 28,
        color: "black",
        fontWeight: '900'
    },
    text1: {
        fontSize: 16,
        color: "black",

    },
    text2: {
        fontSize: 18,
        color: "gray"
    },
});
