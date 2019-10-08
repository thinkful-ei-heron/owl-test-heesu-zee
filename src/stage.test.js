import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Stage from './stage';

describe ('<Stage />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage name='Bob' avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Stage />', () => {
    it ('renders this UI as expected', () => {
        const tree = renderer.create(<Stage name='Bob' avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});