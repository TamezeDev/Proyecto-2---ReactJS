import { useContext, useEffect } from 'react'
import { TeamContext } from '../components/context/TeamContext'
import DetailMember from '../components/DetailMember'
import { Box, SimpleGrid, Spinner } from '@chakra-ui/react'

const Team = () => {
  const { team, isLoading, loadTeam } = useContext(TeamContext)

  const createMemberCard = () => {
    return team.map((member) => {
      return <DetailMember key={member.id} member={member} />
    })
  }

  useEffect(() => {
    loadTeam(12)
  }, [])

  if (isLoading)
    return (
      <Box margin={'200px'}>
        <Spinner size="xl" color="green.600" />
      </Box>
    )
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="25px" margin="30px">
      {createMemberCard()}
    </SimpleGrid>
  )
}

export default Team
