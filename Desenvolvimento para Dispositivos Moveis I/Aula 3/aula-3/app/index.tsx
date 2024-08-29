import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#460367",
    }
 });

const Initial = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Tela Initial
            </Text>
            <Link href={"/(tabs)"}>Ir para a tela de Tabs</Link>
        </View>
    );
}

export default Initial;