import { Button } from '../common';
import './conflict.css';

export default function Conflict() {
    return (
        <section className="conflict">
            <h6>Designing Better Experience</h6>
            <h2>Problems trying to resolve the conflict between </h2>
            <h3 className="mobile--price">$16.48</h3>
            <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:{' '}
            </p>
            <h3 className="main--price">$16.48</h3>
            <Button variant="fill" IsLoading={false}>
                ADD YOUR CALL TO ACTION
            </Button>
        </section>
    );
}
