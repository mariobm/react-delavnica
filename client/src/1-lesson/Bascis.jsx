import Container from "../Layout/Container"
import UsingFetch from "./UsingFetch"
import UsingHooks from "./UsingHooks"
import UsingProps from "./UsingProps"
import UsingState from "./UsingState"

export default function Basics(props) {
    return (
        <Container>
            <UsingState />
            <UsingProps />
            <UsingHooks />
            <UsingFetch />
        </Container>
    )
};