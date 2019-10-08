import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';



describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List name="balay" avatar="https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1" inSession='true' onStage='true'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<List />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<List name="balay" avatar="https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1" inSession='true' onStage='true'/>).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
});