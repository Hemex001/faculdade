import React, { useState } from 'react';
import { Box, Heading, Text, Input, Button, Flex, InputGroup, InputRightElement, SimpleGrid } from '@chakra-ui/react';
import { getForecast } from '../Api';
import { Link } from 'react-router-dom';

const ForecastPage = () => {
    const [city, setCity] = useState('');
    const [forecastData, setForecastData] = useState(null);

    const handleSubmit = async () => {
        const data = await getForecast(city);
        setForecastData(data);
    };

    return (
        <Flex justifyContent="center">
            <Box gap={8} marginTop={8} justifyContent="center">
                <Heading>Previsão do Tempo para os Próximos 5 Dias</Heading>
                <InputGroup size="lg" marginTop={8}>
                    <Input
                        placeholder="Digite o nome da cidade"
                        colorScheme="orange"
                        size='lg'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <InputRightElement w="100px">
                        <Button onClick={handleSubmit}>Buscar</Button>
                    </InputRightElement>
                </InputGroup>
                {forecastData && (
                    <Box mt={8}>
                        <Text fontSize={22}><b> {forecastData.location.name} </b></Text>
                        <br/> 
                        <SimpleGrid minChildWidth="200px" spacing="40px">
                            {forecastData.forecast.forecastday.map((day) => (
                                <Box key={day.date} mb={4} borderWidth="1px" borderColor="gray.200" p={4} rounded="md">
                                    <Text fontSize={22}><b>Data:</b> {day.date}</Text>
                                    <Text fontSize={22}><b>Máxima:</b> {day.day.maxtemp_c}°C</Text>
                                    <Text fontSize={22}><b>Mínima:</b> {day.day.mintemp_c}°C</Text>
                                    <Text fontSize={22}><b>Condições:</b> {day.day.condition.text}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                )}

                <Link to="/">
                    <Button
                        size="lg"
                        colorScheme="orange"
                        marginTop={10}>
                        Voltar
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default ForecastPage;