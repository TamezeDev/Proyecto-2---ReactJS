import { Flex } from '@chakra-ui/react'
import Brand from './Brand'
import MenuNav from './MenuNav'

const Header = () => {
  return (
    <Flex
      as={'header'}
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent={'center'}
      gap={'10vw'}
      margin={{ base: '20px', sm: '40px' }}
    >
      <Brand />
      <MenuNav />
    </Flex>
  )
}

export default Header
