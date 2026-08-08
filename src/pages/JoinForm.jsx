import { Flex, Input, Field, Text, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { TeamContext } from '../components/context/TeamContext'
import { useContext, useEffect, useState } from 'react'

const JoinForm = () => {
  const [registered, setRegistered] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { addnewMember } = useContext(TeamContext)

  const onSubmit = (formData) => {
    const file = formData.img?.[0]
    const imageUrl = URL.createObjectURL(file)

    addnewMember({
      name: formData.name,
      email: formData.email,
      age: formData.age,
      img: imageUrl,
    })
    setRegistered(true)
  }

  useEffect(() => {
    if (!registered) return
    const timer = setTimeout(() => setRegistered(false), 4000)
    return () => clearTimeout(timer)
  }, [registered])

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDirection="column"
      gap={5}
      margin="0 auto"
      maxWidth="900px"
      marginBottom={8}
      alignItems={'center'}
      padding={'20px'}
    >
      <Text
        textAlign={'center'}
        fontSize="lg"
        color="green.700"
        fontWeight="bold"
        mb={8}
      >
        Inscríbete y aparecerás directamente en nuestro equipo
      </Text>
      <Flex flexDirection="column" gap={'20px'}>
        <Field.Root invalid={!!errors.name}>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            gap={3}
          >
            <Field.Label fontSize={{ base: 'sm', lg: 'md' }}>
              Nombre completo:
            </Field.Label>
            <Input
              variant="flushed"
              type="text"
              {...register('name', {
                required: 'Debe introducir un nombre',
                minLength: {
                  value: 2,
                  message: 'Debe tener al menos 2 caracteres',
                },
              })}
            />
          </Flex>
          <Field.ErrorText
            fontSize={{ base: 'sm', lg: 'md' }}
            mt={4}
            paddingLeft={'50px'}
          >
            {errors.name?.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email}>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            gap={3}
          >
            <Field.Label fontSize={{ base: 'sm', lg: 'md' }}>
              Email:
            </Field.Label>
            <Input
              variant="flushed"
              type="email"
              {...register('email', {
                required: 'Debe introducir un correo electrónico',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'El formato del correo electrónico no es válido',
                },
              })}
            />
          </Flex>
          <Field.ErrorText
            fontSize={{ base: 'sm', lg: 'md' }}
            mt={4}
            paddingLeft={'10px'}
          >
            {errors.email?.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.age}>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            gap={3}
          >
            <Field.Label fontSize={{ base: 'sm', lg: 'md' }}>Edad:</Field.Label>
            <Input
              fontSize={{ base: 'sm', lg: 'md' }}
              variant="flushed"
              type="number"
              defaultValue={20}
              {...register('age', {
                required: 'Debe introducir su edad',
                min: {
                  value: 18,
                  message:
                    'Debe ser mayor de edad para registrarse desde la web',
                },
                max: {
                  value: 80,
                  message:
                    'Su edad supera el límite permitido para registro directo desde la web',
                },
              })}
            />
          </Flex>
          <Field.ErrorText fontSize={{ base: 'sm', lg: 'md' }} mt={4}>
            {errors.age?.message}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.img}>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            gap={3}
          >
            <Field.Label fontSize={{ base: 'sm', lg: 'md' }}>
              Imagen:
            </Field.Label>
            <Input
              alignContent={'center'}
              variant="subtle"
              type="file"
              bg={'transparent'}
              accept=".jpg,.jpeg,.png"
              {...register('img', { required: 'Debe añadir una imagen' })}
            />
          </Flex>
          <Field.ErrorText
            fontSize={{ base: 'sm', lg: 'md' }}
            mt={4}
            paddingLeft={'80px'}
          >
            {errors.img?.message}
          </Field.ErrorText>
        </Field.Root>
      </Flex>
      <Button
        maxW="max-content"
        alignSelf="center"
        color="white"
        bg="green.600"
        _hover={{ bg: 'green.700', transform: 'translateY(-2px)' }}
        transition="all 0.2s"
        type="submit"
      >
        Registrarse
      </Button>

      <Text
        textAlign={'center'}
        margin={6}
        color="green.600"
        fontWeight="bold"
        visibility={registered ? 'visible' : 'hidden'}
      >
        Usuario registrado con éxito, ya aparece en nuestro listado de miembros
      </Text>
    </Flex>
  )
}

export default JoinForm
