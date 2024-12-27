import { IExpense } from '@/entities/expense';
import { IIncome } from '@/entities/income/model/types/i-income';
import { SwitchExpenseIncome } from '@/features/addExpense/AddExpense';
import { ChooseExpenseIncomeItem } from '@/features/ChooseExpenseIncomeItem';
import {FC, useState} from 'react';
import { View} from 'react-native';


export const ExpenseIncomeWidget: FC = () => {
    const [currentTab, setCurrentTab] = useState<'income' | 'expenses'>('income');
    const [selectedItem, setSelectedItem] = useState<IExpense | IIncome | null>(null);

    return (
        <View>
          <SwitchExpenseIncome currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <ChooseExpenseIncomeItem selectedItem={selectedItem} setSelectedItem={setSelectedItem} currentTab={currentTab} />    
        </View>
    )
}