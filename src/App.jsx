import { Flex } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  return (
    <Flex flexDirection={'column'} maxWidth={'1400px'} alignItems={'center'}>
      <Header />
    </Flex>
  )
}

export default App
