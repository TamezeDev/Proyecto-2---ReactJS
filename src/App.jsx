import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import Routing from './routing/Routing'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import TeamContextProvider from './components/context/TeamContextProvider'
import ScrollToTop from './components/ScrollToTop'

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
        <TeamContextProvider>
          <ScrollToTop />
          <main>
            <Routing />
          </main>
        </TeamContextProvider>
        <Footer />
      </Flex>
    </BrowserRouter>
  )
}

export default App
