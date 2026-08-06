import { useTeam } from '../hooks/useTeam'
import { TeamContext } from './TeamContext'

const TeamContextProvider = ({ children }) => {
  const { team, isLoading, loadTeam, addnewMember } = useTeam()

  return (
    <TeamContext.Provider value={{ team, isLoading, loadTeam, addnewMember }}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContextProvider
