import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { Modal, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_GET_CHATBOT } from "../../graphql/Mutations";
import "./chatbot.css"
const ChatBot = () => {
    const [show, setShow] = useState(false);
    const [promptState, setPromptState] = useState("");
    const [dataState, setDataState] = useState("");
    const [chatBot] = useMutation(MUTATION_GET_CHATBOT);

    const handleClose = () =>{
        setPromptState("")
        setDataState("")
        setShow(false)
    } ;
    const handleShow = () => setShow(true);

    const getAnswer= async()=>{
        if(!promptState){
            return
        }
        const { data } = await chatBot({ variables: {
            "question" : promptState
        } });
     setDataState(data.chatBot.answer)
    }
    return (
        <>
            <BsFillQuestionOctagonFill width={20} onClick={handleShow} className="chatboticon" />
            <Modal show={show} onHide={handleClose} size="" >
                <Modal.Header closeButton>
                    <Modal.Title>Ask Any Question !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control aria-label="First name" 
                    onChange={(e)=> setPromptState(e.target.value)}
                    value={promptState}
                    />
                <div >
                    {dataState}
                </div>
                </Modal.Body>
                <Modal.Footer>
                    {
                        promptState ?
                            <Button variant="success" onClick={()=> getAnswer()}>
                                Get answer!
                            </Button>

                            : ""
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ChatBot