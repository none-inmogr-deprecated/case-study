import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {MockMessage, MockMessageRead} from "../../mocks/mockMessage";
import MessageListItem, {Props} from "./MessageListItem";

describe('<MessageListItem/>', () => {
    let wrapper: ShallowWrapper;
    let props: Props = {
        message: MockMessage,
        isActive: true,
        onClick: jest.fn(),
    };

    describe('when active', () => {
        beforeEach(() => {
            const mergedProps = {...props, isActive: true}
            wrapper = shallow(<MessageListItem {...mergedProps} />)
        })

        it('match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })

        it('has no read class', () => {
            expect(wrapper.find('.MessageListItem').hasClass('MessageListItem--read')).toBeFalsy()
        })

        it('has active class', () => {
            expect(wrapper.find('.MessageListItem').hasClass('MessageListItem--active')).toBeTruthy()
        })
    })

    describe('when inactive', () => {
        beforeEach(() => {
            const mergedProps = {...props, isActive: false}
            wrapper = shallow(<MessageListItem {...mergedProps} />)
        })
    })

    describe('when message is read', () => {
        beforeEach(() => {
            const mergedProps = {...props, message: MockMessageRead}
            wrapper = shallow(<MessageListItem {...mergedProps} />)
        })

        it('has read class', () => {
            expect(wrapper.find('.MessageListItem').hasClass('MessageListItem--read')).toBeTruthy()
        })
    })
});