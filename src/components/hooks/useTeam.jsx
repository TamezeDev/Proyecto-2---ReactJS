import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

const getRandomPerson = async () => {
  const data = await fetch('https://randomuser.me/api/')
  const dataJson = await data.json()
  const person = dataJson.results[0]

  return {
    id: person.login.uuid,
    name: `${person.name.first} ${person.name.last}`,
    email: person.email,
    age: person.dob.age,
    img: person.picture.large,
  }
}

export const useTeam = () => {
  const [team, setTeam] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const hasUsedApi = useRef(false)

  const loadTeam = async (howMany) => {
    if (hasUsedApi.current) return
    hasUsedApi.current = true

    setIsLoading(true)
    const members = []
    try {
      for (let i = 0; i < howMany; i++) {
        members.push(await getRandomPerson())
      }
      setTeam((prev) => [...prev, ...members])
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const addnewMember = (newMember) => {
    newMember.id = uuid()
    setTeam((prev) => [newMember, ...prev])
  }

  return { team, isLoading, loadTeam, addnewMember }
}
