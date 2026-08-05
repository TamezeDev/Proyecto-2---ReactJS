import { HStack, Icon } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      bg="green.700"
      color="white"
      padding={{ base: '20px', md: '30px' }}
      gap={{ base: '15px', md: '30px' }}
      mb={5}
      borderRadius={'md'}
    >
      <Text>🌴 Los voluntarios 🌴</Text>
      <HStack spacing={4}>
        <Icon as={FaFacebook} cursor="pointer"></Icon>
        <Icon as={FaInstagram} cursor="pointer"></Icon>
        <Icon as={FaTwitter} cursor="pointer"></Icon>
      </HStack>
      <Text color="gray.300" fontSize="sm">
        @ {new Date().getFullYear()} - Entidad colaboradora registrada
      </Text>
    </Flex>
  )
}

export default Footer
