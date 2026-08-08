import {
  Flex,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Button,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { activities, values } from '../data/aboutData'

const About = () => {
  return (
    <Flex flexDirection="column" width="100%" marginBottom={'50px'}>
      <Flex
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        bg="green.50"
        padding={{ base: '40px 20px', md: '70px 40px' }}
        gap={4}
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }} color="green.700">
          Quiénes somos
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.700"
          maxWidth="700px"
        >
          Los Voluntarios nace con un objetivo claro: cuidar el entorno natural
          a través de la acción colectiva. Desde limpiezas de playas hasta
          jornadas de reforestación, cada actividad que organizamos busca dejar
          un impacto positivo y duradero en nuestro entorno.
        </Text>
      </Flex>

      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: 6, md: 16 }}
        bg="white"
        padding={{ base: '40px 20px', md: '60px 40px' }}
      >
        <Box
          maxWidth="500px"
          borderBottom={{ base: '1px solid green', md: 'none' }}
          paddingBottom={{ base: '40px', md: 'none' }}
        >
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            color="green.700"
            mb={3}
            textAlign="center"
          >
            Nuestra misión
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
            Creemos que el cambio empieza por pequeños gestos, y que juntos,
            como comunidad, podemos lograr mucho más. Trabajamos para que cada
            persona que se une a nosotros encuentre una forma real y accesible
            de cuidar el planeta, sin importar su experiencia previa.
          </Text>
        </Box>
        <Box maxWidth="500px">
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            color="green.700"
            mb={3}
            textAlign="center"
          >
            Nuestra visión
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
            Aspiramos a convertirnos en un referente del voluntariado ambiental
            en Andalucía, ampliando nuestra red de acción a más municipios y
            construyendo una comunidad activa, comprometida y en constante
            crecimiento.
          </Text>
        </Box>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        bg="green.50"
        padding={{ base: '40px 20px', md: '60px 40px' }}
        gap={8}
      >
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          color="green.700"
          textAlign="center"
        >
          Qué hacemos
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          gap="24px"
          maxWidth="1100px"
        >
          {activities.map((activity) => (
            <Flex
              key={activity.title}
              as="article"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              padding="24px"
              gap={3}
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
            >
              <Icon as={activity.icon} boxSize={8} color="green.600" />
              <Heading fontSize="md" color="green.700">
                {activity.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {activity.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        bg="white"
        padding={{ base: '40px 20px', md: '60px 40px' }}
        gap={8}
      >
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          color="green.700"
          textAlign="center"
        >
          Nuestros valores
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          gap="24px"
          maxWidth="1100px"
        >
          {values.map((value) => (
            <Flex
              key={value.title}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={2}
              borderBottom={{ base: '1px solid green', md: 'none' }}
              paddingBottom={{ base: '40px', md: 'none' }}
            >
              <Icon as={value.icon} boxSize={7} color="green.600" />
              <Heading fontSize="sm" color="green.700">
                {value.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {value.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        bg="green.700"
        color="white"
        padding={{ base: '40px 20px', md: '60px 40px' }}
        gap={4}
      >
        <Heading fontSize={{ base: 'xl', md: '2xl' }}>
          ¿Quieres formar parte del cambio?
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxWidth="500px">
          Únete a nuestra comunidad de voluntarios y empieza a marcar la
          diferencia en tu entorno.
        </Text>
        <Button
          as={NavLink}
          to="/joinUs"
          bg="white"
          color="green.700"
          fontWeight="bold"
          _hover={{ bg: 'green.100', transform: 'translateY(-2px)' }}
          transition="all 0.2s"
          maxW="max-content"
        >
          Apúntate ahora
        </Button>
      </Flex>
    </Flex>
  )
}

export default About
