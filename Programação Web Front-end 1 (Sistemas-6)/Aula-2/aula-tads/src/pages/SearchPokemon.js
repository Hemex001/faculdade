import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const PokemonInfo = ({pokemon}) => {
    if (!pokemon) return <div></div>
    return (
        <Card margin={8} maxW="400px">
            <CardHeader>
                <Heading size="lg">{pokemon.name}</Heading>
            </CardHeader>
            <CardBody>
                <Image src={pokemon.sprites.other.home.front_default} width="250px" />
                    <Flex direction="column" gap={2} alignItems="flex-start">
                        <Text fontSize="lg">Habilidades: </Text>
                        {pokemon.abilities.map((ability) => (
                        <Badge>{ability.ability.name}</Badge>
                        ))}
                    </Flex>
            </CardBody>
            <CardFooter>
                <Text fontSize="lg">Tipos: </Text>
                <Flex direction="row" gap={2} alignItems="flex-start" justifyContent="center">
                    <Box>
                        {pokemon.types.map((type) => (
                            <Badge>{type.type.name}</Badge>
                        ))}
                    </Box>
                </Flex>
            </CardFooter>
        </Card>
    );
}


const SearchPokemon = () => {
    const toast = useToast();

    const [input, setInput] = useState();
    const [loading, setLoading] = useState();
    const [pokemon, setPokemon] = useState();

    const onChangeInput = (event) => {
        setInput(event.target.value);
    }

    const getPokemon = async() => {
        try {
            setLoading(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
            setPokemon(response.data);
        } catch (error) {
            toast({
                title: "Erro ao buscar o pokémon",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
                renderIcon: false,
                description: "Verifique se as informações estão corretas!"
            })
        } finally {
            setLoading(false);
        }
    };

    const renderSearchInput = () => {
        return (
        <Flex gap={8} px={20} justifyContent="center" alignItems="center" marginTop={8}>
            <InputGroup size="lg">
                <Input 
                    placeholder="Digite o nome do pokémon" 
                    size="lg" 
                    colorScheme="orange" 
                    value={input}
                    onChange={onChangeInput}
                />
                <InputRightElement w="100px">
                    <Button onClick={() => {
                        setInput("");
                        setPokemon(undefined);
                    }}>Limpar</Button>
                </InputRightElement>
            </InputGroup>

            <Button 
                size="lg" 
                colorScheme="orange"
                onClick={getPokemon}
                isLoading={loading}
            >
                Buscar
            </Button>
        </Flex>
        );
    };

    return (
        <div>
            <Header title="Search Pokémons" />
            {renderSearchInput()}
            <Flex justifyContent="center">
                <PokemonInfo pokemon={pokemon} />
            </Flex>
        </div>
    );
}

export default SearchPokemon;