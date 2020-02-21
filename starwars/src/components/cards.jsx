import React, { useState, useEffect } from 'react'
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import axios from 'axios'

const CreateCard = (props) => {
    const [home, setHome] = useState([])
    useEffect(() => {
        axios.get(props.person.homeworld)
            .then(response => {
                setHome(response.data)
            })
    }, [])
    return (
        <Card>
            <CardHeader tag="h3">{props.person.name}</CardHeader>
            <CardBody>
                <CardTitle>Birth Year: {props.person.birth_year}</CardTitle>
                <CardText>{props.person.height}</CardText>
                <CardText>{props.person.mass}</CardText>
                <CardText>{props.person.gender}</CardText>

            </CardBody>
            <CardFooter className="text-muted">{home.name}</CardFooter>
        </Card>
    )
}

export default CreateCard