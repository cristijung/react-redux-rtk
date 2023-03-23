import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// A função abaixo é chamada de thunk e nos permite realizar lógica assíncrona. Ela
// pode ser despachada como uma ação regular: dispatch(incrementAsync(10)). Isso
// chamará o thunk com a função dispatch como o primeiro argumento. Código assíncrono
// pode então ser executado e outras ações podem ser despachadas. Thunks são
// tipicamente usados para fazer solicitações assíncronas.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // O valor que retornamos se torna o payload da ação fulfilled.
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // O campo reducers nos permite definir reducers e gerar ações associadas.
  reducers: {
    increment: (state) => {
      // O Redux Toolkit nos permite escrever lógica de "mutação" nos reducers. Ele
      // na verdade não altera o estado porque usa a biblioteca Immer,
      // que detecta alterações em um "estado preliminar" e produz um novo
      // estado imutável baseado nessas mudanças.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Usamos o tipo PayloadAction para declarar o conteúdo de action.payload.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // O campo extraReducers permite que o slice manipule ações definidas em outros lugares,
  // incluindo ações geradas por createAsyncThunk ou em outros slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//A função abaixo é chamada de seletor e nos permite selecionar um valor do estado. 
//Seletores também podem ser definidos em linha onde são usados em vez de no arquivo de fatia. 
//Por exemplo: useSelector ((state: RootState) => state.counter.value)
export const selectCount = (state: RootState) => state.counter.value;

// Nós também podemos escrever thunks manualmente, que podem conter lógica síncrona e assíncrona.
// Aqui está um exemplo de despachar ações condicionalmente com base no estado atual.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
