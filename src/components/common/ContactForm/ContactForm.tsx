import './contact-form.css';

export default function ContactForm() {
    // Contact form for newsletter subscription
    return (
        <section className="contact-form">
            <h5 className="contact-form__title">Get In Touch</h5>
            <form className="contact-form__form">
                <div className="contact-form__input-group">
                    <input
                        type="email"
                        className="contact-form__input"
                        placeholder="Your Email"
                        required
                    />
                    <button type="submit" className="contact-form__button">
                        Subscribe
                    </button>
                </div>
            </form>
            <p className="contact-form__description">Lore imp sum dolor Amit</p>
        </section>
    );
}
