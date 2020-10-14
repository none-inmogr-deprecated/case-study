import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {MessageDetails, Props} from "./MessageDetails";
import {MockMessage} from "../../mocks/mockMessage";

describe('<MessageDetails/>', () => {
    let wrapper: ShallowWrapper;
    let props: Props = {
        message: undefined,
        markRead: jest.fn(),
        markUnread: jest.fn(),
        archiveMessage: jest.fn(),
    };

    describe('without message', () => {
        beforeEach(() => {
            wrapper = shallow(<MessageDetails {...props} />)
        })

        it('displays info text', () => {
            expect(wrapper.find('.MessageDetails__noMessageSelected').length).toBe(1)
            expect(wrapper.find('.MessageDetails__noMessageSelected').text()).toBe('Please select a message')
        })
    })

    describe('with message', () => {
        beforeEach(() => {
            const mergedProps = {...props, message: MockMessage}
            wrapper = shallow(<MessageDetails {...mergedProps} />)
        })

        it('match snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        })

        it('displays subject', () => {
            expect(wrapper.find('.MessageDetails__subject').text()).toEqual(MockMessage.subject)
        })

        it('displays message', () => {
            expect(wrapper.find('.MessageDetails__message').text()).toEqual(MockMessage.message)
        })

        it('displays received date', () => {
            expect(wrapper.find('.MessageDetails__received').text()).toContain(MockMessage.received)
        })

        it('clicking unread button calls markUnread callback', () => {
            wrapper.find('.MessageDetails__unreadButton').simulate('click')
            expect(props.markUnread).toBeCalled()
        })

        it('clicking archive button calls archiveMessage callback', () => {
            wrapper.find('.MessageDetails__archiveButton').simulate('click')
            expect(props.archiveMessage).toBeCalled()
        })
    })
});