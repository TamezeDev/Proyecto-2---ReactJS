import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import Routing from './routing/Routing'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Flex
        flexDirection={'column'}
        maxWidth={'1400px'}
        alignItems={'center'}
        margin={'0 auto'}
      >
        <Header />
        <Routing />
      </Flex>
    </BrowserRouter>
  )
}

export default App
