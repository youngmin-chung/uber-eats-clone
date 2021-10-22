import React from 'react'

import { View, Text, Image } from 'react-native'

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(' • ')

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`
  return (
    <View>
      {/* Restaurant Image*/}
      <RestaurantImage image={image} />
      {/* Restaurant Title */}
      <RestaurantTitle name={name} />
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
    {props.name}
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
