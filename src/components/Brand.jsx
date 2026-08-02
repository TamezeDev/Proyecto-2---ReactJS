import { Flex, Heading, Text } from '@chakra-ui/react'

const brandName = ' Los voluntarios'
const logo = '🌴'
const brandInfo = 'Ayudamos a mejorar nuestro entorno'

const Brand = () => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems="center"
      padding={'20px'}
      border={'1px solid white'}
      backgroundColor={'blue.200'}
      maxWidth={'max-content'}
      borderRadius={'md'}
    >
      <Flex
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'20px'}
      >
        <Text fontSize={{ base: 'xl', md: '4xl' }}>{logo}</Text>
        <Heading size={{ base: 'xl', md: '5xl' }}>{brandName}</Heading>
        <Text fontSize={{ base: 'xl', md: '4xl' }}>{logo}</Text>
      </Flex>
      <Text fontSize={{ base: 'xl', md: '3xl' }}>{brandInfo}</Text>
    </Flex>
  )
}

export default Brand
