import Link from "next/link";
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus reprehenderit facere adipisci neque magnam! Vitae nulla repellendus, ad quae, ab explicabo harum itaque voluptas fuga est eligendi, libero velit?</p>
            <Link href="/">Home</Link>
        </Container>
    );
}