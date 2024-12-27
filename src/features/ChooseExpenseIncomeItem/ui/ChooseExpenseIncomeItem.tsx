import { IExpense, ListExpenseItem } from '@/entities/expense';
import { getExpenses } from '@/entities/expense/model/selectors/getExpenses';
import { getExpensesThunk } from '@/entities/expense/model/thunks/expenseThunk';
import { IIncome } from '@/entities/income';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import {FC, useEffect} from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';

interface IProps {
    selectedItem: IExpense | IIncome | null;
    setSelectedItem: (item: IExpense | IIncome | null) => void;
    currentTab: 'income' | 'expenses';
}

export const ChooseExpenseIncomeItem: FC<IProps> = ({selectedItem, setSelectedItem, currentTab}) => {
    const dispatch = useAppDispatch();
    const expenses = useSelector(getExpenses)

    useEffect(() => {
        dispatch(getExpensesThunk());
    }, []); 

    console.log(expenses, 'expenses');
    

    return (
        <View>
            {currentTab === 'expenses' && <ListExpenseItem expenses={expenses} />}
            {/* {currentTab === 'income' && <ListIncomeItem expenses={expenses} />} */}
        </View>
    )
}