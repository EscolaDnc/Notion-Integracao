import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function Home() {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(oldData => ({ ...oldData, [name]: value }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/contact', data)
            .then(() => {
                return alert('Obrigado pelo contato');
            })
            .catch((e) => {
                return console.log('Erro no servidor', e.message);
            })
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitForm}>
                <h1 className={styles.title}>Contato para integração do Notion</h1>
                <div className={styles.inputs}>
                    <div>
                        <label htmlFor="name">Nome inteiro</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="João Santos"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-Mail </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="joao@exemplo.com"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="Olá mundo"
                        value={data.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className={styles.btn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
