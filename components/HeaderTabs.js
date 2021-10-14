import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      {/* Header Button - Delivery */}
      <HeaderButton
        text='Delivery'
        btnColor='black'
        textColor='white'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Header Button - Pickup */}
      <HeaderButton
        text='Pickup'
        btnColor='white'
        textColor='black'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
)
