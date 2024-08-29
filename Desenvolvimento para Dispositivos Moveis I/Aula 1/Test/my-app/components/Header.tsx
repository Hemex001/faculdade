import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
    title: string, 
    subtitle?: string,
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 64,
        paddingHorizontal: 24, 
        padding: 48,
        backgroundColor: "#025b58",
        paddingBottom: 16,
    },
    textTitle: {
        fontSize: 28,
        fontWeight: "bold",
        paddingBottom: 4,
        color: "#ffffff",
    },
    textSubtitle: {
        color: "#befcf5",
        fontSize: 20,
    }

});

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textSubtitle}>{subtitle}</Text>
        </View>
    );
}

export default Header;