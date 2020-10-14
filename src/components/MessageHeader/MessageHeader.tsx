import React from 'react';
import './MessageHeader.scss';
import {Box} from "@material-ui/core";
import IRootState from "../../types/IRootState";
import {connect} from "react-redux";
import {IMessage} from "../../types/IMessage";

interface IStateProps {
    messages?: IMessage[]
}

export interface Props extends IStateProps {
}

export const MessageHeader: React.FC<Props> = (props: Props) => {
    const unreadMessages = props.messages ? props.messages.filter(message => !message.isRead).length : 0
    return (
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <strong>Messages</strong> {unreadMessages > 0 && <span className="MessageHeader__unreadMessages">{`(${unreadMessages} unread)`}</span>}
        </Box>
    )
}

const mapStateToProps = (state: IRootState): IStateProps => {
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps, null)(MessageHeader)