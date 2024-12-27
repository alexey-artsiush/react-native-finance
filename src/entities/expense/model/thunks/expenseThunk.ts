import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExpensesListApi } from "../api/expenseApi";
import { IExpense } from "../types/i-expense";

export const getExpensesThunk = createAsyncThunk<IExpense[], void>(
    'expense/getExpenses', async () => {
        const response = await getExpensesListApi();
        return response.result;
    }
);