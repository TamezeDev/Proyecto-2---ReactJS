import { SimpleGrid } from '@chakra-ui/react'
import { newsData } from '../data/indexCatalog'
import IndexArticle from '../components/IndexArticle'

const Index = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="25px" margin="30px">
      {newsData.map((article) => (
        <IndexArticle key={article.id} article={article} />
      ))}
    </SimpleGrid>
  )
}

export default Index
