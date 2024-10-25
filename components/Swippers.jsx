import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux'

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

    const userDetails = useSelector(state => state.userDetails);
    const [allSwiped, setAllSwiped] = useState(false);
    const [openModel, setOpenModel] = useState({
        visible: false,
        index: 0
    });

    console.log(userDetails.token)
    const getAllUsers=async()=>{
        let res=  await fetch(`${process.env.API_URL}/auth/allUsers/getAllUsers/${userDetails.token}`)
        const resData=await res.json();
        console.log(resData)
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    const swipeRight = (cardIndex) => {
        console.log(`Right swiped on ${maleProfiles[cardIndex]?.name}`);
    };

    const swipeLeft = (cardIndex) => {
        console.log(`Left swiped on ${maleProfiles[cardIndex]?.name}`);
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
                        fontWeight: 'black'
                    }}>No profile left</Text>

                </View>
            ) : (
                <Swiper
                    ref={swipeRef}
                    verticalSwipe={false}
                    cards={maleProfiles}
                    renderCard={(card, index) => (
                        <View style={styles.card} key={index}>
                            <Image
                                source={{ uri: card.imageUrl }}
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
                                <Text style={styles.text}>{card.name}</Text>
                                <Text style={styles.text2}>{card.job}, {card.age}</Text>
                                <Text style={styles.text1}>{card.bio}</Text>
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
                    )}
                    onSwiped={(cardIndex) => console.log('Card Index:', cardIndex)}
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

            {
                openModel.visible && (
                    <View style={{ flex: 1, width: '100%' }}>
                        <FlatList 
                            data={maleProfiles[openModel.index].imagesArray}
                            renderItem={(item)=>{
                                return (
                                    <View
                                            key={item.id}
                                            style={{
                                                marginBottom: 20,
                                                backgroundColor: 'white',
                                                padding: 10,
                                                borderRadius: 15
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.url  }}
                                                alt="image"
                                                style={{
                                                    height: 400,
                                                    width: '100%',
                                                    borderRadius: 20,
                                                    resizeMode: 'cover',
                                                }}
                                            />
                                            <Text style={{ color: 'black', fontSize: 16 }}>{item.description}</Text>
                                        </View>
                                )
                            }}
                        />
                    </View>
                )
            }

        </View>
    )
}

export default Swippers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "", // Set container background to white
        alignItems: "center", // Center the Swiper
        justifyContent: "center",
    },
    card: {
        width: '95%', // Set a fixed width for cards
        // height: 600,
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
    },
    text: {
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
