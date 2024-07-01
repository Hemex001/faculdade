import React, { useState } from 'react';
import { Box, Button, Center, Flex, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { getCurrentWeather } from '../Api';
import { Link } from 'react-router-dom';

const CurrentWeatherPage = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async () => {
        const data = await getCurrentWeather(city);
        setWeatherData(data);
    };

    return (
        <Flex justifyContent="center">
            <Box gap={8} marginTop={8} justifyContent="center">
                <Heading>Previsão do Tempo Atual</Heading>
                <Center>
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
                </Center>
                {weatherData && (
                    <Box mt={8}>
                        <Text fontSize={22}><b>Cidade:</b> {weatherData.location.name}</Text>
                        <Text fontSize={22}><b>Temperatura:</b> {weatherData.current.temp_c}°C</Text>
                        <Text fontSize={22}><b>Condições:</b> {weatherData.current.condition.text}</Text>
                    </Box>
                )}
                <Link to="/forecast">
                    <Button
                        size="lg"
                        colorScheme="orange"
                        marginTop={10}
                    >Ver previsão para 5 Dias
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default CurrentWeatherPage;