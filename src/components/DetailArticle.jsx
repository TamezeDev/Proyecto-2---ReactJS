import { useParams } from 'react-router-dom'
import { Flex, Text, Image } from '@chakra-ui/react'
import { getArticleById } from '../data/indexCatalog'

const DetailArticle = () => {
  const { id } = useParams()
  const article = getArticleById(Number(id))

  if (!article)
    return (
      <Text fontSize="lg" mb={5}>
        Artículo no encontrado
      </Text>
    )

  const createPairs = () => {
    const pairs = []
    for (let i = 0; i < article.blocks.length; i += 2) {
      pairs.push({
        text: article.blocks[i]?.content,
        image: article.blocks[i + 1]?.src,
        alt: article.blocks[i + 1]?.alt,
      })
    }
    return pairs
  }

  const pairs = createPairs()

  return (
    <Flex
      as="section"
      maxWidth="900px"
      flexDirection="column"
      p="8"
      gap="50px"
      textAlign="center"
      mb="6"
    >
      <Text
        as="h2"
        fontSize={{ base: '2xl', sm: '4xl' }}
        fontWeight="bold"
        color="green.700"
      >
        {article.headline}
      </Text>
      <Text color="gray.500">{article.date}</Text>
      <Text fontSize="lg" color="green.700">
        {article.summary}
      </Text>

      {pairs.map((pair, index) => {
        const isEven = index % 2 === 0
        const order = isEven ? 'row' : 'row-reverse'
        if (!pair.image) {
          return (
            <Text fontSize="lg" color="gray.700">
              {pair.text}
            </Text>
          )
        }

        return (
          <Flex
            key={index}
            flexDirection={{ base: 'column', md: order }}
            gap="20px"
            alignItems="center"
          >
            <Text fontSize="lg" color="gray.700">
              {pair.text}
            </Text>
            <Image
              src={pair.image}
              alt={pair.alt}
              borderRadius="md"
              width={{ base: '100%', md: '400px' }}
              height={{ base: '100%', md: '400px' }}
            />
          </Flex>
        )
      })}
    </Flex>
  )
}

export default DetailArticle
