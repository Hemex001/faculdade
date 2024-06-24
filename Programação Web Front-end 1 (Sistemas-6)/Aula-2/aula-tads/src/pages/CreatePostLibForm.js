import { Button, Flex, Input, Select, Textarea } from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const USERS = [
    {
        name: "John",
        id: 1,
    },
    {
        name: "Sara",
        id: 2,
    },
    {
        name: "Jane",
        id: 3,
    },
];

const CreatePostLibForm = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const createPost = async (values) => {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: values.title,
                body: values.body,
                userId: values.user,
            });
            alert("Post created successfully");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <Header title="Cadastro de Posts" />
            <Flex direction="column" gap={8} padding={8} justifyContent="center" alignItems="center" >
                <form onSubmit={handleSubmit(createPost)}>
                    <Input placeholder="Digite o titulo do post" width={600} {...register("title", {required: true})} />
                    <Textarea placeholder="Digite o corpo do post" width={600} {...register("body")}/>
                    <Select placeholder="Selecione o usuário" width={600} size="lg" {...register("user")} >
                        {USERS.map((user) => (
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </Select>
                    <Button colorScheme="orange" type="submit">
                        + Criar Post
                    </Button>
                </form>
            </Flex>
        </div>
    );
}

export default CreatePostLibForm;