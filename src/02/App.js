import React from 'react'
import {SafeAreaView} from 'react-native' 
// import Greeting from './component/Greeting' 
import Box from './component/Box'

const App = () => {
  // const name = '최한석'
  return (
    <SafeAreaView>
      {/* <Greeting /> */}
      {/* <Greeting name={name}/> */}
      {/* <Box/> */}
      {/* property value 가 true 일 때 property name 만 써도 된다. */}
      {/* <Box rounded/>  */}
      {/* <Box rounded size='large'/>  */}
      <Box rounded color='red'/>
    </SafeAreaView>
  )
}

export default App