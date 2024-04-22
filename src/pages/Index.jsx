// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCoffee, FaUtensils, FaLandmark, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Explore Amsterdam
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <VStack>
          <Icon as={FaCoffee} w={10} h={10} color="orange.400" />
          <Text fontSize="xl" fontWeight="bold">
            Cafes
          </Text>
          <Text>Discover cozy cafes where you can enjoy a cup of world-class coffee.</Text>
          <Image src="https://images.unsplash.com/photo-1663505199322-27f83cf318ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYWZlfGVufDB8fHx8MTcxMzc2MzYwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Amsterdam Cafe" boxSize="200px" objectFit="cover" borderRadius="md" />
        </VStack>
        <VStack>
          <Icon as={FaUtensils} w={10} h={10} color="green.400" />
          <Text fontSize="xl" fontWeight="bold">
            Restaurants
          </Text>
          <Text>Experience the best of local and international cuisine in Amsterdam's top restaurants.</Text>
          <Image src="https://images.unsplash.com/photo-1575842763096-d9dfa88e7f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjByZXN0YXVyYW50fGVufDB8fHx8MTcxMzc2MzYwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Amsterdam Restaurant" boxSize="200px" objectFit="cover" borderRadius="md" />
        </VStack>
        <VStack>
          <Icon as={FaLandmark} w={10} h={10} color="blue.400" />
          <Text fontSize="xl" fontWeight="bold">
            Attractions
          </Text>
          <Text>Visit must-see attractions and enjoy the vibrant atmosphere of the city.</Text>
          <Image src="https://images.unsplash.com/photo-1702529346733-0d944270a4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBhdHRyYWN0aW9ufGVufDB8fHx8MTcxMzc2MzYwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Amsterdam Attraction" boxSize="200px" objectFit="cover" borderRadius="md" />
        </VStack>
        <VStack>
          <Icon as={FaInfoCircle} w={10} h={10} color="red.400" />
          <Text fontSize="xl" fontWeight="bold">
            Historical Places
          </Text>
          <Text>Explore the rich history of Amsterdam through its well-preserved historical sites.</Text>
          <Image src="https://images.unsplash.com/photo-1649694262988-4c457115731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBoaXN0b3JpY2FsJTIwcGxhY2V8ZW58MHx8fHwxNzEzNzYzNjA5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Amsterdam Historical Place" boxSize="200px" objectFit="cover" borderRadius="md" />
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
