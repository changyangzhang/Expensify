import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from "moment";

test('Should generate set start date', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should generate set end date', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should generate text filter', () =>{
   const text = "something";
   const action = setTextFilter(text);
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text
   })
});

test('Should generate text filter', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('Should generate sort by date', () =>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('Should generate sort by amount', () =>{
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});