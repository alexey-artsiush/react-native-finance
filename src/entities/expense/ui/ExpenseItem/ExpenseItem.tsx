import {View, Text, StyleSheet} from 'react-native';
import { IExpense } from '../../model/types/i-expense';

interface IProps {
    expense: IExpense;
}

export const ExpenseItem= ({expense}: IProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <Text style={styles.title}>{expense.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginBottom: 8,
    },
    title: {
        fontSize: 14,
        color: '#333',
    }
});