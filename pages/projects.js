import { VStack } from '@chakra-ui/react';
import ProjectCard from '@components/projectsCard';

export default function Projects() {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <ProjectCard
        image="/Screen Shot 2022-02-02 at 1.55.04 AM.png"
        name="Portfolio"
        link="https://github.com/nme22"
      />
    </VStack>
  );
}
