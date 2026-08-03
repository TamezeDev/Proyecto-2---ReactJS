import { Flex } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const navOptions = [
  { name: 'Inicio', path: '/' },
  { name: 'Nuestro equipo', path: '/team' },
  { name: 'Apúntate', path: '/joinUs' },
  { name: 'Sobre nosotros', path: '/about' },
]

const MenuNav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      bg="green.400"
      boxShadow="md"
      py={3}
      borderRadius="md"
      padding={{ base: '5px', sm: '15px', md: '20px' }}
    >
      <Flex as="ul" justifyContent="center" wrap="wrap" gap="30px">
        {navOptions.map((option, index) => (
          <Flex
            as="li"
            key={index}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            color="gray.700"
            fontWeight="medium"
            fontSize={{ base: 'sm', sm: 'md', md: '2xl' }}
            cursor="pointer"
            _hover={{ color: 'green.200', transform: 'translateY(-3px)' }}
            transition="color 0.2s, transform 0.2s"
          >
            <NavLink
              to={option.path}
              style={({ isActive }) => ({
                color: isActive ? '#1a5c1a' : undefined,
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              {option.name}
            </NavLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default MenuNav
