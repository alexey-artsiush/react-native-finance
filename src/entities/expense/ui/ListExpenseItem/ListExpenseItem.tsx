import {FC} from 'react';
import {View} from 'react-native';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { IExpense } from '../../model';

interface IProps {
    expenses: IExpense[];
}
    
export const ListExpenseItem: FC<IProps> = ({expenses}) => {
    return (
        <View>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </View>
    )
}