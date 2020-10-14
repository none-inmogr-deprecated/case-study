import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {MessageHeader, Props} from "./MessageHeader";
import {MockMessage, MockMessageRead} from "../../mocks/mockMessage";

describe('<MessageHeader/>', () => {
    let wrapper: ShallowWrapper;
    let props: Props = {
        messages: []
    };

    describe('without message', () => {
        beforeEach(() => {
            wrapper = shallow(<MessageHeader {...props} />)
        })

        it('displays no unread messages', () => {
            expect(wrapper.find('.MessageHeader__unreadMessages').length).toBe(0)
        })
    })

    describe('without read message', () => {
        beforeEach(() => {
            const mergedProps = {...props, messages: [MockMessageRead]}
            wrapper = shallow(<MessageHeader {...mergedProps} />)
        })

        it('displays no unread messages', () => {
            expect(wrapper.find('.MessageHeader__unreadMessages').length).toBe(0)
        })
    })

    describe('with unread message', () => {
        beforeEach(() => {
            const mergedProps = {...props, messages: [MockMessage, MockMessageRead]}
            wrapper = shallow(<MessageHeader {...mergedProps} />)
        })

        it('match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })

        it('displays unread messages text', () => {
            expect(wrapper.find('.MessageHeader__unreadMessages').length).toBe(1)
            expect(wrapper.find('.MessageHeader__unreadMessages').text()).toContain('1 unread')
        })
    })
});