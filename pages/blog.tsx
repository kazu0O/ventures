import { useEffect, useState } from 'react';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kevin-jonathan');
                const data = await res.json();
                const items = data.items.slice(0, 3);
                setItems(items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <section>
                <div>
                    <h3>Latest Articles</h3>
                    <ul>
                        <p>Failed to fetch data, please try again later.</p>
                    </ul>
                    <a
                        href={"https://kevin-jonathan.medium.com/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Read on Medium
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div>
                <h3>Latest Articles</h3>
                <ul>
                    {items.map((item, index) => (
                        <div key={index}>
                            <a href={item.link} target={"_blank"}>
                                <h3>{item.title}</h3>
                            </a>
                        </div>
                    ))}
                </ul>
                <a
                    href={"https://kevin-jonathan.medium.com/"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    Read More on Medium
                </a>
            </div>
        </section>
    );
}