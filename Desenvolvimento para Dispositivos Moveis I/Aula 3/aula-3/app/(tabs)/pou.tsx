import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#f56f57",
    }
 });

const Pou = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Tela do Pou
            </Text>
            <Link href={"../"}>Go back</Link>

            <Button
            title="Go Back 2"
            onPress={() => {
                router.back();
            }}
            />
        </View>
    );
}

export default Pou;