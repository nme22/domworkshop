import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar,
} from '@chakra-ui/react';

import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      sx={{ gap: '32px' }}
      justify="center"
    >
      <Avatar src="/youngshwap copy.png" size="2x1" />
      <VStack>
        <Heading as="h1"> Navid Ebrahimi</Heading>
        <Heading size="md" as="h3">
          Junior Frontend Engineer
        </Heading>
      </VStack>
      <Text texAlign="center">
        Salam! Names Navid, but colleauges call me Nav. I enjoy getting better
        at frontend development day after day. Other hobbies include soccer(MC
        City Fan), snowboarding, and video games!{' '}
      </Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="https://twitter.com/nme22" target="_blank">
          <Icon color="black" as={FaTwitter} />
        </Link>
        <Link href="https://github.com/nme_22" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
      </HStack>
    </Flex>
  );
}
