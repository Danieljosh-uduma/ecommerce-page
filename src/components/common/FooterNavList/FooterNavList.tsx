import './footer-navlist.css';

interface FooterNavListProps {
    header: string;
    links: link[];
}

interface link {
    id: string;
    label: string;
    url: string;
}

export default function FooterNavList(props: FooterNavListProps) {
    const { header, links } = props;

    return (
        <div className="footer-nav-list">
            <h5>{header}</h5>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
