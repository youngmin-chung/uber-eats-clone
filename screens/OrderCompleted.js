import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { useSelector } from 'react-redux'

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  )
  // '$9.99' -> '9.99' -> Number('9.99') -> 9.99
  // it contains [9.99, 10.99, 11.99]
  // reduce -> [9.99, 10.99, 11.99]
  // reduce -> 9.99 + 10.99 + 11.99
  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  })
  return (
    <SafeAreaView>
      <View>
        <Text>
          Your order at {restaurantName.restaurantName} has been placed for{' '}
          {totalUSD}
        </Text>
      </View>
    </SafeAreaView>
  )
}
