import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const IndexArticle = ({ article }) => {
  return (
    <NavLink to={`/article/${article.id}`}>
      <Flex
        as="article"
        flexDirection="column"
        gap="10px"
        border={'1px solid green'}
        borderRadius="lg"
        shadow="md"
        cursor="pointer"
        bg="white"
        maxWidth="350px"
        overflow="hidden"
      >
        <Image
          src={article.coverImage}
          alt={article.imageAlt}
          width="100%"
          height="200px"
          objectFit="cover"
        />
        <Box spaceY="20px" margin="10px">
          <Heading fontSize="md" color="green.700" textAlign="center">
            {article.headline}
          </Heading>
          <Text fontSize="sm" color="green.500" textAlign="center">
            {article.date}
          </Text>
          <Text fontSize="md" color="green.700" textAlign="center">
            {article.summary}
          </Text>
        </Box>
      </Flex>
    </NavLink>
  )
}

export default IndexArticle
