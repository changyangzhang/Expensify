import filterReducer from '../../reducers/filters';
import moment from "moment";

test('Should setup default filter', ()=>{
   const state =filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', ()=>{
    const state =filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount');
});

test('Should set sortBy to date', ()=>{
    const currentSate = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state =filterReducer(currentSate, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date');
});

test('Should set text filter', ()=>{
    const currentSate = {
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const state =filterReducer(currentSate, {type: 'SET_TEXT_FILTER', text: 'new'})
    expect(state.text).toEqual('new');
});

test('Should set startDate filter', ()=>{
    const currentSate = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state =filterReducer(currentSate, {type: 'SET_START_DATE', startDate:10})
    expect(state.startDate).toEqual(10);
});
test('Should set endDate filter', ()=>{
    const currentSate = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state =filterReducer(currentSate, {type: 'SET_END_DATE', endDate: 10})
    expect(state.endDate).toEqual(10);
});