import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Complaint from "./Complaint";

export type Reply = {
    created: string;
    modified: string;
    author: string;
    html: string;
};

export type Entry = {
    created: string;
    modified: string;
    author: string;
    title: string;
    html: string;
    replies: Reply[];
};

type Props = {
    entries: Entry[];
};

const Body: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    const xs = props.entries.map(
        (entry: Entry, _index: number, _array: Entry[]): JSX.Element => {
            return (
                <div
                    className="border rounded mb-2 p-2"
                    style={{ backgroundColor: "#f9f9f9" }}
                >
                    <Row>
                        <Col>
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <div className="d-flex pe-3">
                                    <Image
                                        roundedCircle
                                        src="https://bit.ly/3Kp3jMP"
                                    />
                                </div>
                                <div className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <Row>
                                        <Col>
                                            <span className="fw-bolder">
                                                {entry.title}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span className="font-italic fs-6">
                                                {entry.created}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{entry.html}</Col>
                    </Row>
                </div>
            );
        }
    );
    return <Container>{xs}</Container>;
};

export default Body;
