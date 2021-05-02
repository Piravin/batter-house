import React from 'react';
import Styles from '../styles/feedback.module.scss';

const Feedback: React.FC = () => {
    return (
        <section className={Styles.main}>
            <h1>Your Feedback</h1>
            <form>
                <div className={Styles.group}>
                <label>Name: </label>
                <input type="text" name="name" placeholder="Enter your name"/>
                </div>

                <div className={Styles.group}>
                <label>Mobile :</label>
                <input type="number" name="mobile" placeholder="Mobile number"/>
                </div>

                <div className={Styles.group}>
                <label>Product purchased :</label>
                <textarea name="product" placeholder="Products purchased"/>
                </div>

                <div className={Styles.feedback}>
                <label>Feedback :</label>
                <textarea name="feedback"  placeholder="Enter your feedback"></textarea>
                </div>

                <button>Submit</button>
            </form>
        </section>
    );
}

export default Feedback;