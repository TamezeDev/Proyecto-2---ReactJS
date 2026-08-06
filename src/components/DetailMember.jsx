import { Flex, Image, Text } from '@chakra-ui/react'

const DetailMember = ({ member }) => {
  return (
    <Flex
      as={'article'}
      flexDirection="column"
      alignItems="center"
      bg="green.200"
      borderRadius="lg"
      boxShadow="md"
      p={4}
    >
      <Image
        src={member.img}
        alt={member.name}
        borderRadius="full"
        boxSize="120px"
        objectFit="cover"
        mb={3}
      />
      <Text
        fontWeight="bold"
        fontSize={'lg'}
        color="green.700"
      >{`Nombre: ${member.name}`}</Text>
      <Text fontSize="md" color="gray.500">{`Edad: ${member.age}`}</Text>
      <Text fontSize="md" color="gray.500">{`Email: ${member.email}`}</Text>
    </Flex>
  )
}

export default DetailMember
