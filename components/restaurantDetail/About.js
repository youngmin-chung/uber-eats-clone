import React from 'react'
import { View, Text, Image } from 'react-native'

const image =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'

const title = 'Farmhouse Kitchen Thai Cuisine'

const description = 'Thai * Comport Food * $$ * '

export default function About() {
  return (
    <View>
      {/* Restaurant Image*/}
      <RestaurantImage image={image} />
      {/* Restaurant Title */}
      <RestaurantTitle title={title} />
      {/* Restaurant Description */}
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.title}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15.5,
    }}>
    {props.description}
  </Text>
)