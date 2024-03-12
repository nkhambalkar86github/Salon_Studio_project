import { useEffect, useState } from "react"

import { Button, Container, Modal, Table } from "react-bootstrap";
import { FetchCostomer, deleteCostomer } from "../Sercices/CostomerService";
import { useNavigate } from "react-router-dom";

export function CostomerList() {


    const [costomers, setCostomer] = useState([]);

    const [showDialog, setShowDialog] = useState(false);

    const [selectNumber, setSelectedNumber] = useState("");   //jis number ko delete krna hai uski value hold krega

    const navigate = useNavigate();



    const openModelDialog = () => {
        setShowDialog(true);
    }
    const closeModelDialog = () => {
        setShowDialog(false);
    }


    async function populateCostomerState() {
        try {
            const data = await FetchCostomer();

            setCostomer(data);

        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        populateCostomerState();
    }, [])

    const handleDelete = async () => {

        try {
            await deleteCostomer(selectNumber);  //jo value line 78 vale function hold kri thi wo value API me jyegi for delete purpose by this method
            populateCostomerState();        //updated costomer ki list assign krega kyuki costomer backend se delete huwa pr wo list me front end me abhi bhi maujud hai
            closeModelDialog();
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>
        <Container>
        <div className="container px-5 masthead-img">
                <h2 className='fw-bold text-danger text-center pt-5 pb-5' style={{ fontFamily: "Sedgwick Ave Display" }}>Customer Enquiry List</h2>
            </div>
            {costomers.length !== 0 ? <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        costomers.map((c) => {
                            return (
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.age}</td>
                                    <td>{c.gender}</td>
                                    <td>{c.number}</td>
                                    <td>{c.email}</td>
                                    <td>
                                        <Button variant="danger" 
                                        className="me-2"
                                        onClick={() => {
                                            // handleDelete(c.age);
                                            openModelDialog();
                                            setSelectedNumber(c.number);      //jis number ko delete krna hai uski value hold ho jayegi
                                        }}>Delete</Button>
                                        <Button variant="primary" onClick={() => {

                                            navigate(`/edit/${c.number}`);

                                        }}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <p>No Costomer founds</p>}


            <Modal show={showDialog} onHide={closeModelDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Conformation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        handleDelete();
                    }}>
                        yes
                    </Button>
                    <Button variant="danger" onClick={closeModelDialog}>
                        no
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
        </>
    )
}