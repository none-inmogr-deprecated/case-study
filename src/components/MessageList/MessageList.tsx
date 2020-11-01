import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './MessageList.scss';
import {Box, TextField} from "@material-ui/core";
import IRootState from "../../types/IRootState";
import {IMessage} from "../../types/IMessage";
import messagesLoad from "../../state/actions/messagesLoad";
import messageSelect from "../../state/actions/messageSelect";
import {MessageListItem} from "./MessageListItem";

interface IStateProps {
    messages: IMessage[],
    activeMessage: IMessage | undefined
}

interface IActionProps {
    loadMessages: Function,
    selectMessage: Function,
}

export interface Props extends IStateProps, IActionProps {
}

export const MessageList: React.FC<Props> = (props: Props) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (props.messages.length === 0) {
            props.loadMessages()
        }
    })

    return (
        <>
            <Box bgcolor="info.main" color="info.contrastText" p={2}>
                <TextField label="Search" variant="filled" fullWidth onChange={(e) => setSearch(e.currentTarget.value)} />
            </Box>
            <Box bgcolor="info.main" color="info.contrastText" p={2}>
                {props.messages && <>
                    {props.messages.filter(message => !message.isArchived && (message.message.toLowerCase().includes(search.toLowerCase()) || message.subject.toLowerCase().includes(search.toLowerCase()))).map(message => <MessageListItem
                        key={`message${message.id}`}
                        onClick={evt => props.selectMessage(message.id)}
                        isActive={props.activeMessage?.id === message.id}
                        message={message}/>)}
                </>}
                {props.messages.length === 0 && 'No messages found.'}
            </Box>
        </>
    )
}

const mapStateToProps = (state: IRootState): IStateProps => {
    return {
        messages: state.messages.messages,
        activeMessage: state.messages.activeMessage
    };
};

const mapDispatchToProps = (dispatch: any): IActionProps => ({
    loadMessages: () => dispatch(messagesLoad()),
    selectMessage: (id: number) => dispatch(messageSelect(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
