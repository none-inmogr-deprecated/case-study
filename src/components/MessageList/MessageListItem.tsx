import {Box} from "@material-ui/core";
import React, {MouseEventHandler} from "react";
import {IMessage} from "../../types/IMessage"
import FiberNewIcon from '@material-ui/icons/FiberNew';
import './MessageListItem.scss';

export interface Props {
    message: IMessage;
    isActive?: boolean;
    onClick: MouseEventHandler;
}

export const MessageListItem: React.FC<Props> = (props: Props) => {
    const classNames = ['MessageListItem'];
    if (props.isActive) {
        classNames.push('MessageListItem--active');
    }
    if (props.message.isRead) {
        classNames.push('MessageListItem--read');
    }

    return (
        <Box p={1} onClick={props.onClick} className={classNames.join(' ')}>
            <div><strong>{props.message.subject}</strong> {!props.message.isRead && <FiberNewIcon/>}</div>
            <div>{props.message.received}</div>
        </Box>
    )
}

export default MessageListItem