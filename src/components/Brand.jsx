import { Flex, Heading, Text } from '@chakra-ui/react'

const brandName = 'Los voluntarios'
const logo = '🌴'
const brandInfo = 'Ayudamos a mejorar nuestro entorno'

const Brand = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={{ base: '16px', md: '24px' }}
      gap="10px"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={{ base: '10px', md: '20px' }}
      >
        <Text fontSize={{ base: '2xl', md: '4xl' }}>{logo}</Text>
        <Heading
          textAlign="center"
          size={{ base: '3xl', sm: '4xl', md: '5xl' }}
          color="green.700"
          fontFamily="heading"
        >
          {brandName}
        </Heading>
        <Text fontSize={{ base: '2xl', md: '4xl' }}>{logo}</Text>
      </Flex>
      <Text
        fontSize={{ base: 'sm', md: 'xl' }}
        color="gray.600"
        fontWeight="medium"
        textAlign="center"
      >
        {brandInfo}
      </Text>
    </Flex>
  )
}

export default Brand
