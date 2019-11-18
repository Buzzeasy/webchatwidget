import * as React from 'react';

export interface ModalProps{
    toggle:Function,
    close:Function
}

export class CloseModal extends React.Component<ModalProps,{}>{


    render(){
        const {toggle,close} = this.props;
        return(
            <div className="wc-close-modal__root">
                <button className="wc-close-modal__button-warn" onClick={()=>close()}>End Conversation</button>
                <button className="wc-close-modal__button-cancel" onClick={()=>toggle()}>Cancel</button>
            </div>
        )
    }
}